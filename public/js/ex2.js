var x = document.getElementById('page1');
var y = document.getElementById('page2');
var z = document.getElementById('page3');
var xx = document.getElementById('page4');
var yy = document.getElementById('page5');
var zz = document.getElementById('page6');
var xxx = document.getElementById('page7');


bt1.onclick = function myFonction() {
  x.style.display = 'block';
    
  z.style.display = 'none';
  y.style.display = 'none';
  xx.style.display = 'none';
  yy.style.display = 'none';
  zz.style.display = 'none';
  xxx.style.display = 'none';
}

bt2.onclick = function myF() {
  y.style.display = 'block';

  x.style.display = 'none';
  z.style.display = 'none';
  xx.style.display = 'none';
  yy.style.display = 'none';
  zz.style.display = 'none';
  xxx.style.display = 'none';

}


bt3.onclick = function myFF() {
  z.style.display = 'block';

  y.style.display = 'none';
  x.style.display = 'none';
  xx.style.display = 'none';
  yy.style.display = 'none';
  zz.style.display = 'none';
  xxx.style.display = 'none';
}

bt4.onclick = function myFFF() {
    xx.style.display = 'block';
      
    z.style.display = 'none';
    y.style.display = 'none';
    x.style.display = 'none';
    yy.style.display = 'none';
    zz.style.display = 'none';
    xxx.style.display = 'none';
  }
  
  bt5.onclick = function myFFFF() {
    yy.style.display = 'block';
  
    x.style.display = 'none';
    z.style.display = 'none';
    xx.style.display = 'none';
    y.style.display = 'none';
    zz.style.display = 'none';
    xxx.style.display = 'none';
  }
  
  
  bt6.onclick = function myFFFFF() {
    zz.style.display = 'block';
  
    y.style.display = 'none';
    x.style.display = 'none';
    xx.style.display = 'none';
    yy.style.display = 'none';
    z.style.display = 'none';
    xxx.style.display = 'none';
  }

  bt7.onclick = function myFFFFFF() {
    xxx.style.display = 'block';
  
    y.style.display = 'none';
    x.style.display = 'none';
    xx.style.display = 'none';
    yy.style.display = 'none';
    zz.style.display = 'none';
    z.style.display = 'none';
  }