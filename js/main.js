'use strict';

{
   function update(){
   //    document.querySelector('#target').textContent = 'changed';
   //    document.getElementById('test').textContent = 'changed';
   //    document.querySelector('p').textContent = 'テキスト変更'; 
   //    document.querySelectorAll('p')[0,1,2].textContent = 'テキスト変更'; 

   document.querySelectorAll('p').forEach((p, index) => {
       p.textContent = 'テキスト変更'; 
   });
   }

   setTimeout(update, 1900);
}
