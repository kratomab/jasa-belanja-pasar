import React from 'react';
    import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
    import Header from './components/Header';
    import Footer from './components/Footer';
    import HomePage from './pages/HomePage';
    import ProductPage from './pages/ProductPage';
    import CartPage from './pages/CartPage';
    import CheckoutPage from './pages/CheckoutPage';
    import OrderSuccessPage from './pages/OrderSuccessPage';
    import LoginPage from './pages/LoginPage';         // Import halaman baru
    import RegisterPage from './pages/RegisterPage';   // Import halaman baru
    import ProfilePage from './pages/ProfilePage';     // Import halaman baru
    import { CartProvider } from './context/CartContext';
    import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider dan useAuth

    // Komponen untuk melindungi rute
    function ProtectedRoute({ children }) {
      const { isAuthenticated, loading } = useAuth();

      if (loading) {
        return <div>Loading...</div>; // Atau tampilkan spinner loading
      }

      return isAuthenticated ? children : <Navigate to="/login" replace />;
    }

    // Komponen untuk rute publik saja (misal: login/register tidak boleh diakses jika sudah login)
    function PublicRoute({ children }) {
        const { isAuthenticated, loading } = useAuth();

        if (loading) {
          return <div>Loading...</div>; // Atau tampilkan spinner loading
        }

        return !isAuthenticated ? children : <Navigate to="/" replace />;
    }


    function AppContent() {
      // Komponen ini diperlukan agar useAuth bisa digunakan di dalam ProtectedRoute
      // karena AuthProvider membungkus Routes
      return (
        <>
          <Header />
          <main>
            <Routes>
              {/* Rute Publik */}
              <Route path="/" element={<HomePage />} />
              <Route path="/produk" element={<ProductPage />} />
              <Route path="/keranjang" element={<CartPage />} />
              <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
              <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />

              {/* Rute Terlindungi */}
              <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
              <Route path="/order-success" element={<ProtectedRoute><OrderSuccessPage /></ProtectedRoute>} />
              <Route path="/profil" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

              {/* Fallback atau Halaman 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }


    function App() {
      return (
        <AuthProvider> {/* AuthProvider membungkus CartProvider dan AppContent */}
          <CartProvider>
             <AppContent />
          </CartProvider>
        </AuthProvider>
      );
    }

    export default App;