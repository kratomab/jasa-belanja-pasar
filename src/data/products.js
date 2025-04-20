import React from 'react';

// Daftar produk pasar tradisional dengan kategori
const products = [
  // Sayuran
  {
    id: 'v001',
    name: 'Bayam',
    category: 'Sayuran',
    price: 5000,
    unit: 'ikat',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Bayam segar langsung dari petani lokal'
  },
  {
    id: 'v002',
    name: 'Kangkung',
    category: 'Sayuran',
    price: 4000,
    unit: 'ikat',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kangkung hijau dan segar'
  },
  {
    id: 'v003',
    name: 'Wortel',
    category: 'Sayuran',
    price: 12000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Wortel organik kaya vitamin A'
  },
  {
    id: 'v004',
    name: 'Kentang',
    category: 'Sayuran',
    price: 15000,
    unit: 'kg',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kentang segar ukuran sedang'
  },
  {
    id: 'v005',
    name: 'Tomat',
    category: 'Sayuran',
    price: 10000,
    unit: 'kg',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Tomat merah segar untuk masakan'
  },
  
  // Buah-buahan
  {
    id: 'f001',
    name: 'Pisang',
    category: 'Buah',
    price: 18000,
    unit: 'sisir',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Pisang raja manis dan segar'
  },
  {
    id: 'f002',
    name: 'Jeruk',
    category: 'Buah',
    price: 25000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Jeruk manis dari Medan'
  },
  {
    id: 'f003',
    name: 'Apel',
    category: 'Buah',
    price: 35000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Apel merah segar dan manis'
  },
  {
    id: 'f004',
    name: 'Mangga',
    category: 'Buah',
    price: 30000,
    unit: 'kg',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Mangga harum manis matang'
  },
  {
    id: 'f005',
    name: 'Semangka',
    category: 'Buah',
    price: 20000,
    unit: 'buah',
    stock: 10,
    image: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Semangka merah segar ukuran sedang'
  },
  
  // Daging dan Ikan
  {
    id: 'm001',
    name: 'Ayam Potong',
    category: 'Daging',
    price: 38000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Ayam segar potong per ekor'
  },
  {
    id: 'm002',
    name: 'Daging Sapi',
    category: 'Daging',
    price: 120000,
    unit: 'kg',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Daging sapi segar pilihan'
  },
  {
    id: 'm003',
    name: 'Ikan Nila',
    category: 'Ikan',
    price: 35000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Ikan nila segar dari tambak lokal'
  },
  {
    id: 'm004',
    name: 'Ikan Lele',
    category: 'Ikan',
    price: 30000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Ikan lele segar ukuran konsumsi'
  },
  {
    id: 'm005',
    name: 'Telur Ayam',
    category: 'Protein',
    price: 28000,
    unit: 'kg',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1569288063643-5d5369c4e04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Telur ayam segar dari peternakan lokal'
  },
  
  // Bumbu Dapur
  {
    id: 's001',
    name: 'Bawang Merah',
    category: 'Bumbu',
    price: 40000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Bawang merah segar berkualitas'
  },
  {
    id: 's002',
    name: 'Bawang Putih',
    category: 'Bumbu',
    price: 38000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Bawang putih segar berkualitas'
  },
  {
    id: 's003',
    name: 'Cabai Merah',
    category: 'Bumbu',
    price: 50000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Cabai merah segar dan pedas'
  },
  {
    id: 's004',
    name: 'Cabai Rawit',
    category: 'Bumbu',
    price: 60000,
    unit: 'kg',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1588280330807-6a7c4beea7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Cabai rawit segar dan pedas'
  },
  {
    id: 's005',
    name: 'Jahe',
    category: 'Bumbu',
    price: 25000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Jahe segar untuk bumbu dan minuman'
  },
  
  // Bahan Pokok
  {
    id: 'b001',
    name: 'Beras',
    category: 'Pokok',
    price: 12000,
    unit: 'kg',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Beras putih berkualitas'
  },
  {
    id: 'b002',
    name: 'Gula Pasir',
    category: 'Pokok',
    price: 15000,
    unit: 'kg',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1610137312679-8b3a0c0a4933?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Gula pasir putih berkualitas'
  },
  {
    id: 'b003',
    name: 'Minyak Goreng',
    category: 'Pokok',
    price: 20000,
    unit: 'liter',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Minyak goreng berkualitas'
  },
  {
    id: 'b004',
    name: 'Tepung Terigu',
    category: 'Pokok',
    price: 10000,
    unit: 'kg',
    stock: 70,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Tepung terigu protein sedang'
  },
  {
    id: 'b005',
    name: 'Garam',
    category: 'Pokok',
    price: 5000,
    unit: 'kg',
    stock: 90,
    image: 'https://images.unsplash.com/photo-1518110925495-b37653f402f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Garam beryodium berkualitas'
  }
];

export default products;