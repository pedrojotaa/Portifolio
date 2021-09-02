let menuMobile = document.querySelector('.menu-mobile')
let body = document.querySelector('body')

//ao clicar no botao o menu aparece e o icone muda

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

//ao clicar nos botões do menu o menu desaparece e o icone muda

let navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(body.classList.contains('menu-nav-active')){
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x', 'bi-list')
        }
    })
})