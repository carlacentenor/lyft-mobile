$(document).ready(function() {
  var firstName = $('.first-name');
  var lastName = $('.last-name');
  var email = $('.email');
  var check = $('.checkbox');
  var next = $('.btn-next');

  var validateFirstName = false;
  var validateLastName = false;
  var validateEmail = false;
  var validateChecked = false;

  // Validación de email
  email.on('keyup', function(event) {
    var EMAILUSER = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
   
    if (EMAILUSER.test($(this).val())) {
      validateEmail = true;
      validateUser();
    } else {
      inactiveUser();
    }
  });
  // Validación de first name
  firstName.on('keyup', function(event) {
    if (firstName.val()) {
      validateFirstName = true;
      validateUser();
    } else {
      inactiveUser();
    }
  });
  // Validación de last name
  lastName.on('keyup', function(event) {
    if (lastName.val()) {
      validateUser();
      validateLastName = true;
    } else {
      inactiveUser();
    }
  });

  // Validación de checkbox
  check.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      validateUser();
    } else {
      inactiveUser();
    }
  });

  // validación general
  function validateUser() {
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      next.attr('disabled', false);
    }
  }
  // función de desahbilitar boton next
  function inactiveUser() {
    next.attr('disabled', 'disabled');
  }

  // Redireccionar a otra página
  next.on('click', function() {
    window.location.href = 'page5.html';
  });
});

