  ////////////////repeatOeuf//////////////////
  let div = document.getElementById("o");

  function myFunction() {
    var img = document.createElement("img");
    img.setAttribute('src', './oeuf.png');
    div.appendChild(img);
    img.style.height = '200px';
    img.style.width = '100px';
  }