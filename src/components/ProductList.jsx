import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const { addToCart } = useCart();
  
  // 获取所有唯一类别
  const categories = ['Semua', ...new Set(products.map(product => product.category))];
  
  // 根据搜索和类别筛选产品
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 处理添加到购物车
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list-container">
      <div className="product-filters">
        <div className="search-container">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Cari produk..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="product-price">Rp {product.price.toLocaleString('id-ID')}/{product.unit}</span>
                  <span className="product-stock">Stok: {product.stock}</span>
                </div>
                <button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={18} />
                  <span>Tambah ke Keranjang</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-found">
            <p>Tidak ada produk yang ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;