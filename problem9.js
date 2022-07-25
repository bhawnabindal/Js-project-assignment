var a = 1, b = 5, c = 6;
var x1, x2;
x1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c) ) / 2*a;
x2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c) ) / 2*a;
x1 = parseFloat(x1).toFixed(2);
x2 = parseFloat(x2).toFixed(2)
console.log(x1,x2);
document.querySelector(".output").innerHTML = a+" "+b+" "+c ;
document.querySelector(".output1").innerHTML = "Coefficient of quadratic equation "+a+"x2+"+b+"x+"+c+" are "+x1+" "+x2;