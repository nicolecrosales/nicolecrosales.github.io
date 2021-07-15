function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const banner = document.querySelector('.banner');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 5) {
    banner.classList.add('visible');
}