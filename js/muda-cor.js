(function () {
    //foi selecionado o input color com div que mudará de cor 
    let inputColor = document.getElementById('personalizacao_cor')
    let divColor = document.querySelector('.editor_codigo-cor')

    //colocando a cor padrão
    divColor.style.backgroundColor = inputColor.value

    //função que mudará a cor da div pelo o input
    function mudaCorDiv() {
        divColor.style.backgroundColor = this.value
    }

    //escuta o evento de muda a cor do input
    inputColor.addEventListener('input', mudaCorDiv)
})()


