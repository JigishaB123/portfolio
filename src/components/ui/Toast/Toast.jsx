import React, { useEffect, useState } from 'react';
import './Toast.scss';

const Toast = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    const onToast = (e) => {
      setMessage(e.detail);
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 1600);
    };
    window.addEventListener('app:toast', onToast);
    return () => {
      window.removeEventListener('app:toast', onToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`toast ${visible ? 'toast--show' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
};

export default Toast;
