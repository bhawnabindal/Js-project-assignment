var n = 10;
var sum=0;
for(var i = 1;i <= n;i++)
{
    sum = sum + i;
}
console.log(sum);
document.querySelector(".output").innerHTML = n;
document.querySelector(".output1").innerHTML = "Sum of first "+ n +" natural number is "+ sum;
