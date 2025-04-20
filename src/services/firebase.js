// Firebase configuration
// Catatan: Ini adalah file konfigurasi untuk Firebase
// Untuk menggunakan file ini, Anda perlu menginstal Firebase: npm install firebase

// Konfigurasi Firebase (ganti dengan konfigurasi Firebase Anda sendiri)
const firebaseConfig = {
  apiKey: "AIzaSyBmgBbAHg-KNZ_jHRaBdsx0FtV0MkSmjlU",
  authDomain: "jasabelanjapasar-3d380.firebaseapp.com",
  projectId: "jasabelanjapasar-3d380",
  storageBucket: "jasabelanjapasar-3d380.firebasestorage.app",
  messagingSenderId: "1008130342807",
  appId: "1:1008130342807:web:f07ffb9ecf0b2f03298ed2"
};

// Fungsi untuk menginisialisasi Firebase
// Uncomment kode di bawah ini setelah menginstal Firebase
/*
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
*/

// Fungsi simulasi untuk menyimpan data pengguna
export const saveUserToDatabase = async (userData) => {
  // Simulasi penyimpanan data ke database
  console.log('Menyimpan data pengguna ke database:', userData);
  
  // Simpan ke localStorage sebagai fallback
  localStorage.setItem('dbUser', JSON.stringify(userData));
  
  return { ...userData, id: 'user_' + Date.now() };
};

// Fungsi simulasi untuk mendapatkan data pengguna
export const getUserFromDatabase = async (userId) => {
  // Simulasi mendapatkan data dari database
  console.log('Mendapatkan data pengguna dari database:', userId);
  
  // Ambil dari localStorage sebagai fallback
  const userData = localStorage.getItem('dbUser');
  return userData ? JSON.parse(userData) : null;
};

// Fungsi simulasi untuk menyimpan pesanan
export const saveOrderToDatabase = async (orderData) => {
  // Simulasi penyimpanan pesanan ke database
  console.log('Menyimpan pesanan ke database:', orderData);
  
  // Simpan ke localStorage sebagai fallback
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const newOrder = { ...orderData, id: 'order_' + Date.now(), createdAt: new Date().toISOString() };
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  return newOrder;
};

// Fungsi simulasi untuk mendapatkan pesanan pengguna
export const getUserOrders = async (userId) => {
  // Simulasi mendapatkan pesanan dari database
  console.log('Mendapatkan pesanan pengguna dari database:', userId);
  
  // Ambil dari localStorage sebagai fallback
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  return orders.filter(order => order.userId === userId);
};

// Sistem notifikasi sederhana
export const notificationSystem = {
  // Daftar notifikasi
  notifications: JSON.parse(localStorage.getItem('notifications') || '[]'),
  
  // Tambah notifikasi baru
  addNotification: function(notification) {
    this.notifications.push({
      ...notification,
      id: 'notif_' + Date.now(),
      createdAt: new Date().toISOString(),
      read: false
    });
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
    console.log('Notifikasi baru:', notification);
    return this.notifications;
  },
  
  // Mendapatkan semua notifikasi
  getNotifications: function() {
    return this.notifications;
  },
  
  // Menandai notifikasi sebagai sudah dibaca
  markAsRead: function(notificationId) {
    this.notifications = this.notifications.map(notif => {
      if (notif.id === notificationId) {
        return { ...notif, read: true };
      }
      return notif;
    });
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
    return this.notifications;
  },
  
  // Menghapus notifikasi
  removeNotification: function(notificationId) {
    this.notifications = this.notifications.filter(notif => notif.id !== notificationId);
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
    return this.notifications;
  }
};
