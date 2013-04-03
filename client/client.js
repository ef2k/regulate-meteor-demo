Meteor.startup(function () {

  Regulate.demoForm.onSubmit(function (error, data) {
    if (error) {
      console.log('Client-side validation failed.');
    } else {
      console.log('Client-side validation passed!');
      Meteor.call('register', data);
    }
  });

});