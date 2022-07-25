let str = "Lorem Ipsum";
let str2 = (str.replace(/ /g,""));
if(str === "" || str.length === 0)
document.querySelector(".output1").innerHTML = "Error";
else{
    str2 = (str2.length);
    console.log(str2);
    document.querySelector(".output").innerHTML = str;
    document.querySelector(".output1").innerHTML = "length of string '"+ str +"' after removing whitespace is "+ str2;      
}
