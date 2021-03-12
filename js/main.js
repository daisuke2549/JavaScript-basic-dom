// alert(document.getElementById('js-for-web').outerHTML)


// alert(document.getElementsByClassName('lead')[0].outerHTML)
// alert(document.getElementsByClassName('lead')[1].outerHTML)


// alert( document.getElementsByTagName('a')[0].outerHTML )


// document.getElementById("service-title").innerText ="ディトラで勉強しよう";


// const login_btn = document.createElement('a');


// login_btn.innerText  = 'ログイン';
// login_btn.setAttribute('id', 'login')
// login_btn.setAttribute('class', 'btn')
// login_btn.setAttribute('href', 'https://tokyofreelance.jp/')
// document.getElementById('js-for-web').appendChild(login_btn)

// document.getElementById("register").click()


// document.getElementById("button").addEventListener('click', function() {
//     document.getElementById('service-title').innerText = 'デイトラ' 
//   })  
//  window.onload = function() {
//     document.getElementById('service-title').innerText = 'デイトラ' 
// } 



// $(function(){

//     $(".area").hide();



//     $("#btn1").on("click", function(){
//         $("#area").show();
//     });
//     $("#btn2").on("click", function(){
//         $("#area").hide();
//     });


//     $("#alert-button").on("click", function(){
//         alert("ボタンがクリックされました");
//     });

//     $('.title').addClass('color-class');
//     $('.title').removeClass('color-class');

// });

// for (i = 0; i < 10; i++) {
//     $('.myClass').append('<li>Item' + i + '</li>');  
// }


// $(function(){
//    $("#sample").append("注意");
// });


// $(function(){
//     $("#sample3").remove();
//   });



// $(function(){
//     $("h2").text("h2のテキストを変更")
// })

// $('#button').click(function(){
//     $('#service-title').text('ディトラ');
// });




// $(function(){
//     $("a").hide();
// })



// let name = "suzuki";

// console.log(name);

// name = "yamagata";

// console.log(name);


// const human = "human";

// console.log(human);



// let str = "important subject is mathmatics";
// console.log(str.length);


// for ( let i = 0;  i <= 100; i++){

// if(i % 15 === 0) {
//     console.log('FizzBuzz')
// }else if(i % 5 === 0){
//     console.log('Fizz')
// }else if(i % 3 === 0){
//     console.log('Buzz')
// }else{
//     console.log(i);
// }
// }

for (var i = 0; i < 10;  i++){
    console.log(i+10);
}

let lists = ['佐藤', '伊藤', '鈴木', '木村', '田中', '高橋'];

for ( var i = 0; i < lists.length; i++){
    console.log(lists[i]);
}


for (let i = 0; i <= 10; i++){
   if ( i  === 7){
       break;
   }
    console.log(i);

}


let scores = [10, 20, 30, 40, 50];

scores.push(60);


console.log(scores);

scores.shift();

console.log(scores);


console.log(scores.length);


console.log(scores[1]);