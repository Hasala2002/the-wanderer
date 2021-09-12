let likeIcon = document.querySelector('.like-icon')
let likeCount = document.querySelector('.like-count')

likeIcon.addEventListener('click',function(){
    likeIcon.classList.add('liked')
    likeCount.textContent = '97'
})