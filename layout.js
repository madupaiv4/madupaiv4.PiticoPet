var header = document.getElementById('header');
var navHeader = document.getElementById('header-navbar');
var content = document.getElementById('content');
var showSidebar = false;

function mostrarSidebar() {
    showSidebar = !showSidebar;
    console.log(showSidebar);
    if (showSidebar) {
        navHeader.style.marginLeft = '-3vw';
        navHeader.style.animationName = 'showSiderbar';
        content.style.filter = 'blur(1px)';
    } else {
        navHeader.style.marginLeft = '-100vw';
        navHeader.style.animationName = '';
        content.style.filter = '';
    }
}
