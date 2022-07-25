var n = 123, n1=0, r, temp;
temp = n;
while(n > 0)
    {
        r = n%10;
        n = parseInt(n/10);
        n1 = n1*10 + r;       
    }
    if(temp === n1)
    {
        console.log("Palindrome");
    }
    else
     console.log("Not Palindrome");