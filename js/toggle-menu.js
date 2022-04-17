let check = document.querySelector("#checkbox-menu")
let menuToggle = document.querySelector(".menu_lateral-esquerdo")
let btnIconeMenu = document.querySelector('.menu-toggle')

function toggleMenu() {
    menuToggle.classList.toggle('active');
    let active = menuToggle.classList.contains('active');

    btnIconeMenu.setAttribute('aria-expanded', active)

    if(active) btnIconeMenu.setAttribute('aria-label', 'Fechar menu')
    else btnIconeMenu.setAttribute('aria-label', 'Abrir menu')
}
function removeClass() {
    menuToggle.classList.remove('active')
    check.checked = false
}

window.addEventListener('resize', removeClass)
check.addEventListener('change', toggleMenu)