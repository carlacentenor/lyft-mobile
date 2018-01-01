$(document).ready(function() {
  var phone = $('.input-phone');
  var btnNext = $('.btn-next');

  // función que valida que solo ingrese números
  phone.on('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  // función que valida la cantidad de caracteres
  phone.keyup(function() {
    var value = $(this).val();

    if (value.length === 10) {
      btnNext.attr('disabled', false);
    } else {
      btnNext.attr('disabled', 'disabled');
    }
  });

  // Función que genera un código aleatorio

  btnNext.on('click', function(event) {
    event.preventDefault();
    var numberRan = Math.floor(Math.random() * 1001);
    var code = 'LAB-' + numberRan;
    alert('Tu código es : ' + code);
    localStorage.codeLab = numberRan;
    window.location.href = 'page3.html';
  });


  $('.dropdown-menu li a').on('click', function() {
    var image = $(this).html();
    $('button .image-select').remove();
    $('.btn-select').prepend(image);
  });
});