export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(new Date(date));
  };
  
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };