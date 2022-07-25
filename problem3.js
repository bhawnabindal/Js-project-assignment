const side = 20;
area = (Math.sqrt(3)*Math.pow(side,2)/4);
area= parseFloat(area).toFixed(2);
console.log(area);
document.querySelector(".output").innerHTML = side;
document.querySelector(".output1").innerHTML = "Area of equilateral triangle having side   "+ side +" is "+ area;