$(document).ready(function(){
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    $("#user-phone").mask("+7(999)999-99-99");
    var modal = $('.popup'),
        overlay = $('.overlay'),
        close = $('.close-btn');
              close.click(function() {
                     modal.toggleClass('popup-show');
                      });
    $("#submit").click(function()
        {
                modal.toggleClass('popup-show');
                $("#erconts").fadeIn(500);
                $.ajax(
                {
                        type: "POST",
                        url: "send.php", // Адрес обработчика
                        data: $("#callbacks").serialize(),
                        error:function()
                        {
                                $("#erconts").html("Произошла ошибка! Повторите попытку");
                        },
                        beforeSend: function()
                        {
                                $("#erconts").html("Отправляем данные...");
                        },
                        success: function(result)
                        {
                                $("#erconts").html(result);
                                $('#callbacks').find('input[type=text], input[type=phone]').val('');
                        }
                });
        return false;
        });
});