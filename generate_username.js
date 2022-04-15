
document.querySelector('.nikDefault').onclick = clickDefault();

function clickDefault() {
   const firstnameField = document.querySelector('.userName');
   const lastnameField = document.querySelector('.userLastName');

   function ucFirst(word) {
      if (!word) return word;
      
      return word[0].toUpperCase() + word.slice(1);
   }
   
   return () => {
      document.querySelector('.outDefault').innerHTML = `${ucFirst(firstnameField.value)} ${ucFirst(lastnameField.value)}`;
   }
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
