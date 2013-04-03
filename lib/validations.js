Regulate('demoForm', [
  {
    name: 'username',
    min_length: 3,
    max_length: 5,
    display_as: 'Username',
    display_error: '#username-error'
  },
  {
    name: 'password1',
    min_length: 5,
    max_length: 12,
    display_as: 'Password',
    display_error: '#password1-error'
  },
  {
    name: 'password2',
    match_field: 'password1',
    display_as: 'Confirmation',
    display_error: '#password2-error'
  },
  {
    name: 'email',
    email: true,
    display_as: 'Email',
    display_error: '#email-error'
  }
]);