// Manter selecionado o item
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)
// Expandir menu
var expandir = document.querySelector('#expandir')
var menulateral = document.querySelector('.menu-lateral')

expandir.addEventListener('click', function(){
    menulateral.classList.toggle('expander')
})
