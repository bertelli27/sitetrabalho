document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para rolar a galeria corretamente
function scrollGallery(galeriaId, direction) {
    let galeria = document.getElementById(galeriaId);
    let scrollAmount = galeria.clientWidth / 2; // Ajuste para rolagem mais precisa

    if (direction === 'left') {
        galeria.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        galeria.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
function scrollGallery(galeriaId, direction) {
    let galeria = document.getElementById(galeriaId);
    let scrollAmount = galeria.clientWidth / 2;

    if (direction === 'left') {
        galeria.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        galeria.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // Detecta quando a rolagem atinge o final ou início e reinicia a posição
    setTimeout(() => {
        if (galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth) {
        } else if (galeria.scrollLeft === 0) {
       
        }
    }, 600); // Pequeno delay para não ser perceptível ao usuário
}
