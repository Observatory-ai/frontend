const errors = {
  PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
  PASSWORD_NOT_SECURE: 'Password is not secure',
  INVALID_CREDENTIALS: 'The email or password is incorrect',
  EMAIL_IN_USE: 'This email is already in use',
  PASSWORD_SAME: 'The new password can not be the same as the old one',
  USERNAME_IN_USE: 'This username is already in use',
  EMAIL_TOO_LONG: 'Email is too long',
  EMAIL_REQUIRED: 'Email is required',
  INVALID_EMAIL: 'Email is invalid',
  FIRST_NAME_REQUIRED: 'First name is required',
  LAST_NAME_REQUIRED: 'Last name is required',
  USERNAME_REQUIRED: 'Username is required',
  USERNAME_TOO_SHORT: 'Username is too short (minimum 3 characters)',
  USERNAME_TOO_LONG: 'Username is too long',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_TOO_SHORT: 'Password is too short',
  CONFIRM_PASSWORD_REQUIRED: 'Confirm password is required',
};

const auth = {
  errors,
};

export default auth;
