$(document).ready(function() {
  var codeLab = $('.input-code');
  var next = $('.btn-next');
  /** Función de reenviar código */
  var resend = $('.resend');

  resend.on('click', function(event) {
    event.preventDefault();
    var numberRan = Math.floor(Math.random() * 1001);
    var code = 'LAB-' + numberRan;
    alert('Tu código es : ' + code);
    localStorage.codeLab = numberRan;
  });

  codeLab.on('keyup', function() {
    var value = $(this).val();

    if (value === localStorage.codeLab) {
      next.attr('disabled', false);
    } else {
      next.attr('disabled', 'disabled');
    }
  });

  next.on('click', function() {
    window.location.href = 'page4.html';
  });
});