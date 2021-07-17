const lastVisit = localStorage.getItem('lastvisit') || Date.now();
let daysBetween = (lastVisit - Date.now()) / 864000;
if (daysBetween < 1) {
    message = "Welcome to the gallery page. This is your first visit."
}
else {
    message = "You last visited this page" + ' ' + daysBetween + ' ' + "day(s) ago.";
}
document.querySelector('#lastvisit').innerHTML = message;
localStorage.setItem('lastvisit', Date.now());