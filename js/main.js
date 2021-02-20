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





// { 
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item2';


//     const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   }); 
// }




// 'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//        const item1 = document.querySelectorAll('li')[1];

//        document.querySelector('ul').removeChild(item1);
//   });
// }



// 'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }



// 'use strict';

// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double Clicked!');
//   });

//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }


// 'use strict';

// {
//   const text = document.querySelector('textarea')

// //   text.addEventListener('focus', () => {
// //       console.log('focus');

// //   });
// //   text.addEventListener('blur', () => {
// //     console.log('blur');
// // });


// text.addEventListener('input', () => {
//     console.log(text.value.length);

// });
// text.addEventListener('change', () => {
//   console.log('change');
// });


// }


// 'use strict';

// {
//   document.querySelector('ul').addEventListener('click', e => {
//     if (e.target.nodeName === 'LI') {
//         e.target.classList.toggle('done');
//     }
//   });
// }


'use strict'

/* strict モードを使うとコードが厳格モードで実行されるようになる*/

for (var i = 1; i <=111111110; i++){
    console.log(i);
}



