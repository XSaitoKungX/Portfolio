$(window).on('load', function() {
    $('#page-loader').fadeOut('slow');
})

$(document).ready(function(){

    $(".nav_link").click(function() {
        // remove classes from all
        $(".nav_link").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });

    window.sr = ScrollReveal();
    sr.reveal('.menu', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.home-content .text-1', {
        duration: 6000,
        origin: 'right',
        distance: '5px'
    });

    sr.reveal('.home-content .text-2', {
        duration: 6000,
        origin: 'left',
        distance: '5px'
    });

    sr.reveal('.home-content .button-text-3', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.home-content .text-fe', {
        duration: 6000,
        origin: 'right',
        distance: '5px'
    });

    sr.reveal('.home-perfil', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.home-social', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.about .title', {
        duration: 6000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.about .subtitle', {
        duration: 6000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.about .column-left', {
        duration: 4000,
        origin: 'top',
        distance: '-50px'
    });

    sr.reveal('.about .column-right h2', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.about .column-right p', {
        duration: 4000,
        origin: 'bottom',
        distance: '-5px'
    });

    sr.reveal('.about .column-right .btncv', {
        duration: 5000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.skills .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.skills .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.skills .description', {
        duration: 4000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('.skills .skill-cont', {
        duration: 5000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.projects .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.projects .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.projects .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.projects .card', {
        duration: 4000,
        origin: 'bottom',
        distance: '-50px'
    });

    sr.reveal('.contact .title', {
        duration: 4000,
        origin: 'right',
        distance: '-5px'
    });

    sr.reveal('.contact .subtitle', {
        duration: 4000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.contact .column-left', {
        duration: 5000,
        origin: 'left',
        distance: '-5px'
    });

    sr.reveal('.contact .column-right', {
        duration: 5000,
        origin: 'right',
        distance: '-5px'
    });



    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");
        }
    });

    //slip-up script//
    $('.scroll-up').click(function(){
        $('html, body').animate({ scrollTop: 0 });
    });

    //formular//
    $('#btnSedn').click(function(){

        var errors = '';

        // Validated Name ==============================
        if( $('#names').val() == '' ){
            errors += '<p>write a name</p>';
            $('#names').css("border-color", "var(--rojo)")
        } else{
            $('#names').css("border-color", "var(--verde)")
        }

        // Validated Mail ==============================
        if( $('#email').val() == '' ){
            errors += '<p>Enter an email</p>';
            $('#email').css("border-color", "var(--rojo)")
        } else{
            $('#email').css("border-color", "var(--verde)")
        }

        // Validated Subject ==============================
        if( $('#asunto').val() == '' ){
            errors += '<p>Enter a subject</p>';
            $('#asunto').css("border-color", "var(--rojo)")
        } else{
            $('#asunto').css("border-color", "var(--verde)")
        }

        // Validated Message ==============================
        if( $('#mensaje').val() == '' ){
            errors += '<p>write a message</p>';
            $('#mensaje').css("border-color", "var(--rojo)")
        } else{
            $('#mensaje').css("border-color", "var(--verde)")
        }

        // SENDING MESSAGE ============================
        if( errors == '' == false){
            var mensajeModal = '<div class="modal-form">'+
                '<div class="mensaje-modal">'+
                '<h3>errors found</h3>'+
                errors+
                '<span id="btnclose">Close</span>'+
                '</div>'+
                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnclose').click(function(){
            $('.modal-form').remove();
        });


    });


    //typing animation script//
    var typed = new Typed(".typing",{
        strings: ["Mark","Azubi","By", "Webnetz", "B-Dev (Web-Developer)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });


    //toggle menu/ navbar active//
    $('.menu-btn').click(function(){
        $('.navbar .menu').addClass("active");
        $('#burger').hide();
    });
    //nav menu close//
    $('#menu-close').click(function(){
        $('.navbar .menu').removeClass('active');
        $('#burger').show();
    })
    //nav menu close icons//
    $('.nav_link').click(function(){
        $('.navbar .menu').removeClass('active');
        $('#burger').show();
    });

    //img animation//
    $('#mi_imagen').hover(function(){
        $(this).attr('src','https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Surprised&eyebrowType=UpDown&mouthType=Serious&skinColor=Light');
    },function(){
        $(this).attr('src','https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light');
    });



});

//SCROLL SECTION//

// SKILLS//
const skillContent = document.getElementsByClassName('skill-cont'),
    skillHeader = document.querySelectorAll('.skill-header')

function toggleskill(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillContent.length; i++ ){
        skillContent[i].className = 'skill-cont skill-close'
    }
    if(itemClass === 'skill-cont skill-close'){
        this.parentNode.className = 'skill-cont skill-open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleskill)
});
