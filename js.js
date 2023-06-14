// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/eny-p9ORVwlE92cZ/scene.splinecode');

window.onload = function() {
    var splineViewer = document.querySelector('.header-ani');
    splineViewer.style.display = 'block';
  };


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav2', window.scrollY > 578);
    document.querySelector('.btns').classList.toggle('btns2', window.scrollY > 578);
    //578
});

// Função para verificar quando o vídeo está visível
function checkVideoVisibility() {
    var video = document.querySelector('.video');
    var videoContainer = document.querySelector('.video-container');

    // Verifica se o vídeo está na área visível da página
    var isInView = video.getBoundingClientRect().top <= window.innerHeight && video.getBoundingClientRect().bottom >= 0;

    // Inicia ou pausa o vídeo com base na visibilidade
    if (isInView) {
        video.play();
    } else {
        video.pause();
    }
}

// Adiciona um evento de scroll para verificar a visibilidade do vídeo
window.addEventListener('scroll', checkVideoVisibility);
// Chama a função para verificar a visibilidade inicialmente
checkVideoVisibility();

// =================22222222222===========================

function checkVideoVisibility2() {
    var video = document.querySelector('.video2');
    var videoContainer = document.querySelector('.video-container2');

    // Verifica se o vídeo está na área visível da página
    var isInView = video.getBoundingClientRect().top <= window.innerHeight && video.getBoundingClientRect().bottom >= 0;

    // Inicia ou pausa o vídeo com base na visibilidade
    if (isInView) {
        video.play();
    } else {
        video.pause();
    }
}

// Adiciona um evento de scroll para verificar a visibilidade do vídeo
window.addEventListener('scroll', checkVideoVisibility2);
// Chama a função para verificar a visibilidade inicialmente
checkVideoVisibility2();


