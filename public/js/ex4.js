var x = document.getElementById('carrer');
var z = document.getElementById('carrer2');
var nbclick = 0;

btnj.onclick = function myFonction() {
  if (x.style.display == 'block') {
    x.style.display = 'none';
    z.style.display = 'block';
    
  }
  else{
    x.style.display = 'block';
    z.style.display = 'none';
  } 
  nbclick += 1;
  document.getElementById("nbclick").innerHTML = nbclick;
}


btnv.onclick = function myFonctionn() {
  nbclick = 0;
  document.getElementById("nbclick").innerHTML = nbclick;
}
 





