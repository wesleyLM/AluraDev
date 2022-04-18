let conteudoEditorCodigo = document.querySelector('[data-editor-codigo-conteudo]')
let formEditor = document.querySelector('.form_projeto')
let btnSalvar = document.querySelector('[data-btn]')


function criarCartao() {
    console.log(dadosCartao(formEditor))
    console.log(conteudoEditorCodigo.innerHTML)
}


function dadosCartao(form) {

    let cartao = {
        nome: form.titulo.value,
        descricao: form.descricao.value,
        cor: form.cor.value,
    }

    return cartao
}

btnSalvar.addEventListener('click', criarCartao)