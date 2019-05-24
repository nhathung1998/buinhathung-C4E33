// let yob = prompt("");
// let age = 2019 - yob;
// console.log(age)  

// if (age < 10){
//     console.log("baby");

// }
// else if(age < 18) {
//     console.log("teenager");
// }

// else {
//     console.log("not baby");
// }

// let randomnumber = Math.floor(Math.random()*100);

// if ( randomnumber <= 30 ){
//     console.log("sunny");
// }

//  else if ( randomnumber <= 71){
//     console.log("rainy");
// }

// if (  randomnumber <= 100){
//     console.log("cloudy");
// }

 
// let a = prompt("nhap a");
// let b = prompt("nhap b");
// // let c = prompt("nhap c");

// // let delta = b*b - 4*a*c;

// // if (delta = 0) {
// //     console.log("vo nghiem");
// // }
// // else if ( delta === 0){

// //     let x = -b / (2*a);
// //     console.log("nghiem kep là ${X}");//backticks

// // }
// // else{
// //     let x1 = (-b-delta**0.5)/(2*a);
// //     let x2 = (-b+delta**0.5)/(2*a);
// //     console.log("2 nghiem phan biet");
// //     console.log('x1=${x1}');
// //     console.log('x2=${x2}');

// }

//  for (let i = 1 ; i <= 100 ; i++ ){
//      if ( i % 2 === 0){
//          console.log (i);
//      }
//     }
 
 let username = "c4e33";
 let password = "codethechange";

 let usernameLogin = prompt("username?");

  if (usernameLogin === username){
    let passwordLogin = prompt("password?");
    if (passwordLogin === password) {
        console.log("welcome ${ usernameLogin}");
    } else {
        console.log("wrong password");
    }
} else {
    console.log("user not found");
}
 




