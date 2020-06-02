
// Поиск значений удовлетворяющих условиям
// for(let i=1; i<=100;i++){
//     if(i % 10 === 0) {
//         console.log(i + '(Кратно 10)')
//     }
//     else {
//         if(i % 2 === 0) {
//             console.log(i + ' (Четные)')
//         }
//         else {
//             console.log(i + ' (Не четные)')
//         }
//     }
// }

// Нахождение максимального и минимального элементов массива
// function arr(a){
//     let max = a[0];
//     let min = a[0];
//     for(let i = 0; i <= a.length-1 ;i++) {
//         if(max < a[i]){
//             max = a[i];
//         }
//         if(min > a[i]){
//             min = a[i];
//         }
//     }
//     console.log("максимальный: " + max)
//     console.log("минимальный: " + min)
// }
// arr([-1,-2,-3,-4])


// Написать функцию, которая принимает в себя строку, а ту же строку, но все слова в обратном порядке

// function reverseWords(str){
//     console.log(str.split(' ').reverse().join(" "));
// }
function reverseWords(str){
    let revStr = [];
    let fnlArr = [];
    let fnlStr = '';
    for(let i = 0, k = 0; i < str.length; i++){
      if(str[i] !== ' '){
        revStr[k] = (revStr[k] || '') + str[i];
      }
      else {
        k++;
      }
    };

    for(let i = 0; i < revStr.length; i++){
        fnlArr.unshift(revStr[i]);
    };

    for( let i = 0; i < fnlArr.length; i++){
        if(i === 0){
            fnlStr += fnlArr[0]
        }
        else {
            fnlStr += ' '+ fnlArr[i];
        }
    };

    console.log(fnlStr);
    return fnlStr;
}
reverseWords('Я изучаю программирование');