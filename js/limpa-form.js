//Selecionar todos input com style de formulário
let inputForm = document.querySelectorAll('.input_style')
//loop para pegar cada elemento
inputForm.forEach(function (element) {
    //selecionar o valor padrão do atributo placeholder
    let placeholder = element.getAttribute('placeholder')
    //quando o elemento ganhar o focus ele remover o placeholder
    element.addEventListener('focus', function () {
        element.setAttribute('placeholder', '')
    })
    //quando o elemento perder o focus ele voltar com valor padrão
    element.addEventListener('blur', function () {
        element.setAttribute('placeholder', placeholder)
    })

})