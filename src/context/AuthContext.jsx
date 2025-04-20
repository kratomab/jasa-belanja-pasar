import React, { createContext, useState, useContext, useEffect } from 'react';
import { saveUserToDatabase, getUserFromDatabase } from '../services/firebase';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true); // State untuk loading awal

      // Coba ambil data user dari localStorage dan database saat komponen dimuat
      useEffect(() => {
        const loadUser = async () => {
          try {
            const storedUser = localStorage.getItem('authUser');
            if (storedUser) {
              const userData = JSON.parse(storedUser);
              setUser(userData);
              
              // Coba ambil data terbaru dari database
              if (userData.id) {
                const dbUser = await getUserFromDatabase(userData.id);
                if (dbUser) {
                  setUser(dbUser);
                  localStorage.setItem('authUser', JSON.stringify(dbUser));
                }
              }
            }
          } catch (error) {
            console.error("Gagal memuat user dari penyimpanan:", error);
            localStorage.removeItem('authUser'); // Hapus data korup jika ada
          } finally {
            setLoading(false); // Selesai loading
          }
        };
        
        loadUser();
      }, []);

      // Fungsi login dengan penyimpanan ke database
      const login = async (userData) => {
        try {
          // Simpan data pengguna ke database
          const savedUser = await saveUserToDatabase({
            id: 'user_' + Date.now(),
            name: userData.name || 'Pengguna Baru', 
            email: userData.email,
            createdAt: new Date().toISOString()
          });
          
          setUser(savedUser);
          localStorage.setItem('authUser', JSON.stringify(savedUser));
        } catch (error) {
          console.error("Gagal menyimpan user ke database:", error);
        }
      };

      // Fungsi logout
      const logout = () => {
        setUser(null);
        try {
          localStorage.removeItem('authUser');
        } catch (error) {
          console.error("Gagal menghapus user dari localStorage:", error);
        }
      };

      const value = {
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
      };

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };

    export const useAuth = () => {
      const context = useContext(AuthContext);
      if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
    };