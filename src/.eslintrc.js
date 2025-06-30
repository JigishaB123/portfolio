module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'prettier'
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
  };