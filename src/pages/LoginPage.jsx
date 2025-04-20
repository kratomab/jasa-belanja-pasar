import React, { useState } from 'react';
    import { useAuth } from '../context/AuthContext';
    import { useNavigate, Link } from 'react-router-dom';
    import { LogIn } from 'lucide-react';

    function LoginPage() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const { login } = useAuth();
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error

        // Validasi sederhana
        if (!email || !password) {
          setError('Email dan password harus diisi.');
          return;
        }

        // Simulasi login
        // Di aplikasi nyata, panggil API backend di sini
        console.log('Mencoba login dengan:', { email, password });
        // Anggap login berhasil jika email mengandung '@' dan password ada
        if (email.includes('@') && password) {
           // Gunakan email sebagai nama sementara jika tidak ada data nama
          login({ email: email, name: email.split('@')[0] });
          navigate('/'); // Redirect ke halaman utama setelah login
        } else {
          setError('Email atau password salah.');
        }
      };

      return (
        <div className="auth-page">
          <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="auth-form">
              {error && <p className="error-message">{error}</p>}
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
                  placeholder="Masukkan password Anda"
                  required
                />
              </div>
              <button type="submit" className="auth-button">
                <LogIn size={18} /> Login
              </button>
            </form>
            <p className="auth-switch">
              Belum punya akun? <Link to="/register">Daftar di sini</Link>
            </p>
          </div>
        </div>
      );
    }

    export default LoginPage;