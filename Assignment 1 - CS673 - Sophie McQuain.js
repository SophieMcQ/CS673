// Assignment 1 CS673
// Sophie McQuain

// Question 2
function printHelloWorld() {
  console.log("Hello World");
}

// Question 3
function multiplicationTable() {
  for (var i = 1; i < 13; i++) {
    var line = [];
    for(var w = 1; w<13; w++) {
      line.push(i*w)
    }
    console.log(line);
  }
}

// Question 4
function isPalindrome(word) {
  var isPalindrone = true;
  for (var i = 0; i < Math.floor(word.length/2); i++) {
    if(word[i]!==word[word.length-i-1]) {
      isPalindrone = false
    }
  }
  console.log(word +": "+isPalindrone)
}

// Question 5
function combineList(list1, list2) {
  var newList = [];
  for (var i = 0; i<list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  console.log(list1 + " + " + list2 +" -> "+newList);
}

// Question 6
function firstHundredFibonacci() {
  var f = [];
  f.push(1);
  f.push(1);
  while(f.length<=100) {
    f.push(f[f.length - 1] + f[f.length - 2]);
  }
  console.log(f);
}

// Question 7
function isLeapYear(year) {
  if((year-2020)%4==0) {
    console.log(year + ": leap year");
  }
  else {
    console.log(year + ": not a leap year");
  }
  
}


printHelloWorld();
multiplicationTable();
isPalindrome("aaabaaa");
isPalindrome("test");
isPalindrome("pop");
isPalindrome("banana");
combineList([1, 2, 3, 4], ["a", "b", "c", "d"]);
firstHundredFibonacci();
isLeapYear(2080);
isLeapYear(1912);
isLeapYear(1825);
isLeapYear(2023);