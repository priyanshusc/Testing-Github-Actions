// src/auth.test.js
// The Require Way to import
const { validatePassword } = require('./auth.js');

describe('Password Validation Utility', () => {
  
  test('should return false for passwords shorter than 8 characters', () => {
    const result = validatePassword('Short1');
    expect(result).toBe(false);
  });

  test('should return false if password has no numbers', () => {
    const result = validatePassword('NoNumbersHere');
    expect(result).toBe(false);
  });

  test('should return true for a valid password', () => {
    const result = validatePassword('SecurePass123');
    expect(result).toBe(true);
  });
  
});``