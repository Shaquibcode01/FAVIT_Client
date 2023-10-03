function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'block' : 'none';

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active', navbar.style.display === 'block');
}