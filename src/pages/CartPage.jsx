import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // 处理数量增加
  const handleIncreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  // 处理数量减少
  const handleDecreaseQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  // 处理移除商品
  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cart-page">
      <h1>Keranjang Belanja</h1>
      
      {cart.items.length === 0 ? (
        <div className="empty-cart">
          <p>Keranjang belanja Anda kosong.</p>
          <Link to="/produk" className="continue-shopping-button">
            Lanjutkan Belanja
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">
                    Rp {item.price.toLocaleString('id-ID')}/{item.unit}
                  </p>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  <p>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                </div>
                <div className="cart-item-remove">
                  <button 
                    className="remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Total Item:</span>
                <span>{cart.totalItems}</span>
              </div>
              <div className="cart-total-row cart-grand-total">
                <span>Total Harga:</span>
                <span>Rp {cart.totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <div className="cart-actions">
              <Link to="/produk" className="continue-shopping-button">
                Lanjutkan Belanja
              </Link>
              <Link to="/checkout" className="checkout-button">
                Lanjut ke Pembayaran <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;