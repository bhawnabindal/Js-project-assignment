var n = 12;
if(n <= 0 || n > 12)
{
    console.log("Error");
    document.querySelector(".output").innerHTML = "Error";
}
else {
    if( n === 1 || n === 3 || n===5 || n===7 || n==8 || n === 10 || n === 12)
        {days = 31;
        console.log(days);}
    else if(n === 4 || n === 6 || n === 9 || n === 11)
        {
            days = 31;
            console.log(days);}
    else
        {
            days = 28;
            console.log(days);
        }
}
document.querySelector(".output").innerHTML = n;
document.querySelector(".output1").innerHTML = "Number of days in "+ n +"th month is "+ days;