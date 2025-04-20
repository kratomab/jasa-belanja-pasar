import React from 'react';
    import { NavLink, Link } from 'react-router-dom';
    import { Home, ShoppingBasket, ShoppingCart, User, LogIn, LogOut } from 'lucide-react';
    import SearchBar from './SearchBar';
    import { useAuth } from '../context/AuthContext';
    import { useCart } from '../context/CartContext'; // Import useCart

    function Header() {
      const { isAuthenticated, user, logout, loading } = useAuth();
      const { cart } = useCart(); // Dapatkan data keranjang

      const handleLogout = () => {
        logout();
        // Navigasi mungkin tidak diperlukan jika context handle redirect
      };

      return (
        <header>
          <div className="header-left"> {/* Kelompokkan navigasi kiri */}
            <Link to="/" className="logo"> {/* Tambahkan logo atau nama aplikasi */}
              PasarOnline
            </Link>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    <Home size={20} /> {/* Ukuran ikon disesuaikan */}
                    <span>Beranda</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/produk" className={({ isActive }) => isActive ? 'active' : ''}>
                    <ShoppingBasket size={20} />
                    <span>Produk</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-center"> {/* Tempatkan search bar di tengah */}
            <SearchBar />
          </div>

          <div className="header-right"> {/* Kelompokkan ikon kanan */}
            <NavLink to="/keranjang" className={({ isActive }) => `cart-icon-link ${isActive ? 'active' : ''}`}>
              <ShoppingCart size={22} />
              {cart.totalItems > 0 && (
                <span className="cart-badge">{cart.totalItems}</span>
              )}
            </NavLink>

            {loading ? (
              <div className="loading-spinner"></div> /* Tampilkan spinner saat loading */
            ) : isAuthenticated ? (
              <div className="user-menu">
                <NavLink to="/profil" className={({ isActive }) => isActive ? 'active' : ''}>
                  <User size={20} />
                  <span>{user.name}</span>
                </NavLink>
                <button onClick={handleLogout} className="logout-button-header">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <NavLink to="/login" className={({ isActive }) => `login-link ${isActive ? 'active' : ''}`}>
                <LogIn size={20} />
                <span>Login</span>
              </NavLink>
            )}
          </div>
        </header>
      );
    }

    export default Header;