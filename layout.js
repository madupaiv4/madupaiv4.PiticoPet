var header = document.getElementById('header');
var navHeader = document.getElementById('header-navbar');
var content = document.getElementById('content');
var showSidebar = false;

function alteraSidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar);
    if (showSidebar) {
        navHeader.style.marginLeft = '-4vw';
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



