import React from 'react';
import ProductList from '../components/ProductList';

function ProductPage() {
  return (
    <div className="product-page">
      <h1>Produk Pasar Tradisional</h1>
      <p>Pilih produk segar langsung dari pasar tradisional favorit Anda</p>
      <ProductList />
    </div>
  );
}

export default ProductPage;