  ////////////////repeatOeuf//////////////////
  let div = document.getElementById("o");
  var goo = document.getElementById('goo');
  var goo2 = document.getElementById('goo2');

  goo.onclick = function myFonction() {
    var img = document.createElement("img");
    img.setAttribute('src', '../img/oeuf.png');
    div.appendChild(img);
    img.style.height = '150px';
    img.style.width = '100px';
  }

  goo2.onclick = function myFonction2() {
    div.removeChild(img);
  }