$(function() {
    if($(window).scrollTop()>30){
        $('.scroll-to-top-btn').removeClass('scroll-btn-hide')
    }else{
        $('.scroll-to-top-btn').addClass('scroll-btn-hide') 
    }
})

$('.blog-textarea textarea').focusin(()=>{
    $('.blog-textarea button').css({
        "opacity":"1"
    })
});

$('.blog-textarea textarea').focusout(()=>{
    $('.blog-textarea button').css({
        "opacity":"0"
    })
});

$('.scroll-to-top-btn').click(()=>{
    $(window).scrollTop(0);
})

$(window).scroll(()=>{
    if($(window).scrollTop()>30){
        $('.scroll-to-top-btn').removeClass('scroll-btn-hide')
    }else{
        $('.scroll-to-top-btn').addClass('scroll-btn-hide') 
    }
})