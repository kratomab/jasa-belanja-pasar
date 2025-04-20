import React, { createContext, useState, useContext, useEffect } from 'react';
import { notificationSystem } from '../services/firebase';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Memuat notifikasi saat komponen dimuat
  useEffect(() => {
    loadNotifications();
  }, []);

  // Memuat notifikasi dari sistem notifikasi
  const loadNotifications = () => {
    const allNotifications = notificationSystem.getNotifications();
    setNotifications(allNotifications);
    updateUnreadCount(allNotifications);
  };

  // Menghitung jumlah notifikasi yang belum dibaca
  const updateUnreadCount = (notifs) => {
    const count = notifs.filter(notif => !notif.read).length;
    setUnreadCount(count);
  };

  // Menambahkan notifikasi baru
  const addNotification = (notification) => {
    const updatedNotifications = notificationSystem.addNotification(notification);
    setNotifications(updatedNotifications);
    updateUnreadCount(updatedNotifications);
    return updatedNotifications;
  };

  // Menandai notifikasi sebagai sudah dibaca
  const markAsRead = (notificationId) => {
    const updatedNotifications = notificationSystem.markAsRead(notificationId);
    setNotifications(updatedNotifications);
    updateUnreadCount(updatedNotifications);
    return updatedNotifications;
  };

  // Menghapus notifikasi
  const removeNotification = (notificationId) => {
    const updatedNotifications = notificationSystem.removeNotification(notificationId);
    setNotifications(updatedNotifications);
    updateUnreadCount(updatedNotifications);
    return updatedNotifications;
  };

  // Menandai semua notifikasi sebagai sudah dibaca
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notif => {
      notificationSystem.markAsRead(notif.id);
      return { ...notif, read: true };
    });
    setNotifications(updatedNotifications);
    setUnreadCount(0);
    return updatedNotifications;
  };

  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    removeNotification,
    markAllAsRead,
    loadNotifications
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};