var header = document.getElementById('header');
var navHeader = document.getElementById('header-navbar');
var content = document.getElementById('content');
var showSidebar = false;

function alteraSidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar);
    if (showSidebar) {
        navHeader.style.marginLeft = '-9vw';
        navHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(1px)';
    } else {
        navHeader.style.marginLeft = '-100vw';
        navHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function fecharSidebar() {
    if (showSidebar) {
        alteraSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {  
        showSidebar = false;
        alteraSidebar();
    }
});

const button = document.getElementById('bnt-qrcode');

button.addEventListener('click', () => {
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



