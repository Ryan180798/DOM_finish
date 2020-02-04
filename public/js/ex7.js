
let divp = document.getElementById('page7');
let div = document.getElementById('sect');
let infaire = document.getElementById('faire');
let gol = document.getElementById('gol');
let list = document.getElementById('list');

 

gol.onclick = function mygot(){
    if (infaire.value != "") {
        var gol = document.createElement("list");
        var divo = document.createElement("div");
        var check = document.createElement('input');
        check.type = "checkbox";
        check.name = "name"; 
        check.value = "value"; 
        check.id = "id"; 
        var delet = document.createElement('button');
        delet.type = "button";
        

        delet.setAttribute("style", "position : relative; margin-left: 35%; width: 40px; height: 20px; border-radius: 3px;");

        gol.setAttribute("style", "position : relative; left:48%; width: 40px; height: 15px; top: -23px;");

        check.setAttribute("style", "position : relative; width: 40px; height: 25px;");

        divo.setAttribute("style", "text-align-center; width: 100%; margin:0px; background-color: lightgrey;");

        list.setAttribute("style", "height: 30px; width: 100%; padding-top: 0px;");

        var br = document.createElement("br");

      gol.innerHTML = infaire.value;
      delet.innerHTML = " delete ";
      infaire.value = '';

      divo.appendChild(delet);
      gol.appendChild(divo);
      list.appendChild(divo);
      divo.appendChild(check);

      list.appendChild(gol);
      gol.appendChild(delet);
      gol.appendChild(br);
      delet.addEventListener('click', () =>{
        divo.remove();
        gol.remove();
      });
    }
    
    
    else{
      infaire.classList.add('ERROR');
      infaire.placeholder = 'ERROR';
    }
  }

