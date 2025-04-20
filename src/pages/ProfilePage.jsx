import React from 'react';
    import { useAuth } from '../context/AuthContext';
    import { useNavigate } from 'react-router-dom';
    import { User, Mail, LogOut } from 'lucide-react';

    function ProfilePage() {
      const { user, logout } = useAuth();
      const navigate = useNavigate();

      const handleLogout = () => {
        logout();
        navigate('/'); // Redirect ke home setelah logout
      };

      if (!user) {
        // Seharusnya tidak bisa diakses jika belum login, tapi sebagai fallback
        navigate('/login');
        return null;
      }

      return (
        <div className="profile-page">
          <h1>Profil Pengguna</h1>
          <div className="profile-card">
            <div className="profile-info">
              <User size={20} />
              <span>Nama:</span>
              <strong>{user.name}</strong>
            </div>
            <div className="profile-info">
              <Mail size={20} />
              <span>Email:</span>
              <strong>{user.email}</strong>
            </div>
            {/* Tambahkan info profil lain di sini jika ada */}
            <button onClick={handleLogout} className="logout-button">
              <LogOut size={18} /> Logout
            </button>
          </div>
          {/* Tambahkan bagian lain seperti Riwayat Pesanan, Alamat, dll. di sini nanti */}
        </div>
      );
    }

    export default ProfilePage;