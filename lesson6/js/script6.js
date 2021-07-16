/*-----------------------Menu Toggle------------------------------------- */
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}
/*-------------------------Alert Friday--------------------------------------- */
const banner = document.querySelector('.alert-friday');
const dayOfWeek = new Date().getDay();
if (dayOfWeek === 5) {
    banner.classList.add('visible');
}
/*-----------------------------------Font--------------------------------------- */
WebFont.load({google: {families: ["IBM Plex Serif, serif", "Montserrat, sans-serif"]
    }});
