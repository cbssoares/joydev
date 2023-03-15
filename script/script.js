let sect = [ document.querySelector('section#sect1'),document.querySelector('section#sect2')]
let prox = document.querySelector('img#pro')
let m = document.getElementById('m')
m.removeChild(sect[1])
var contador = 0
function pro(){
    if(contador <= 0){
        m.removeChild(sect[contador])
        contador++
        m.appendChild(sect[contador])
    }
}

function ant(){
    if(contador >= 1){
        m.removeChild(sect[contador])
        contador--
        m.appendChild(sect[contador])
    }
}
function blue(){
    prox.setAttribute('src', 'imagens/seta-direitaA.png')
}

function normal(){
    prox.setAttribute('src', 'imagens/seta-direita.png')

}