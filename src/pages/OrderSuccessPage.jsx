import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

function OrderSuccessPage() {
  // 生成随机订单号
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  return (
    <div className="order-success-page">
      <div className="success-icon">
        <CheckCircle size={80} color="#4CAF50" />
      </div>
      
      <h1>Pesanan Berhasil!</h1>
      
      <p className="success-message">
        Terima kasih telah berbelanja di Pasar Tradisional Online kami.
        Pesanan Anda telah diterima dan sedang diproses.
      </p>
      
      <div className="order-info">
        <p className="order-number">
          Nomor Pesanan: <strong>{orderNumber}</strong>
        </p>
        <p>
          Anda akan menerima konfirmasi melalui SMS atau WhatsApp segera.
        </p>
      </div>
      
      <div className="success-actions">
        <Link to="/" className="home-button">
          <Home size={18} />
          <span>Kembali ke Beranda</span>
        </Link>
        
        <Link to="/produk" className="shop-more-button">
          <ShoppingBag size={18} />
          <span>Belanja Lagi</span>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccessPage;