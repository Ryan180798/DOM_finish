let input = document.getElementById('input');
let go = document.getElementById('go');
let span1 = document.getElementById('sp1');
  
let addList = () => {
  if (input.value != "") {
    let paragraphe = document.createElement('span1');
    span1.innerHTML = input.value;
    input.value = '';
  }
  else{
    input.classList.add('ERROR');
    input.placeholder = 'ERROR';
  }
}

//ENTER//
input.addEventListener("keypress", function(event) {
  if (event.keyCode == 13){
    addList()
}
});
//

go.addEventListener('click', addList);
