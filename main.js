const form = document.getElementById('formulario')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const mensagemErroA = document.querySelector('.mensagem_erroA')
const mensagemErroB = document.querySelector('.mensagem_erroB')
const mensagemSucesso = document.querySelector('.mensagem_sucesso')

form.addEventListener('submit', function (e) {
    event.preventDefault();

    mensagemErroA.style.display = 'none'
    mensagemErroB.style.display = 'none'
    mensagemSucesso.style.display = 'none'

    //verifica se os campos estão preenchidos
    if (campoA.value == '' || campoB.value === '') {
        mensagemErroA.innerText = 'Campo A vazio'
        mensagemErroB.innerText = 'Campo B vazio'
        mensagemErroA.style.display = 'block'
        mensagemErroB.style.display = 'block'
        return
    }

    //Garantindo que os valores finais dos campos sejam valores inteiros
    const numeroA = parseInt(campoA.value)
    const numeroB = parseInt(campoB.value)

    //Validação do campo B ser maior que o campo A
    if (numeroB <= numeroA) {
        mensagemErroB.innerText = 'O número do campo B deve ser maior que o campo A'
        mensagemErroB.style.display = 'block'
        return
    }

    //conclusão da validação
    mensagemSucesso.innerText = 'Campos do formulário corretos!'
    mensagemSucesso.style.display = 'block'
});

//Limpeza dos eventos após sucesso e alteração dos valores do campo 
campoA.addEventListener('input', function () {
    mensagemSucesso.style.display = 'none'
    mensagemErroA.style.display = 'none'
})

campoB.addEventListener('input', function () {
    mensagemSucesso.style.display = 'none'
    mensagemErroB.style.display = 'none'
})