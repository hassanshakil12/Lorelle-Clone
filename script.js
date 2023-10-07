var btn = document.querySelector('.nav i')
var menu = document.querySelector('.nav .dropmenu')

btn.addEventListener('click', function(){
    if(menu.style.opacity == 0){
        menu.style.opacity = 1
    }
    else{
        menu.style.opacity = 0
    }
})