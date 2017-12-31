$(document).ready(function() {
  var phone = $('.input-phone');
  var btnNext = $('.btn-next');

  phone.keyup(function() {
    var value = $(this).val();

    if (value.length === 10) {
      btnNext.attr('disabled', false);
    } else {
      btnNext.attr('disabled', 'disabled');
    }
  });

  btnNext.on('click', function(event) {
    event.preventDefault();
    var numberRan = Math.floor(Math.random() * 1001);
    var code = 'LAB-' + numberRan;
    alert('Tu código es : ' + code);
    localStorage.codeLab = numberRan;
    window.location.href = 'page3.html';
  });
});