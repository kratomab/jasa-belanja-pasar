import React from 'react';
    import { ShoppingCart } from 'lucide-react';

    function HomePage() {
      return (
        <div className="hero-section">
          {/* Gambar bisa dipindahkan ke atas untuk fokus visual */}
          <img
            src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" // Sedikit penyesuaian URL untuk ukuran
            alt="Suasana Pasar Tradisional"
          />
          <h1>Belanja Mudah dari Pasar Favorit Anda</h1> {/* Judul lebih singkat & menarik */}
          <p>
            Dapatkan sayur, buah, daging, dan kebutuhan pokok segar lainnya langsung dari
            pedagang pasar tradisional terpercaya. Kami antarkan ke rumah Anda!
          </p>
          {/* Tombol CTA lebih menonjol */}
          <a href="#" className="cta-button">
             <ShoppingCart size={24} /> {/* Ikon lebih besar */}
             <span>Mulai Belanja Sekarang</span>
          </a>
        </div>
      );
    }

    export default HomePage;