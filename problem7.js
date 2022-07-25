n = 18;
if(n<=0)
{
    console.log("Error");
}
else{
    value = (Math.pow(n,2));
    console.log(value);
    document.querySelector(".output").innerHTML = "Input "+ n;
    document.querySelector(".output1").innerHTML = "Value at "+n+"th place is "+ value;
}
