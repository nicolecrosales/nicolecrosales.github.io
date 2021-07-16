let t = document.getElementById('temperature').textContent;
let s = document.getElementById('speed').textContent;

if(t <= 50 && s >= 3){
  let p = Math.pow(s, 0.16);
  let f = 35.74 + 0.6215 * t - 35.75 * p + 0.4275 * t * p;
  let result = f.toFixed(0);
  document.getElementById('windChill').innerHTML = result + " °F";
}
else{
   document.getElementById('windChill').textContent = "N/A";
}


