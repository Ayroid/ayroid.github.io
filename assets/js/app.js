function toggleNavbar() {
    if (window.innerWidth < 800) {
        const navbar = document.getElementById('mobile-navbar-menu-list');
        if (!navbar.classList.contains('move-down')) {
            navbar.classList.add('move-down');
            navbar.classList.remove('move-up');
            navbar.style.display = 'flex';
        } else if (!navbar.classList.contains('move-up')) {
            navbar.classList.add('move-up');
            navbar.classList.remove('move-down');
            setTimeout(() => {
                navbar.style.display = 'none';
            }, 300);
        }

        const hamburger = document.getElementById('hamburger');
        if (!hamburger.classList.contains('rotate-clock')) {
            hamburger.classList.add('rotate-clock');
            hamburger.classList.remove('rotate-anti-clock');
            setTimeout(() => {
                hamburger.style.rotate = '90deg';
            }, 300);
        }
        else if (!hamburger.classList.contains('rotate-anti-clock')) {
            hamburger.classList.add('rotate-anti-clock');
            hamburger.classList.remove('rotate-clock');
            setTimeout(() => {
                hamburger.style.rotate = '0deg';
            }, 300);
        }
    }
}

function projectMorf(id) {
    const button = document.getElementById(id);
    button.classList.toggle('rotate-45');
}