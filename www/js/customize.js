var timer1 = setInterval(animateOrder, 4000);
function animateOrder() {
    $('body').addClass('removed');
    $('.landing-image').fadeOut();
    $('.login-section').fadeIn();
};