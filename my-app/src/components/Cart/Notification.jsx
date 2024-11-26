import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // Automatically close the notification after 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [message, onClose]);

  return (
    <div className="notification show"> {/* Add the 'show' class for visibility */}
      {message}
    </div>
  );
};

export default Notification;
