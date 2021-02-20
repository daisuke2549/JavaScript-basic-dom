// 'use strict';

// { 
//   document.querySelector('button').addEventListener('click', () => {
//     document.getElementById('test').textContent = 'Changed!';
//   });
// }

// {
//    function update(){
//    //    document.querySelector('#target').textContent = 'changed';
//    //    document.getElementById('test').textContent = 'changed';
//    //    document.querySelector('p').textContent = 'テキスト変更'; 
//    //    document.querySelectorAll('p')[0,1,2].textContent = 'テキスト変更'; 

//    document.querySelectorAll('p').forEach((p, index) => {
//        p.textContent = 'テキスト変更'; 
//    });
//    }

//    setTimeout(update, 1900);
// }



// 'use strict';
// { 
//   document.querySelector('button').addEventListener('click', () => {
//        const targetNode = document.getElementById('test');
//     //    targetNode.className = 'my-color my-border';

//     // // targetNode.classList.add('my-color');
//     // // targetNode.classList.add('my-border');
//     targetNode.classList.toggle('my-color');

//   });
// }



// 'use strict';
// { 
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('test');

//     targetNode.textContent = 'Dotinstall';
//     targetNode.classList.toggle('my-color');
//     targetNode.classList.toggle('my-border');

//     targetNode.textContent = targetNode.dataset.translation;

//   });
// }





{ 
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.createElement('li');
    item2.textContent = 'item2';


    const ul = document.querySelector('ul');
    ul.appendChild(item2);
  }); 
}





