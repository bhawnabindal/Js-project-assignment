let n = 5, count = 0;
for(let j = 1 ; j <= n ; j++)
{
    let n1 = 0, r, i;
    i=j;
    while(i > 0)
    {
        r = i%10;
        i = parseInt(i/10);
        n1 = n1*10 + r;       
    }
    if(j === n1)
    {
        count = count + 1;
        
    }
    

}
console.log(count);
document.querySelector(".output").innerHTML = n;
document.querySelector(".output1").innerHTML = "The count of palindromic numbers till "+n+" is "+count;