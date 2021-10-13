$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')

    });

    $('.fa-bars').click(function(){
        $(this).removeClass('nav-toggle');
        $('.fa-bars').removeClass('fa-times')

    });

    $('.dot1').click(function(){
        $('.video1').css('display','block');
        $('.video2').css('display','none')
        $('.video3').css('display','none')
    })

    $('.dot2').click(function(){
        $('.video1').css('display','none');
        $('.video2').css('display','block');
        $('.video3').css('display','none')
    })

    $('.dot3').click(function(){
        $('.video1').css('display','none');
        $('.video2').css('display','none');
        $('.video3').css('display','block')
    })
    
});