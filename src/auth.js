function validatePassword(password) {
  if (!password) return false;
  if (password.length < 8) return false;
  
  // Must contain at least one number
  const hasNumber = /\d/.test(password);
  if (!hasNumber) return false;

  return true;
}

// The Require Way to export
module.exports = { validatePassword };