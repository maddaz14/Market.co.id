// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika "kopi-menu" diklik
document.querySelector('#kopi-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik di luar side bar untuk menghilangkan
const kopi = document.querySelector('#kopi-menu');

document.addEventListener('click', function (e) {
    if (!kopi.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
