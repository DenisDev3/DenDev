AOS.init();

const dataDoEvento = new Date("aug 20, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasproEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasProEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs)
    const minutosProEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMS);
    const segundosProEvento = Math.floor((distanciaEvento % minutoEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasproEvento}d ${horasProEvento}h ${minutosProEvento}m ${segundosProEvento}s`;

    if(distanciaEvento <0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
},1000);