function total(arr) {
var sum = 0;
if (arr.length>3) {
for(var i=1;i<=arr.length-3;i++) {
sum = sum + (arr[0]+arr[1]) +(arr[arr.length-1] +arr[arr.length-2]) +
2*(arr[i] +arr[i+1])}
}
else {
  sum = sum + (arr[0]+arr[1]) +(arr[arr.length-1] +arr[arr.length-2])
}
return sum
}
console.log(total([1,2,3,5]));



function sum() {
var result =0;
for (var i=0; i<=arguments.length-1; i++) {
result += arguments[i];// return the sum of all arguments given.
}
return result;
}
console.log(sum(1,1));

function min(arr, toReturn) {
  var min = Math.min.apply(Math,arr);
  if (toReturn == "value") {
  return min}
  else if (toReturn == "index") {
  return arr.indexOf(min)}
//TODO
}
console.log(min([1,2,3,4,5], "index"));


function initials(n){
var arr = n.split(" ")
return (arr[arr.length-1].substring(0,1)).toUpperCase()
};
console.log(initials("code war"));

console.log("hello");

function maxPizza(cut) {
if (cut< 0) {
return -1 }
else {
var numPieces = (cut-1)*cut / 2 + 1
return numPieces}
}


function coordinates(degrees, radius) {
var result =[];
result.push((radius * Math.cos(degrees*Math.PI/180).toFixed()),radius * Math.sin(degrees*Math.PI/180).toFixed(3))
return result
}
console.log(coordinates(100,10454));


function numberProperty(n){
  var prime = n > 1, i = 2, cap = Math.sqrt(n);
  while (i <= cap) {
    if (n % i++ == 0) {
      prime = false;
      break;
    }
  }
  return [prime, !(n & 1), !(n % 10)];
};


function numberProperty(n){
  return [isPrime(n), !(n%2), !(n%10)];
}

function isPrime(a){
  for (var i = 2; i < a / 2; i++) if (!(a % i)) return false;
  return a >= 2;
}


function squareDigits(num){
var result = num.toString().split("")
//return Number(result.map(v => v**2).join(""))
}
//console.log(squareDigits(323));


var makeAcronym = function(string){
  //return string.map(v => v[0].toUpperCase())
}
//console.log(makeAcronym(elf ears));


function dropCap(n) {
//return n.split(" ").map(v => v.length>2? v.charAt(0).toUpperCase()+v.toLowerCase().substring(1):v).join(" ");
}

function createStars (n) {
  for (var i=((n/2)-1);i>=0;i-=1){
    console.log(" ");
    for (var j=1;j<=n; j+=2){
      console.log("*");
    }
}
console.log(createStars(9));
