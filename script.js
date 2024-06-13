document.body.addEventListener('keyup', (e) => {
    tocar(e.code.toLowerCase())
})
document.querySelector('.composer button').addEventListener('click', () => {
    const musica = document.querySelector('#input').value;
    if(!musica) return alert('Digite alguma composição!')
    if(musica !== ''){
        const array = musica.split('');
        tocarComposicao(array);
    }
})
function tocar(som){
    const audioElemento = document.querySelector(`#s_${som}`);
    const teclaElemento = document.querySelector(`div[data-key="${som}"]`);
    if(audioElemento) {
        audioElemento.play();
        audioElemento.currentTime = 0;
    }
    if(teclaElemento) {
        teclaElemento.classList.add('active')
        setTimeout(() => {
            teclaElemento.classList.remove('active')
        }, 200)
    }
}

function tocarComposicao(array){
    let tempo = 0;
    for(let item of array){
        setTimeout(() => {
            tocar(`key${item}`)
        }, tempo)
        tempo += 250
    }
}


