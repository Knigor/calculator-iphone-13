
// наведение на кнопки

let fieldCalculator = document.getElementById("fieldCalculator").children

let output = document.getElementById("output");

let current = 1;





let a = '';
let b = '';
let result = 0;

let flag = true;
let check = '';

console.log(result != '');


for (let i = 0; i < fieldCalculator.length; i++){
   for (let j = 0; j < fieldCalculator.length - 1; j ++){
      if(fieldCalculator[i].children[j]){
         fieldCalculator[i].children[j].onmouseover  = function () {
            this.style.background = 'pink';
         }
   
         fieldCalculator[i].children[j].onmouseout   = function () {
            this.style.background = '';
         }
   
         fieldCalculator[i].children[j].style.cursor = 'default';
      }
      



      if (fieldCalculator[i].children[j]){
         fieldCalculator[i].children[j].onclick = () => {
            if (isNaN(Number(fieldCalculator[i].children[j].textContent)) == false){
               if (current != 6){
                  current++; 
                  output.innerHTML += fieldCalculator[i].children[j].textContent;


                     a += fieldCalculator[i].children[j].textContent.replace(/\s/g, "");
                     console.log("Значение a:", a);
               



               } else {
                  console.log("СТОП");
               }

              
             


            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "+")  {
               check = '+';
               output.innerHTML += fieldCalculator[i].children[j].textContent;
               result += Number(a);
               a = '';

               
            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "=") {
               
               if (check == '+'){
                  result += Number(a);
               } else if (check == '-'){
                  result -= Number(a);
               } else if (check == 'X'){
                  result *= Number(a);
               } else if (check == '÷'){
                  result /= Number(a);
               } else if (check == '%'){
                  result /= 100; 
               }

               output.innerHTML = result;
               console.log("Дейстивие равно: " + result);
               console.log(result);
               console.log("a ",a)
               a = '';
               flag = true
            //   result = 0;
               console.log(flag);
               current = 1;
            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "-") {
               check = '-';
               output.innerHTML += fieldCalculator[i].children[j].textContent;
               result += Number(a);
               a = '';
            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "X"){
               check = 'X';
               output.innerHTML += fieldCalculator[i].children[j].textContent;
               result += Number(a);
               a = '';

            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "÷") {
               check = '÷';
               output.innerHTML += fieldCalculator[i].children[j].textContent;
               result += Number(a);
               a = '';

            } else if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "%") {
               check = '%';
               output.innerHTML += fieldCalculator[i].children[j].textContent;
               result += Number(a);
               a = '';
            }
            
            
            else {
               if (fieldCalculator[i].children[j].textContent.replace(/\s/g, "") == "AC"){
                  output.innerHTML = "";
                  current = 1;
                  a = '';
                  b = '';
                  result = 0;
                  console.log("Клик по AC");
                  flag = true;
               }           
               
            }
            
            
         }
      }



      }

}





