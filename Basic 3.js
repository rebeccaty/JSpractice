function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return parseInt(a) + parseInt(b)}, 0);
}
console.log(sumDigits(1234));

function toWeirdCase(string){
  for (var i=0; i<string.length; i++) {
    var result = 0;
    if (i%2==0) {
      result[i]=string[i].toUpperCase();
    }
    else {
       result[i]=string[i].toLowerCase();
    }
    return result;
  }
}

console.log(toWeirdCase("hello"));

function toDo(n) {
  var arr = n.split("");

  var i = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == " ") {
      continue;
    } else {
      if (i % 2) {     // even
        arr[i].toUpperCase()
      } else {  // odd
        arr[i].toLowerCase()
      }
      i<arr.length;
      i++;
    }
  }
}
console.log(toDo("Hello world"));



function findDup( arr ){
 var sorted_arr = arr.sort();
 var result = [];
  for (var i = 0; i<arr.length; i++) {
    if(sorted_arr[i+1] == sorted_arr[i]) {
      result.push(sorted_arr[i]);
      }
  }
  return Number(result);
}
console.log(findDup([1,2,3,3,4]));
var results, arr= [9, 9, 111, 2, 3, 4, 4, 5, 4, 7];


function duplicates(arr) {
  var results;
  if(arr.filter){
    results= arr.filter(function(itm, i){
        return arr.lastIndexOf(itm)== i && arr.indexOf(itm)!= i;
    });
    return results;
}
}
console.log(duplicates([9, 9, 111, 2, 3, 4, 4, 5, 4, 7]));

function Counter(){
  var self = this;
  self.count = 0;

  self.updateCount = function(){
    self.count++
  };
}


var triangleNum = function(value) {
  var abs = Math.abs(value);
  var result = (abs/2) * (abs + 1);
  return result
}

var triangleTest = function(Number) {
    //console.log(triangleNum(Number) == result? "True":"False");
  }
triangleTest(6);

var Calculator = {
 average: function() {
   var average = 0;
   for (var i = 0; i<arguments.length;i++) {
    average += arguments[i];
 }
 average = average / Math.max(arguments.length,1)
  return average;
}
};

console.log(Calculator.average(3,4,5));


function solution(A) {
var B = A.sort(function(a,b)
{return a-b});
for (var i=0;i<B.length;i++) {
if (B[i+1]-B[i] ===2) {
return (B[i+1] + B[i])/2;
}
}
}
console.log(solution([2,3,1,5,6,8,7,4,10]));


function diamond(n){

  return diam;
}
