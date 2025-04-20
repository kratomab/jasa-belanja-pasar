import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNotifications } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';
import { saveOrderToDatabase } from '../services/firebase';
import { Check, CreditCard, Wallet, Truck, Clock } from 'lucide-react';

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    deliveryTime: 'sameday',
    paymentMethod: 'cod'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 配送选项
  const deliveryOptions = [
    { id: 'sameday', label: 'Hari Ini (2-3 jam)', icon: <Clock size={20} /> },
    { id: 'tomorrow', label: 'Besok Pagi (8-10)', icon: <Clock size={20} /> },
    { id: 'custom', label: 'Pilih Waktu Lain', icon: <Clock size={20} /> }
  ];
  
  // 支付方式选项
  const paymentOptions = [
    { id: 'cod', label: 'Bayar di Tempat (COD)', icon: <Wallet size={20} /> },
    { id: 'transfer', label: 'Transfer Bank', icon: <CreditCard size={20} /> },
    { id: 'ewallet', label: 'E-Wallet (OVO, GoPay, DANA)', icon: <Wallet size={20} /> }
  ];
  
  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // 清除错误
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // 验证表单
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon harus diisi';
    } else if (!/^[0-9]{10,13}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Nomor telepon tidak valid';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Alamat harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Buat objek pesanan
      const orderData = {
        customer: formData,
        items: cart.items,
        totalPrice: cart.totalPrice,
        userId: user?.id || 'guest',
        orderDate: new Date().toISOString(),
        status: 'pending'
      };
      
      // Simpan pesanan ke database
      const savedOrder = await saveOrderToDatabase(orderData);
      console.log('Order submitted:', savedOrder);
      
      // Buat notifikasi untuk pesanan baru
      addNotification({
        title: 'Pesanan Baru',
        message: `Pesanan baru dengan ID ${savedOrder.id} telah dibuat`,
        type: 'order',
        orderId: savedOrder.id
      });
      
      // Bersihkan keranjang
      clearCart();
      
      // Navigasi ke halaman sukses
      navigate('/order-success');
    } catch (error) {
      console.error('Gagal memproses pesanan:', error);
      // Tambahkan penanganan error di sini
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // 如果购物车为空，重定向到产品页面
  if (cart.items.length === 0) {
    return (
      <div className="empty-checkout">
        <h1>Checkout</h1>
        <p>Keranjang belanja Anda kosong. Silakan tambahkan produk terlebih dahulu.</p>
        <button 
          className="continue-shopping-button"
          onClick={() => navigate('/produk')}
        >
          Lihat Produk
        </button>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2>Informasi Pengiriman</h2>
              
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Alamat Lengkap</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                  rows="3"
                ></textarea>
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="notes">Catatan (opsional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="2"
                ></textarea>
              </div>
            </div>
            
            <div className="form-section">
              <h2>Waktu Pengiriman</h2>
              <div className="delivery-options">
                {deliveryOptions.map(option => (
                  <div key={option.id} className="delivery-option">
                    <input
                      type="radio"
                      id={`delivery-${option.id}`}
                      name="deliveryTime"
                      value={option.id}
                      checked={formData.deliveryTime === option.id}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`delivery-${option.id}`} className="delivery-label">
                      <div className="delivery-icon">{option.icon}</div>
                      <div className="delivery-text">{option.label}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="form-section">
              <h2>Metode Pembayaran</h2>
              <div className="payment-options">
                {paymentOptions.map(option => (
                  <div key={option.id} className="payment-option">
                    <input
                      type="radio"
                      id={`payment-${option.id}`}
                      name="paymentMethod"
                      value={option.id}
                      checked={formData.paymentMethod === option.id}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={`payment-${option.id}`} className="payment-label">
                      <div className="payment-icon">{option.icon}</div>
                      <div className="payment-text">{option.label}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              type="submit" 
              className="place-order-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Memproses...' : 'Selesaikan Pesanan'}
            </button>
          </form>
        </div>
        
        <div className="order-summary">
          <h2>Ringkasan Pesanan</h2>
          
          <div className="order-items">
            {cart.items.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-quantity">{item.quantity}x</div>
                <div className="order-item-name">{item.name}</div>
                <div className="order-item-price">
                  Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="order-total-row">
              <span>Subtotal</span>
              <span>Rp {cart.totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <div className="order-total-row">
              <span>Biaya Pengiriman</span>
              <span>Rp 10.000</span>
            </div>
            <div className="order-total-row order-grand-total">
              <span>Total</span>
              <span>Rp {(cart.totalPrice + 10000).toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;