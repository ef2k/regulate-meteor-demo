Meteor.startup(function () {

  Regulate.demoForm.onSubmit(function (error, data) {
    if (error) {
      console.log('Client-side validation failed.');
      console.log('The error', error);
    } else {
      console.log('Client-side validation passed!');
      console.log('The data', data);
      Meteor.call('register', data);
    }
  });

  Regulate.fooForm.onSubmit(function (error, data) {
    if (error) {
      console.log('FooForm errors', error);
      console.log('The error', error);
    } else {
      console.log('The data', data);
      Meteor.call('foo', data);
    }
  });

});

Meteor.Router.add({
  '/': 'index',
  '/forms': 'myForm',
  '/foo': 'fooForm'
});