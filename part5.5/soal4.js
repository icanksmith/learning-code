// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
//---
let word5 = word4.substring(4, 14);
let word6 = word4.substring(15, 17);
let word7 = word4.substring(18, 20);
let word8 = word4.substring(21, 25);



let firstWordLength = exampleFirstWord4.length;
//---
let wordLength5 = word5.length;
let wordLength6 = word6.length;
let wordLength7 = word7.length;
let wordLength8 = word8.length;


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + word5 + ', with length: ' + wordLength5);
console.log('Third Word: ' + word6 + ', with length: ' + wordLength6);
console.log('Fourth Word: ' + word7 + ', with length: ' + wordLength7);
console.log('Fifth Word: ' + word8 + ', with length: ' + wordLength8);