//Menu classe Ativo
 let linkMenus = document.querySelectorAll('[data-menu]')

 function menuAtivo(){
    Array.prototype.forEach.call(linkMenus, function (item) {
        item.addEventListener('click',()=>{
            if (item.className.endsWith('ativo')){
                item.classList.remove('ativo')
            }
        
                item.classList.add('ativo')
        })
    })
}