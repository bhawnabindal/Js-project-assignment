var n1 = 7;
var n2 = 3;
var a = [] , j = 0;
for(var i = n1-n2; i <= n1 ; i++)
{
    if(n2!==i)
    {
        a[j]=i;
        j++;
    }
}
for(var i = n2; i>=1; i--)
{
    a[j]=i;
    j++
}
for(i=0;i<=n1-1;i++)
{
    var str = a.join(' ');
    
}
console.log(str);
document.querySelector(".output").innerHTML = "Input:- "+n1+" "+n2;
document.querySelector(".output1").innerHTML = "Output:- "+str; ;