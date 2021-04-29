// //*Создайте две переменные a и b. Выведите в консоль результ их умножения. */
// let a 
// let b 
// console.log(a *b);

// //*Создайте две переменные c и d. Выведите в консоль результат деления. */
// let c 
// let d 
// console.log(c / d);

// //* Создайте две переменные e и f. Выведите в консоль результат сложения */
// let e 
// let f 
// console.log(e+f);


// //Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль
// let n = 11;
// let bool = true;
// let s = "java script ";
// let st="100";


// console.log(typeof n +": 11");
// console.log(typeof bool+" :true" );
// console.log(typeof s+" :java script ");
// console.log(typeof st+ ": 100");

// //Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num +=11;
// num -=11;
// num *=11;
// num /=11;
// num ++;
// num --;

// //Запросить число у пользователя, возвести его в квадрат и вывести
//  let x = prompt ("Введите число");
//  x *= x;
//  console.log(x);

//  //Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.
// alert ('Нужно ввести два числа');
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");

// let num3 =((Number(num1) +Number(num2))/2 )

// console.log("СРЕДНЕЕ АРИФМЕТИЧЕСКОЕ ВВЕДЕНЫХ ЧИСЕЛ = "+ num3);

// // Перевести число минут в секунды. Число спрашивать у пользователя.
// alert("Перевод минут в секунды ")
//     let num4 = prompt("Введите число минут");
//     let num5 =(Number(num4)*60);
//     console.log("Число секунд = "+num5);
// alert
// //Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
// let greeting = 'Hello,';
// let userName = prompt("Введите свое имя ");
// alert(greeting + userName);
// alert
// // Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.
//  let valueuser =( prompt( ));
// //  let value=Number(10);
//  let num6 = "Верно";
//  let num7 = "Не верно";
//  if(valueuser == 10){
//      console.log( num6);
//  }
//  else console.log(num7);

//  alert

//  //Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

// let test =false;
// if(test ==true){
//     console.log("Верно");
// }
// else console.log("Не верно");
// if(test!==true){
//     console.log("Верно");
// }
// else console.log("НЕ верно");

// alert
// //Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.
// let summa =Number (prompt("Введите сумму покупки " ));



// if(summa > 500){
//     summa = summa-(summa/100)*3;
//     console.log(summa);
    
// }
// else if(summa > 800){
//     summa = summa-((summa/100)*5);
//     console.log(summa);
// }
// else console.log(summa);


// alert


//Таски на циклы. Каждую задачу решить всеми тремя циклами!

// //Вывод чисел от 25 до 0 (порядок уменьшения)
//  let x = Number(25);
//  do{
//     console.log(x);
//     x--;
// }while(x>0);
// // ********************************
// let y = Number(25);
//  while(y > 0){
//      console.log(y);
//      y--;
//  }
// //  *********************************
// let z = Number(25);
// let i;
//  for(i = 25;i > 0;i--){
//      z--;
//      console.log(z);
//  }
// //  **********************************

//  // Вывод чисел от 10 до 50, которые кратны 5
// let g = Number(10);
// let i;
// console.log(g);
// for(i= 10;i<=50;i++){
//     g++;
//     if(g % 5 == 0){
    
//         console.log(g);}
//     }
// let w = Number(10);
// console.log(w);
// while(w <= 50){
//     w++;
//     if(w % 5 == 0){
    
//         console.log(w);}
    
// }
//  let o =Number(10);
//  console.log(o);
//  do{
//     o++;
//      if(o % 5 ==0){
//          console.log(o);
        
//      }
//  }while(o<=50);



 //Найти сумму чисел в пределах от 1 до 100.
//  let p =Number(1);
//  let l;
//  for(l=2;l<=100;l++){
//     p+=l;
//     console.log(p); 

//  } 
// let q = Number(1);
// let k =Number(1);
//  while(k<=100){
//      k++;
//      q +=k;
//      console.log(q);
//  }

//  let n =Number(1);
//  let r =Number(1);
//  do{
     
//          r++;
//          n+=r;
//          console.log(n);
//      }
//  while(r<=100)


 //предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

//  let m =prompt("Решите пример 2 + 2 * 2");
//  let v=String(6);
//  while(v!==m){
//     let m =prompt("Решите пример 2 + 2 * 2");
   
//  if(v==m){
//     alert("правильно!!!")
// } 

//  }
 

//не придумал 
 let user =prompt("Решите пример 2 + 2 * 2");
 let value=String(6);
 
for(value!==user;a++){
    let user = prompt("Решите пример 2 + 2 * 2");
    if(v==m){
        alert("правильно!!!")
    }   
}
