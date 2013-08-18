/**
 * Created with JetBrains PhpStorm.
 * User: dsgrigoryev
 * Date: 18.08.13
 * Time: 14:26
 * To change this template use File | Settings | File Templates.
 */


/*
Задание:
 Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр.
 Подробнее: http://company.yandex.ru/job/vacancies/shri_2013.xml

 Введем ограничение:

 Максимальное число состоящее из 10 цифр (0123456789):  9 999 999 999
 Сумма факториалов этого числа будет: factorial(9) * 10 = 36228800
*/

//Вычисляет факториал
function factorial(n) {
    return n != 0 ? n*factorial(n-1) : 1;
}

function summFuctorial(arr){
    var summ = 0;
    for(var i=0; i < arr.length; i++){
        summ += factorial(arr[i]);
    }
    return summ;
}

// Преобразует число n в массив цифр, из которых он состоит
function parceNumberToStrArr(n){
    var str  = String(n);
    var arr = [];
    for (var i = 0; i < str.length; i++){
       arr.push(str[i]);
    }
    return arr;
    //var arr = str.split();
}

//function parce
// Возвращает список всех чисел которые равны сумме факториалов своих цифр
// max - граница до которой необходимо искать список
function getListNumEqFactSumm(max){
    var result = [];
    var arr = [];
    var summFuct = 0;
    for (var i = 0; i < max; i++){
        arr = parceNumberToStrArr(i);
        summFuct = summFuctorial(arr);
        if (summFuct == i){
           // alert(i);
            result.push(i)
        }
    }

    alert('Готово!');
    return result;
}

document.addEventListener("DOMContentLoaded", function () {
    var arr = getListNumEqFactSumm(factorial(9)*10);
    var elem = document.getElementById( 'result' );
    for ( var i =0; i < arr.length ; i++) {
        elem.innerHTML += arr[ i ] + '<br>';
    }
}, false);




//alert(getListNumEqFactSumm(factorial(9)*10));
//alert(summFuctorial ([4,0,5,8,5]));