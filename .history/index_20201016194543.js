window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}