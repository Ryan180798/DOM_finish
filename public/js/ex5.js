  ////////////////repeatOeuf//////////////////
  let div = document.getElementById("o");
  var goo = document.getElementById('goo');
  var goo2 = document.getElementById('goo2');
  var nbclic = 0;

  goo.onclick = function myFunction() {
    var img = document.createElement("img");
    img.setAttribute('src', '../img/oeuf.png');
    div.appendChild(img);
    img.style.height = '150px';
    img.style.width = '100px';
    
    nbclic += 1;
    document.getElementById("nbclic").innerHTML = nbclic;
  }

  goo2.onclick = function myFunction2() {
    var list = document.getElementById("o");
    list.removeChild(list.childNodes[0]);
  }

  goo3.onclick = function myFunction3() {
    var list = document.getElementById("o");
    list.innerHTML = "";
  }

btnc.onclick = function myFonctionn() {
  nbclic = 0;
  document.getElementById("nbclic").innerHTML = nbclic;
}




  

