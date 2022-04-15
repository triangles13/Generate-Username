//let username = document.querySelector('.userName').value;

//let userlastname = document.querySelector('.userLastName').value;

//let nikDefault = 'username' + ' ' + 'userlastname';

//console.log(nikDefault);

document.querySelector('.nikDefault').onclick = clickDefault;

function clickDefault() {
   let a = document.querySelector('.userName').value;
   let b = document.querySelector('.userLastName').value;

   function ucFirst(word) {
      if (!word) return word;
      
      return word[0].toUpperCase() + word.slice(1);
    }

   let c = ucFirst(a) + ' ' + ucFirst(b);
   document.querySelector('.outDefault').innerHTML = c;

}

document.querySelector('.nikGenerate').onclick = clickGenerate;

function clickGenerate() {
   let a = document.querySelector('.userName').value;
   let b = document.querySelector('.userLastName').value;
   function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   let c = b.toLowerCase() + '_' + a.toLowerCase() + '_' + getRandomInRange(1 , 9);
   document.querySelector('.outGenerate').innerHTML = c;

}
