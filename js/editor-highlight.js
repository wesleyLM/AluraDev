(function () {
    let baseEditor = document.querySelector('.editor_codigo-base')
    let linguagem = document.querySelector('.personalizacao_linguagem')
    let btnHighlight = document.querySelector('.editor_codigo-botao')

    function aplicaHighlight() {
        let codigo = baseEditor.innerText
        baseEditor.innerHTML = `<code class = "editor_codigo-campo hljs ${linguagem.value}" contenteditable="true" arial-label="Editor de código"></code>`
        baseEditor.querySelector('code').textContent = codigo

        hljs.highlightElement(baseEditor.querySelector('code'))
    }

    btnHighlight.addEventListener('click', aplicaHighlight)
})()