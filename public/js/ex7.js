let infaire = document.getElementById('faire');
let gol = document.getElementById('gol');
let list = document.getElementById('list');
let inlist = document.getElementById('inlist');
  

gol.onclick = function mygot(){
    if (infaire.value != "") {
        var gol = document.createElement("list");
        var delet = document.createElement('button');
        delet.setAttribute("style", "margin-left: 20px; width: 40px; height: 15px; border-radius: 3px");
        var br = document.createElement("br");

      gol.innerHTML = infaire.value;
      delet.innerHTML = " delete ";
      infaire.value = '';
      list.appendChild(gol);
      gol.appendChild(delet);
      gol.appendChild(br);
      delet.addEventListener('click', () =>{
        gol.remove();
      })
    }
    
    
    else{
      infaire.classList.add('ERROR');
      infaire.placeholder = 'ERROR';
    }
  }

