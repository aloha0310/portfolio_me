const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//форма на главной
var open = document.querySelector('.button_main')
open.onclick = function () {
    document.querySelector('.overlay').style.display = 'block';   
};

var close = document.querySelector('.modals__close')
close.onclick = function() {
    document.querySelector('.overlay').style.display = 'none';
};



//форма отправки
$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "src/mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('form').trigger('reset');
    });
    return false;
});





