let existiLupa = document.querySelector('.cabecalho_icone-lupa')
let inputBusca = document.querySelector('.cabecalho_input-busca')
let logo = document.querySelector('.cabecalho-link-logo')

function exibiInput(){
    inputBusca.classList.add('active')
    inputBusca.focus()
    logo.style.display = 'none'
    existiLupa.style.display = 'none'
}

function removeClas(){
    inputBusca.classList.remove('active')
    logo.style.display = 'block'
    existiLupa.style.display = 'block'
    inputBusca.value = ''
}

inputBusca.addEventListener('blur', removeClas)
window.addEventListener('resize', removeClas)
existiLupa.addEventListener('click', exibiInput)