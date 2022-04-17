(function(){
    let cartao = document.querySelectorAll('.cartao')

    cartao.forEach(function (element) {
        let cartaoHover = element.querySelectorAll('.cartao-hover')
        cartaoHover.forEach(function(card){
            element.addEventListener("mouseover", function (){
                card.classList.add('cartao-hover-aparecer')
            })

            element.addEventListener("touchstart", function (){
                card.classList.add('cartao-hover-aparecer')
            })

            element.addEventListener("touchmove", function (){
                card.classList.add('cartao-hover-aparecer')
            })

            
            element.addEventListener("touchcancel", function (){
                card.classList.remove('cartao-hover-aparecer')
            })

            element.addEventListener("mouseout", function (){
                card.classList.remove('cartao-hover-aparecer')
            })

            element.addEventListener("touchend", function (){
                card.classList.remove('cartao-hover-aparecer')
            })
        })

    });
})()