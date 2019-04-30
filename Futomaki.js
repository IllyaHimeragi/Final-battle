
var futomaki = 0;
function changeHeading(){
   var illya = document.getElementById('illya');
   if (futomaki == 0) {
      illya.innerHTML = 'Ohayo Gozaimasu';
      futomaki = 1;
       }
       else{
          illya.innerHTML = 'onee-chan';
           futomaki = 0;
       }
   }

function changeBg(){
 var Sakura = document.getElementById('Sakura');
 Sakura.classList.add('yae');
 Sakura.classList.remove('Yui');
}
function changeBgAgain(){
 var Sakura = document.getElementById('Sakura');
 Sakura.classList.add('Yui');
  Sakura.classList.remove('yae');
}