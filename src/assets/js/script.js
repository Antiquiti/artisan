import jQuery from 'jquery';
let $ = jQuery;
 

$( document ).ready(function() 
{
    let distance = $("header").height();
    
    $(window).scroll(function (){
        if ($(window).scrollTop() > distance) 
        {
            $('.nav').addClass("fixed-top");
        } 
        else 
        {
            $('.nav').removeClass("fixed-top");
        }
    });

    $(document).on('click', 'a[href^="#"]', function (e){
        e.preventDefault();
        scroll($(this).attr('href'));
    });

    $(document).on('click', '.scroll-down', function (e){
        e.preventDefault();
        scroll($('#gallery'));
    });
});

function scroll(scrollTo)
{ 
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 1000, 'linear');
}