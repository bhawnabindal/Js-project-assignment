var n = 5;
var fact = 1;
if(n === 0 || n === 1)
{
    console.log(1);
}
else if(n > 1)
{
    for(var i = n ; i >= 1; i--)
    fact *= i;
    console.log(fact);
    document.querySelector(".output").innerHTML = n;
    document.querySelector(".output1").innerHTML = "Factorial of "+ n +" is "+ fact; 
} 
else
{
    console.log("Enter positive integer");
    document.querySelector(".output").innerHTML = "Enter positive integer";
}

    

