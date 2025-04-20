import React, { createContext, useState, useContext, useEffect } from 'react';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true); // State untuk loading awal

      // Coba ambil data user dari localStorage saat komponen dimuat
      useEffect(() => {
        try {
          const storedUser = localStorage.getItem('authUser');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        } catch (error) {
          console.error("Gagal memuat user dari localStorage:", error);
          localStorage.removeItem('authUser'); // Hapus data korup jika ada
        } finally {
          setLoading(false); // Selesai loading
        }
      }, []);

      // Fungsi login sederhana (simulasi)
      const login = (userData) => {
        // Di aplikasi nyata, ini akan melibatkan panggilan API ke backend
        const fakeUserData = { id: 'user123', name: userData.name || 'Pengguna Baru', email: userData.email };
        setUser(fakeUserData);
        try {
          localStorage.setItem('authUser', JSON.stringify(fakeUserData));
        } catch (error) {
          console.error("Gagal menyimpan user ke localStorage:", error);
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