const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

const imgOptions = {
  threshold: 0.2,
  rootmargin: "0px 0px 50px 0px"
};

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver(items => {
    items.forEach(item => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach(img => {
    imgObserver.observe(img);
  });
} 
else {
  imagesToLoad.forEach(img => {
    loadImages(img);
  });
}

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




    