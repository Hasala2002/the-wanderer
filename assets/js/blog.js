let commentTextArea = document.querySelector(".blog-textarea textarea")
let commentBtn = document.querySelector(".blog-textarea button")

let scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

commentTextArea.addEventListener('focusin',function() {
    commentBtn.style.opacity = 1
})

commentTextArea.addEventListener('focusout',function() {
    commentBtn.style.opacity = 0
})

scrollToTopBtn.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function(){
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        scrollToTopBtn.classList.remove('scroll-btn-hide')
      } else {
        scrollToTopBtn.classList.add('scroll-btn-hide')
      }
}