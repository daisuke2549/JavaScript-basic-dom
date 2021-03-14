// // 'use strict';

// // { 
// //   document.querySelector('button').addEventListener('click', () => {
// //     document.getElementById('test').textContent = 'Changed!';
// //   });
// // }

// // {
// //    function update(){
// //    //    document.querySelector('#target').textContent = 'changed';
// //    //    document.getElementById('test').textContent = 'changed';
// //    //    document.querySelector('p').textContent = 'テキスト変更'; 
// //    //    document.querySelectorAll('p')[0,1,2].textContent = 'テキスト変更'; 

// //    document.querySelectorAll('p').forEach((p, index) => {
// //        p.textContent = 'テキスト変更'; 
// //    });
// //    }

// //    setTimeout(update, 1900);
// // }



// // 'use strict';
// // { 
// //   document.querySelector('button').addEventListener('click', () => {
// //        const targetNode = document.getElementById('test');
// //     //    targetNode.className = 'my-color my-border';

// //     // // targetNode.classList.add('my-color');
// //     // // targetNode.classList.add('my-border');
// //     targetNode.classList.toggle('my-color');

// //   });
// // }



// // 'use strict';
// // { 
// //   document.querySelector('button').addEventListener('click', () => {
// //     const targetNode = document.getElementById('test');

// //     targetNode.textContent = 'Dotinstall';
// //     targetNode.classList.toggle('my-color');
// //     targetNode.classList.toggle('my-border');

// //     targetNode.textContent = targetNode.dataset.translation;

// //   });
// // }





// // { 
// //   document.querySelector('button').addEventListener('click', () => {
// //     const item2 = document.createElement('li');
// //     item2.textContent = 'item2';


// //     const ul = document.querySelector('ul');
// //     ul.appendChild(item2);
// //   }); 
// // }




// // 'use strict';

// // {
// //   document.querySelector('button').addEventListener('click', () => {
// //        const item1 = document.querySelectorAll('li')[1];

// //        document.querySelector('ul').removeChild(item1);
// //   });
// // }



// // 'use strict';

// // {
// //   document.querySelector('button').addEventListener('click', () => {
// //     const li = document.createElement('li');
// //     const color = document.querySelector('select');
// //     li.textContent = `${color.value} - ${color.selectedIndex}`;
// //     document.querySelector('ul').appendChild(li);
// //   });
// // }



// // 'use strict';

// // {
// //   document.querySelector('button').addEventListener('dblclick', () => {
// //     console.log('Double Clicked!');
// //   });

// //   document.addEventListener('mousemove', () => {
// //     console.log('moved!');
// //   });
// // }


// // 'use strict';

// // {
// //   const text = document.querySelector('textarea')

// // //   text.addEventListener('focus', () => {
// // //       console.log('focus');

// // //   });
// // //   text.addEventListener('blur', () => {
// // //     console.log('blur');
// // // });


// // text.addEventListener('input', () => {
// //     console.log(text.value.length);

// // });
// // text.addEventListener('change', () => {
// //   console.log('change');
// // });


// // }


// // 'use strict';

// // {
// //   document.querySelector('ul').addEventListener('click', e => {
// //     if (e.target.nodeName === 'LI') {
// //         e.target.classList.toggle('done');
// //     }
// //   });
// // }


// 'use strict'

// /* strict モードを使うとコードが厳格モードで実行されるようになる*/

// // for (var i = 1; i <=10; i++){
// //     console.log(i);
// // }


// /*配列についての練習コード */

// // let scores = [100, 60, 40];
// // console.log(scores);

// // scores[1]  = 80;
// // scores.push(70);


// // console.log(scores);

// // scores.pop()


// // console.log(scores.length);
// // length 自体もプロパティを持っている

// /* 　オブジェクト  */
// // const scores = {
// //     math:80,
// //     message: function(){
// //         console.log("messageです")
// //     }
// // }


// // console.log(scores.message());



// // const user = {　　　　//オブジェクトuserを定義
// //     firstName: 'suzuki',  //プロパティを定義
// //     lastName: 'yamada',   //プロパティを定義
// //     fullname: function(){　　//function = メソッドを定義
// //         return `${this.firstName} ${this.lastName}`    
// // },
// //    sayHi: function(){
// //        const fullname = this.fullname()
// //        console.log(`${fullname}だよ`)
// //    }

// // }
// // console.log(user.sayHi())


// // const points = [1,2,3,4,5];


// // console.log(points);


// // points.push(199);


// // console.log(points);



// //JSの繰り返し表現 //


// // const scores = [1,2,3,4,5,53,3];


// // for( let score of scores){
// //     console.log(score);
// // }



// // for (let count =0; count<100; count++){

// // console.log(count);
// // }



// // scores.forEach(function(score){
// //     console.log(score);
// // })



// let points = 90;

// console.log(points+100);

// points = 10;


// console.log(points+100);


// const score  = 70;

// console.log(score);


// // alert("JavaScriptの理解は進みましたか？")



// console.log("hello world");


// function calCircleArea(radius){   //radiusが引数
// let pai = 3
// let area = radius * radius * pai
// return area
// }

// console.log(calCircleArea(6))


// function double(number){
//     return number*2        //returnは返り値
// }

// console.log(double(9))



// function showmessage(){
//     console.log("hello world");
//     console.log("this is test message");
// }

// showmessage()


// function say(firstName, lastName){
//     console.log(`${firstName} ${lastName}`)
// }
// say("daisuke", "sasaki")


// const message = "hello world"
// function hello(){
//     console.log(message)
// }
// hello()



// let myCar = {
//     make: 'toyota',   //プロパティをメソッドとして関数化することができる。
//     model:'prince',
//     year: 2020
// };

// myCar.make = 'suzuki';
// myCar.model = 'model';
// myCar.year = 1992;

// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);



// console.log("hello world");



//FizzBuzz問題

// for (let i = 0;  i <= 100; i++){

//    if(i % 15 === 0){
//        console.log("FizzBuzz");
//    }else if(i % 5 === 0){
//        console.log("Fizz")
//    }else if(i % 3 === 0){
//     console.log("Buzz")
//   }else{
//       console.log(i);
//   } 
// }

// for (let i = 1; i <= 10; i++){
//    if(i === 5){
//        console.log('数字の５です');
//    }else if(i % 3 === 0){
//        console.log('3の倍数です。');
//    }else{
//        console.log(i);
//    }
// }


let array = [1, 2, 3,4, 5]


for (let i = 0; i< array.length-1; i++){
    console.log(array);
}




















