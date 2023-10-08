var btn = document.querySelector('.nav i')
var menu = document.querySelector('.nav .dropmenu')
var bg = document.querySelector('.content')

btn.addEventListener('click', function(){
    if(menu.style.opacity == 0){
        menu.style.opacity = 1
        bg.style.filter = 'blur(7px)'
        menu.style.transform = 'translateX(0%)'
    }
    else{
        menu.style.opacity = 0
        bg.style.filter = 'none'
        menu.style.transform = 'translateX(100%)'
    }
})