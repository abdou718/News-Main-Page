let menuIcon = document.querySelector('.mobile-menu-icon');
let mobileNav = document.querySelector('.mobile-nav');
let closeIcon = document.querySelector('.mobile-nav img');

function openMobileMenu() {
    mobileNav.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    menuIcon.style.display = 'none'; 
}

function closeMobileMenu() {
    mobileNav.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    menuIcon.style.display = 'block';
}

function handleResize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
        menuIcon.style.display = 'none'; 
    }
    else {
        menuIcon.style.display = 'block';
}}

menuIcon.addEventListener('click', openMobileMenu);
closeIcon.addEventListener('click', closeMobileMenu);
window.addEventListener('resize', handleResize);

document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuIcon.contains(e.target)) {
        closeMobileMenu();
    }
});