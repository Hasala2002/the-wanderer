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