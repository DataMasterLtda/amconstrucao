window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Defina a posição de rolagem a partir da qual deseja alterar o estilo
        nav.classList.add('transparent');
    } else {
        nav.classList.remove('transparent');
    }
});
