
// Returns Highest Number
var highestNumber = [2.1, 4.3, 5.5, 3.3, 6.5];
highestNumber.sort(function(element1, element2){
  return element2 - element1;
});
highestNumber.shift();

// Returns lowest number
var lowestNumber = [-2.1, 4.3, 5.5, 3.3, 6.5, 8.6];
lowestNumber.sort(function(element1, element2){
  return element2 - element1;
});
lowestNumber.pop();

// Returns Smallest number
var closestNumber = [2.1, -4.3, 5.5, 3.3, 6.5, 8.6, .002, -.001, 8769];
number = 0
var newClosestNum = closestNumber[0]

closestNumber.forEach(function(element) {
  if (Math.abs(element - number) < Math.abs(newClosestNum - number)) {
    newClosestNum = element;
  };
})

// Calculate the Sum

var sum = [1, 5, 9, 56, 53];
var add = 0

sum.forEach(function (element){
  add= add + element
})



// Find the mean
var sum = [1, 5, 9, 56, 53];
var add = 0

sum.forEach(function (element){
  add= add + element
})
add / sum.length

// Finding the index that is highest
var highest = [4, 3, 6, 7, 8, 45, 1, 34];
var highestIndex = highest[0];

highest.forEach(function(element){
  if (highestIndex < element){
    highestIndex= element;
  }
})
highest.lastIndexOf(highestIndex)


// Sorting Names

var siblings = ["Kathryn", "Marlana", "Shaley", "Justin", "Connor", "Sophie"]
var parents = ["Rosie", "Chuck", "Scott", "Debbie"]

siblings.sort();
parents.sort().reverse()
// parents.sort(function(element1, element2) {
//   return (element1>element2)*1 + (element1<element2)*-1;
// });

var family = siblings.concat(parents);
family.sort();

function isFamily(x) {
  return x === "Bob"
};
family.filter(isFamily);
family.some(isFamily);

// Create a function that returns an array with only the even elements from the array.

var numberElements = [1, 2, 3, 4, 5, 6, 7, 8]

function Even(){
  var empty = [];
  for (var index=0; index<numberElements.length; index++){
    if (numberElements[index] % 2 === 0) {
      console.log(numberElements[index])
      empty = empty.concat(numberElements[index]);
    }
  };
  console.log(empty);
}

// Create a function that returns an array with only the odd elements from the array.
var numberElements = [1, 2, 3, 4, 5, 6, 7, 8]

function Odd(){
  var empty = [];
  for (var index=0; index<numberElements.length; index++){
    if (numberElements[index] % 2 === 1) {
      console.log(numberElements[index])
      empty = empty.concat(numberElements[index]);
    }
  };
  console.log(empty);
}


// Returns new Array with returned value of function

var oldArray = [3, 55, 22, 9.8, 1]

function newNumbers() {
  var newArray = [];
  for (var index=0; index<oldArray.length; index++){
      newArray = newArray.concat(oldArray[index] *2);
  }
  console.log(newArray);
}


//Return a new Array with elements that return True from a function


var oldArray = [3, 55, 22, 9.8, 1]

function filteredNums(x) {
  return x>16;
  };
  oldArray.filter(filteredNums);


oldArray.forEach(function(element) {
  element>16;
})

// As a While Loop
var i = 0
while (i<10) {
  console.log(i)
  i++;
}

// As a For Loop
for (var a=10; a>0; a--){ console.log(a); }


// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.

var array1 = [2, 3, 5, 67]
var array2 = [3, 54, 67]

function mergeArray() {
  var combinedArray = array1.concat(array2);
  console.log(combinedArray);
  combinedArray.forEach(function(element){
    if (combinedArray[0] === element) {
      // console.log(combinedArray[element] === element)
      combinedArray.splice([element], 1, element)
    }
  });
    // console.log(combinedArray)
}
// Using "Set" to removed duplicates
var array1 = [2, 3, 5, 67]
var array2 = [3, 54, 67]

var combinedArray = array1.concat(array2);
console.log(combinedArray);

new Set(combinedArray)


// Filter

var array1 = [2, 3, 5, 67]
var array2 = [3, 54, 67]

var combinedArray = array1.concat(array2);
console.log(combinedArray);

function isFiltered(x) {
  return x === x;
}
combinedArray.filter(isFiltered


// Fill Array with Pre-defined values

function fillArray(x, y) {
  var preFilled = [];
  preFilled = preFilled.fill(y, 0, x-1);
  return preFilled;
};

fillArray(2, 4)
