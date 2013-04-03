Meteor.methods({
  register: function (data) {
    Regulate.demoForm.validate(data, function (error, data) {
      if (error) {
        console.log('Server-side validation failed.');
      } else {
        console.log('Server-side validation passed!');
      }
    });
  }
});