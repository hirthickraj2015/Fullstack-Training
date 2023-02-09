//Question No-1

var s="inna amcha pantu iruka"

function reverseWords(str) {
  var allWords = str.split(" ")
  return allWords.map(item => item.split("").reverse().join("")).join(" ")
}
console.log(reverseWords(s));

//Question No-2

var l=[1,2,3,4]
function empty(list) {
    
    list.length = 0;
}
empty(l)
console.log(l);


//Question No-3

var Stack1 = [];
var Stack2 = [];
function Enqueue(element) {
    Stack1.push(element);
}
function Dequeue() {
    if (Stack2.length === 0) {
      if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
      while (Stack1.length > 0) {
        var p = Stack1.pop();
        Stack2.push(p);
      }
    }
    return Stack2.pop();
}
Enqueue(1);
Enqueue(2);
Dequeue();
console.log(Stack1);
console.log(Stack2);


//Ouestion No-4


var n = 100;
for (let i=1; i<=n; i++)                                
{
    if (i%15===0)                                                
        console.log("FizzBuzz");
    else if (i%5===0)    
        console.log("Buzz");
    else if (i%3===0)  
        console.log("Fizz");
    else
        console.log(i);                       
}


//Ouestion No-5

var s="mary";
var s1="army";
function checkAnagram(str1, str2)
{
    var s1 = str1.trim().split(" ").join("").split("").sort();
    var s2 = str2.trim().split(" ").join("").split("").sort();
    if(s1.length!=s2.length) 
        console.log("False");
    else{
        result = true;
        for(let i=0; i<s1.length; i++){
            if(s1[i]!=s2[i]){
                result = false;
                break;
            }
        }
        if(result) 
            console.log("True");
        else 
            console.log("False");
    }
}
checkAnagram(s,s1);
  

//Question No-6


var n="H. Wells";
function validName(name) {
  const terms = name.split(' ');
  
  if (terms.length < 2 || terms.length > 3) {
    return false;
  }
  
  for (let i = 0; i < terms.length; i++) {
    let term = terms[i];
    
    if (term.length === 1) {
      if (term[term.length - 1] !== '.') {
        return false;
      }
    } else {
      if (!/^[A-Z][a-z]*$/.test(term)) {
        return false;
      }
    }
  }
  
  if (terms.length === 2) {
    return true;
  }
  
  let firstTerm = terms[0];
  let middleTerm = terms[1];
  let lastTerm = terms[2];
  
  if (firstTerm.length === 1) {
    if (middleTerm.length === 1 || lastTerm.length !== 2) {
      return false;
    }
  } else {
    if (middleTerm.length !== 2 || lastTerm.length !== 2) {
      return false;
    }
  }
  
  return true;
}
console.log(validName(n));