$(document).ready(function() {
  var codeLab = $('.input-code');
  var next = $('.btn-next');
  var resend = $('.resend');

  /** Función de reenviar código */
  resend.on('click', function(event) {
    event.preventDefault();
    var numberRan = Math.floor(Math.random() * 1001);
    var code = 'LAB-' + numberRan;
    alert('Tu código es : ' + code);
    localStorage.codeLab = numberRan;
  });

  // Verificando código y habilitando botón
  codeLab.on('keyup', function() {
    var value = $(this).val();

    if (value === localStorage.codeLab) {
      next.attr('disabled', false);
    } else {
      next.attr('disabled', 'disabled');
    }
  });
  // Redireccionando a otra página
  next.on('click', function() {
    window.location.href = 'page4.html';
  });
});