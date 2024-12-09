


let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    index += step;
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

var bnt = document.getElementById('bnt-qrcode');

bnt.addEventListener('click', () => {
    console.log("oi");
    Swal.fire({
        title: "Aponte sua câmera!",
        text: "Link do site :D",
        imageUrl: "imagens/qr-code.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "QR-code image",
        confirmButtonText: "Fechar",
        })
});
