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
  },
  {
    name: 'imageFile',
    max_size: 1024 * 10, //10kb
    accepted_files: 'jpeg|png',
    display_as: 'Image file',
    display_error: '#imageFile-error'
  },

  {
    name: 'pdfFile',
    max_size: 1024 * 1024 * 4, //4mb
    accepted_files: 'pdf',
    display_as: 'PDF file',
    display_error: '#pdfFile-error'
  },

]);

Regulate('fooForm', [{name: 'name'}]);