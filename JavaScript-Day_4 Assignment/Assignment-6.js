let names=["Ram","Raju","khan","Asif"]
names.forEach(function(names){
    console.log(names)
})


let num=[2,3,4,5,6,7,8]
let sqrnum=num.map(function(num){
    return num*num
})
console.log(sqrnum)


let country=["India","Egypt","USA","Ecuador","Canada"]
let resCountry=country.filter(function(country){
    return country[0]!='E'
})
console.log(resCountry)


let arrs=["hi",1,2,"Eng","hind",3,"fe",'e']
let ans=[]
function getStringList(arr){
    for(let i=0;i<arr.length;i++){
        if (typeof arr[i] === 'string'){
          ans.push(arr[i])
        }
    }
}
getStringList(arrs)
console.log(ans)


let an=["Estonia", "Finland", "Sweden", "Denmark", "Norway", "and", "IceLand", "are", "north European countries."]
let resd=an.reduce(function(conres,curr){
    return conres+" "+curr
})
console.log(resd)





function maxRepeatedFirstLetter(arr) {

    const counts = {};

    for (let i = 0; i < arr.length; i++) {
      const firstLetter = arr[i][0].toLowerCase(); 

      if (!counts[firstLetter]) {
        counts[firstLetter] = 1;
      }

      else {
        counts[firstLetter]++;
      }
    }

    let maxLetter = '';
    let maxCount = 0;
    
    for (const letter in counts) {
      if (counts[letter] > maxCount) {
        maxLetter = letter;
        maxCount = counts[letter];
      }
    }

    return [maxLetter, maxCount];
  }

const arr = ['apple', 'banana', 'cat', 'car', 'dog', 'elephant', 'fox', 'fish'];
const result = maxRepeatedFirstLetter(arr);
console.log(result); 



const constants = [2.718, 3.14159, 9.81, 98.6, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e); 
console.log(pi); 
console.log(gravity); 
console.log(humanBodyTemp); 
console.log(waterBoilingTemp); 




const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];


const mySet = new Set();


for (let i = 0; i <= 10; i++) {
  mySet.add(i);
}

console.log(mySet); 


mySet.delete(5);

console.log(mySet); 

mySet.clear();

console.log(mySet); 


const countrySet = new Set(countries.slice(0, 5));

console.log(countrySet); 


const countryMap = new Map();

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const numChars = country.length;
  countryMap.set(country, numChars);
}

console.log(countryMap); 



const a = new Set([4, 5, 8, 9]);
const b = new Set([3, 4, 5, 7]);


const union = new Set([...a, ...b]);

console.log(union); 


const intersection = new Set([...a].filter(x => b.has(x)));

console.log(intersection); 


const difference = new Set([...a].filter(x => !b.has(x)));

console.log(difference); 



function countLanguages(countries) {
    const languages = new Set();
  
    for (const country of countries) {
      for (const language of country.languages) {
        languages.add(language);
      }
    }
  
    return languages.size;
  }
  
  console.log(countLanguages(countries)); 
  function mostSpokenLanguages(countries, n) {
    const languageFreq = {};
  
    for (const country of countries) {
      for (const language of country.languages) {
        if (language in languageFreq) {
          languageFreq[language] += 1;
        } else {
          languageFreq[language] = 1;
        }
      }
    }
  
    const sortedFreq = Object.entries(languageFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([language, freq]) => ({ [language]: freq }));
  
    return sortedFreq;
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  // Output: [
  //   {'English':91},
  //   {'French':45},
  //   {'Arabic':25},
  //   {'Spanish':24},
  //   {'Russian':9},
  //   {'Portuguese':9},
  //   {'Dutch':8},
  //   {'German':7},
  //   {'Chinese':5},
  //   {'Swahili':4}
  // ]
  
 console.log(mostSpokenLanguages(countries, 3));
  // Output: [ {'English':91}, {'French':45}, {'Arabic':25} ]
  
  
class Shape {
    constructor(colour = 'Transparent') {
      this.colour = colour;
      this.type = 'Shape';
    }
    
    describe() {
      console.log(`A ${this.colour} ${this.type}`);
    }
}
  
  class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.sideLength = sideLength;
      this.type = 'Square';
    }
    
    area() {
      return this.sideLength * this.sideLength;
    }
  }
  
  class Rectangle extends Shape {
    constructor(colour, width, height) {
      super(colour);
      this.width = width;
      this.height = height;
      this.type = 'Rectangle';
    }
    
    area() {
      return this.width * this.height;
    }
  }






  class Utilities {
    static camelCase(str) {
      const words = str.toLowerCase().split(' ');
      const camelCaseWords = words.map((word, index) => {
        if (index === 0) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      return camelCaseWords.join('');
    }
  }
  
  

