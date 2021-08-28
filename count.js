let criandoNumero = 0
document.getElementById('numero').innerHTML = criandoNumero
let cont = criandoNumero
function diminuir(){ 
    cont--
    document.getElementById('numero').innerHTML = cont
    if(cont < 0){
        document.body.style.color = 'red'
    } else if (cont == 0){
        document.body.style.color = 'black'
    }
}
function resetar(){
    cont=0
    document.getElementById('numero').innerHTML = criandoNumero
    if(cont == 0){
        document.body.style.color = 'black'
    }
}
function acrescentar(){
    cont++
    document.getElementById('numero').innerHTML = cont
    if(cont > 0){
        document.body.style.color = 'green'
    } else if(cont == 0){
        document.body.style.color = 'black'
    }
}