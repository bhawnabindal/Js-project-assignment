let arr = [3, 3, 4, 4, 7, 8]

let obj = {}
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] += 1;
  }
}

let sortable = [];
for (let value in obj) {
  sortable.push([value, obj[value]]);
}

let duplicatesArr = [];
let nonDuplicatesArr = [];

sortable.map((ele) => {

  const [value, occurrenceNumber] = ele;
  if (occurrenceNumber === 1) {
    nonDuplicatesArr.push(parseInt(value));
  } else {
    duplicatesArr.push(parseInt(value));
  }
});

duplicatesArr.sort(function(a, b) {
  return b - a;
});

nonDuplicatesArr.sort(function(a, b) {
  return b - a;
});

let str2 = [...duplicatesArr, ...nonDuplicatesArr];
let str3
console.log(str2);
document.querySelector(".output").innerHTML = "Input:- "+arr.join(" ");
document.querySelector(".output1").innerHTML = "Output:- "+str2.join(" "); 