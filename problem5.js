var cel = 12;
var far = (cel * 9/5) + 32;
far  = parseFloat(far).toFixed(2);
console.log(far);
document.querySelector(".output").innerHTML = cel;
document.querySelector(".output1").innerHTML = +cel +" degree celcius is equal to "+ far +" degree in fahrenheit";