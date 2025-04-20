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
  },
  
  // Sayuran Tambahan
  {
    id: 'v006',
    name: 'Sawi Hijau',
    category: 'Sayuran',
    price: 5000,
    unit: 'ikat',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Sawi hijau segar untuk tumisan'
  },
  {
    id: 'v007',
    name: 'Kol/Kubis',
    category: 'Sayuran',
    price: 8000,
    unit: 'kg',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1594282486552-05a9f0a53f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kubis segar untuk sayur atau lalapan'
  },
  {
    id: 'v008',
    name: 'Terong Ungu',
    category: 'Sayuran',
    price: 7000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1613499563689-8b9c69bbd380?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Terong ungu segar untuk tumisan atau balado'
  },
  {
    id: 'v009',
    name: 'Daun Singkong',
    category: 'Sayuran',
    price: 4000,
    unit: 'ikat',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Daun singkong segar untuk sayur'
  },
  {
    id: 'v010',
    name: 'Kacang Panjang',
    category: 'Sayuran',
    price: 6000,
    unit: 'ikat',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1627735483792-c3a2aba4d9c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang panjang segar untuk tumisan'
  },
  
  // Buah Tambahan
  {
    id: 'f006',
    name: 'Pepaya',
    category: 'Buah',
    price: 15000,
    unit: 'buah',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Pepaya matang dan manis'
  },
  {
    id: 'f007',
    name: 'Nanas',
    category: 'Buah',
    price: 12000,
    unit: 'buah',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Nanas manis dari Subang'
  },
  {
    id: 'f008',
    name: 'Jambu Biji',
    category: 'Buah',
    price: 18000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Jambu biji merah segar dan manis'
  },
  {
    id: 'f009',
    name: 'Salak',
    category: 'Buah',
    price: 15000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1582414004129-4b2b85010bd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Salak pondoh manis dari Yogyakarta'
  },
  {
    id: 'f010',
    name: 'Rambutan',
    category: 'Buah',
    price: 20000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1629215854323-3297a19a3425?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Rambutan manis dan segar'
  },
  
  // Umbi-umbian
  {
    id: 'u001',
    name: 'Singkong',
    category: 'Umbi',
    price: 6000,
    unit: 'kg',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f13fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Singkong segar untuk direbus atau digoreng'
  },
  {
    id: 'u002',
    name: 'Ubi Jalar',
    category: 'Umbi',
    price: 8000,
    unit: 'kg',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1596097635121-14b38c5d7a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Ubi jalar ungu kaya antioksidan'
  },
  {
    id: 'u003',
    name: 'Talas',
    category: 'Umbi',
    price: 10000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Talas segar untuk direbus atau digoreng'
  },
  {
    id: 'u004',
    name: 'Gembili',
    category: 'Umbi',
    price: 12000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f13fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Gembili segar untuk direbus'
  },
  {
    id: 'u005',
    name: 'Garut',
    category: 'Umbi',
    price: 15000,
    unit: 'kg',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1598030304671-5aa1d6f13fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Umbi garut untuk tepung dan jajanan tradisional'
  },
  
  // Kacang-kacangan
  {
    id: 'k001',
    name: 'Kacang Tanah',
    category: 'Kacang',
    price: 25000,
    unit: 'kg',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1567892737950-30c4db37cd89?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang tanah segar dengan kulit'
  },
  {
    id: 'k002',
    name: 'Kacang Hijau',
    category: 'Kacang',
    price: 20000,
    unit: 'kg',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang hijau untuk bubur atau kecambah'
  },
  {
    id: 'k003',
    name: 'Kacang Merah',
    category: 'Kacang',
    price: 28000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang merah untuk sup atau es kacang merah'
  },
  {
    id: 'k004',
    name: 'Kacang Kedelai',
    category: 'Kacang',
    price: 18000,
    unit: 'kg',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang kedelai untuk tempe atau tahu'
  },
  {
    id: 'k005',
    name: 'Kacang Tolo',
    category: 'Kacang',
    price: 22000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kacang tolo untuk sayur atau lauk'
  },
  
  // Rempah-rempah
  {
    id: 'r001',
    name: 'Kunyit',
    category: 'Rempah',
    price: 15000,
    unit: 'kg',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kunyit segar untuk bumbu dan jamu'
  },
  {
    id: 'r002',
    name: 'Lengkuas',
    category: 'Rempah',
    price: 12000,
    unit: 'kg',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Lengkuas segar untuk bumbu masakan'
  },
  {
    id: 'r003',
    name: 'Kencur',
    category: 'Rempah',
    price: 20000,
    unit: 'kg',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kencur segar untuk bumbu dan jamu'
  },
  {
    id: 'r004',
    name: 'Serai',
    category: 'Rempah',
    price: 5000,
    unit: 'ikat',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Serai segar untuk bumbu masakan'
  },
  {
    id: 'r005',
    name: 'Daun Salam',
    category: 'Rempah',
    price: 3000,
    unit: 'ikat',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Daun salam segar untuk bumbu masakan'
  },
  
  // Jajanan Pasar
  {
    id: 'j001',
    name: 'Kue Putu',
    category: 'Jajanan',
    price: 10000,
    unit: 'porsi',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1625535163131-9d1fc30fe9e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Kue putu tradisional dengan gula merah'
  },
  {
    id: 'j002',
    name: 'Klepon',
    category: 'Jajanan',
    price: 12000,
    unit: 'porsi',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1625535163131-9d1fc30fe9e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Klepon isi gula merah dengan kelapa parut'
  },
  {
    id: 'j003',
    name: 'Getuk',
    category: 'Jajanan',
    price: 8000,
    unit: 'porsi',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1625535163131-9d1fc30fe9e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Getuk singkong dengan gula merah'
  },
  {
    id: 'j004',
    name: 'Lupis',
    category: 'Jajanan',
    price: 10000,
    unit: 'porsi',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1625535163131-9d1fc30fe9e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Lupis ketan dengan kelapa parut dan gula merah'
  },
  {
    id: 'j005',
    name: 'Cenil',
    category: 'Jajanan',
    price: 8000,
    unit: 'porsi',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1625535163131-9d1fc30fe9e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Cenil warna-warni dengan kelapa parut'
  },
  
  // Produk Olahan Tradisional
  {
    id: 'o001',
    name: 'Tempe',
    category: 'Olahan',
    price: 8000,
    unit: 'papan',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Tempe segar hasil fermentasi kedelai'
  },
  {
    id: 'o002',
    name: 'Tahu',
    category: 'Olahan',
    price: 10000,
    unit: 'kotak',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1612708330677-9f9c4d6ffe20?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Tahu putih segar dari kedelai pilihan'
  },
  {
    id: 'o003',
    name: 'Oncom',
    category: 'Olahan',
    price: 6000,
    unit: 'papan',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Oncom segar hasil fermentasi ampas tahu'
  },
  {
    id: 'o004',
    name: 'Tape Singkong',
    category: 'Olahan',
    price: 12000,
    unit: 'bungkus',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Tape singkong manis hasil fermentasi'
  },
  {
    id: 'o005',
    name: 'Petis Udang',
    category: 'Olahan',
    price: 15000,
    unit: 'bungkus',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Petis udang untuk bumbu rujak atau saus'
  }
];

export default products;