import React, { useState } from 'react';
    import { useAuth } from '../context/AuthContext';
    import { useNavigate, Link } from 'react-router-dom';
    import { UserPlus } from 'lucide-react';

    function RegisterPage() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const { login } = useAuth(); // Gunakan login untuk auto-login setelah register
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error

        // Validasi sederhana
        if (!name || !email || !password || !confirmPassword) {
          setError('Semua kolom harus diisi.');
          return;
        }
        if (password !== confirmPassword) {
          setError('Password dan konfirmasi password tidak cocok.');
          return;
        }
        if (password.length < 6) {
          setError('Password minimal harus 6 karakter.');
          return;
        }

        // Simulasi registrasi
        // Di aplikasi nyata, panggil API backend di sini
        console.log('Mencoba registrasi dengan:', { name, email, password });

        // Anggap registrasi berhasil, langsung login
        login({ name, email });
        navigate('/'); // Redirect ke halaman utama setelah registrasi & login
      };

      return (
        <div className="auth-page">
          <div className="auth-container">
            <h1>Registrasi</h1>
            <form onSubmit={handleSubmit} className="auth-form">
              {error && <p className="error-message">{error}</p>}
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Konfirmasi Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi password Anda"
                  required
                />
              </div>
              <button type="submit" className="auth-button">
                <UserPlus size={18} /> Daftar
              </button>
            </form>
            <p className="auth-switch">
              Sudah punya akun? <Link to="/login">Login di sini</Link>
            </p>
          </div>
        </div>
      );
    }

    export default RegisterPage;