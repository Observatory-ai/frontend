const errors = {
  PASSWORDS_DO_NOT_MATCH: 'Les mots de passe ne correspondent pas',
  PASSWORD_NOT_SECURE: 'Le mot de passe n’est pas sécure',
  INVALID_CREDENTIALS: 'L’adresse e-mail ou le mot de passe est incorrect',
  EMAIL_IN_USE: 'Cette adresse e-mail est déjà utilisée',
  PASSWORD_SAME: 'Le nouveau mot de passe ne peut pas être le même que l’ancien',
  USERNAME_IN_USE: 'Ce nom d’utilisateur est déjà utilisé',
  EMAIL_TOO_LONG: 'L’adresse e-mail est trop longue',
  EMAIL_REQUIRED: 'L’adresse e-mail est requise',
  INVALID_EMAIL: 'L’adresse e-mail est invalide',
  FIRST_NAME_REQUIRED: 'Le prénom est requis',
  LAST_NAME_REQUIRED: 'Le nom de famille est requis',
  USERNAME_REQUIRED: 'Le nom d’utilisateur est requis',
  USERNAME_TOO_SHORT: 'Le nom d’utilisateur est trop court (minimum 3 caractères)',
  USERNAME_TOO_LONG: 'Le nom d’utilisateur est trop long',
  PASSWORD_REQUIRED: 'Le mot de passe est requis',
  PASSWORD_TOO_SHORT: 'Le mot de passe est trop court',
  CONFIRM_PASSWORD_REQUIRED: 'La confirmation du mot de passe est requise',
};

const auth = {
  errors,
};

export default auth;
