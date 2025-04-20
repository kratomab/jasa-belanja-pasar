import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';

function NotificationBadge() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications && unreadCount > 0) {
      // Jika membuka notifikasi dan ada yang belum dibaca, tandai semua sebagai dibaca
      setTimeout(() => markAllAsRead(), 3000);
    }
  };

  const handleNotificationClick = (notificationId) => {
    markAsRead(notificationId);
  };

  return (
    <div className="notification-badge-container">
      <button 
        className="notification-button" 
        onClick={toggleNotifications}
        aria-label="Notifikasi"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="notification-count">{unreadCount}</span>
        )}
      </button>

      {showNotifications && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifikasi</h3>
            {unreadCount > 0 && (
              <button 
                className="mark-all-read" 
                onClick={markAllAsRead}
              >
                Tandai semua dibaca
              </button>
            )}
          </div>

          <div className="notifications-list">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${!notification.read ? 'unread' : ''}`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="notification-content">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <small className="notification-time">
                      {new Date(notification.createdAt).toLocaleString('id-ID')}
                    </small>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-notifications">
                <p>Tidak ada notifikasi</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .notification-badge-container {
          position: relative;
        }
        
        .notification-button {
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 5px;
        }
        
        .notification-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: #ff4d4f;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
        
        .notifications-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 300px;
          max-height: 400px;
          overflow-y: auto;
          background-color: white;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 1000;
        }
        
        .notifications-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .notifications-header h3 {
          margin: 0;
          font-size: 16px;
        }
        
        .mark-all-read {
          background: none;
          border: none;
          color: #1890ff;
          cursor: pointer;
          font-size: 12px;
        }
        
        .notifications-list {
          padding: 0;
        }
        
        .notification-item {
          padding: 10px 15px;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
        }
        
        .notification-item:hover {
          background-color: #f5f5f5;
        }
        
        .notification-item.unread {
          background-color: #e6f7ff;
        }
        
        .notification-content h4 {
          margin: 0 0 5px;
          font-size: 14px;
        }
        
        .notification-content p {
          margin: 0 0 5px;
          font-size: 13px;
          color: #666;
        }
        
        .notification-time {
          color: #999;
        }
        
        .empty-notifications {
          padding: 20px;
          text-align: center;
          color: #999;
        }
      `}</style>
    </div>
  );
}

export default NotificationBadge;