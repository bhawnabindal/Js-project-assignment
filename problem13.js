var n = 5;
sum = 0;
for(var i = 1; i <= n ; i++){
    sum += (2*i);
}
console.log(sum);
document.querySelector(".output").innerHTML = "Input "+ n;
document.querySelector(".output1").innerHTML = "Value at "+n+"th place is "+ sum;