let infaire = document.getElementById('faire');
let gol = document.getElementById('gol');
let list = document.getElementById('list');
let inlist = document.getElementById('inlist');
  

gol.onclick = function mygol(){
    if (infaire.value != "") {
    var gol = document.createElement("list");
    var br = document.createElement("br");

      gol.innerHTML = infaire.value;
      infaire.value = '';
      list.appendChild(gol);
      list.appendChild(br);
    }
    else{
      infaire.classList.add('ERROR');
      infaire.placeholder = 'ERROR';
    }
  }

