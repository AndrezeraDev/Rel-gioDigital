function atualizaTempo(){
    var display = document.querySelector('.display');
    var agora = new Date();
    var horario = fixNumber(agora.getHours()) + ':' + fixNumber(agora.getMinutes()) + ':' + fixNumber(agora.getSeconds());

    display.textContent = horario;
}

function fixNumber(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizaTempo();
setInterval(atualizaTempo, 1000);