let evenNumbers = [];
for(let num = 0; num <= 10; num = num+2){
    if(num % 2 == 0){
        evenNumbers.push(num);
   
    }
}
document.getElementById("demo").innerHTML = evenNumbers.join(' ');
//console.log(evenNumbers.join(' '));