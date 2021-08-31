let menuMobile = document.querySelector('.menu-mobile')
let body = document.querySelector('body')

menuMobile.addEventListener('click', ()=>{
    //verifica se no menu-mobile contem a classe bi-list
    if(menuMobile.classList.contains('bi-list')){
        menuMobile.classList.replace('bi-list', 'bi-x')
    }else{
        menuMobile.classList.replace('bi-x', 'bi-list')
    }
    //adiciona uma nova classe ao body
    body.classList.toggle('menu-nav-active')
})