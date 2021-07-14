function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}
const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.querySelector("#display").innerHTML = document.lastModified;