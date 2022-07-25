var a = [3,9,1,44,6];
for(i=0;i<=a.length;i++)
{
    var str1 = a.join(' ');
    
}
console.log(str1);
for(j = 0;j<=a.length;j++)
{
    if(j%2==0)
    {
    for(i = j+1;i<=a.length;i++)
        {
            if(i%2==0)
            {
                if(a[j] > a[i])
                {
                    temp = a[j];  
                    a[j] = a[i];  
                    a[i] = temp;  
                }
            }
            
        }
    }
}
for(i=0;i<=4;i++)
{
    var str = a.join(' ');
    
}
console.log(str);
document.querySelector(".output").innerHTML = "Input:- "+str1;
document.querySelector(".output1").innerHTML = "Output:- "+str; ;