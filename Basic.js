var styles = ["jazz", "blues"];
styles.push("Rock'n'Roll")
styles[styles.length-2] = "Classic"
//console.log(styles);
//alert(styles.pop())

var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"]
var rand = Math.floor(Math.random()*(arr.length))
//alert(arr[rand])

function find(array,value) {
  for (var i=0; i<array.length;i++) {
    if (array[i] == value)
    return i;
  }
  return -1;
}
//alert(find(arr,"Beetroot"));

//function filterNumber(array) {
  //for(var i=0; i<array.length; i++) {
    //if (isNaN(array[i]) == true
    //array.push(array[i]);
  //}
//}
//alert(filterNumber([1,2,true,false,3])) ??

var fruits = ["Lemon","Apple","Orange","Peach"];
var str = fruits.join(", ");
//alert(str)

var fruits = "Apple,Orange,Peach";
var arr = fruits.split(',');
//alert(arr);

var obj = {
  className: "open menu",
  rowName:"close menu"
}

function addClass(elem,cls) {
  for (var c = elem.className.split(" "), i = c.length-1; i>=0; i--) {
    if(c[i] == cls) return
  }

  elem.className += " " + cls
}

addClass(obj,"new")
addClass(obj,"open")
//alert(obj.className)

//alert( "Hey-ho!".charAt(0).toLowerCase());

function ucFirst(str) {
  var newStr = str.charAt(0).toUpperCase()
  for (var i=1; i<str.length; i++) {
    newStr += str.charAt(i)
  }
  return newStr
}
//alert( ucFirst("john"))

function checkSpam(str) {
  str = str.toLowerCase()
  return ~str.indexOf("viagra") >= 0 || str.indexOf("xxx") >= 0
}

//alert(checkSpam("innocent rabbit"))??

function truncate(str, maxlength) {
  str = str.substr(0,maxlength) + "..."
  return str
  }
//alert(truncate("and here is what I want to say on that matter:", 20))
//alert(truncate("hi to all!", 20))

 next_prime: for (var i =2; i<100; i++) {
  for (var j = 2; j<i; j++) {
    if (i % j == 0)
    continue next_prime
  }
//console.log(i)
}
//var sayHi = new Function('name', ' alert("Hi, "+name) ');
//alert(sayHi("Benedict"));


//function digitize(n){
  //return (n + '').split('').map(Number).reverse();
//}
//console.log(digitize(3456710));

//function addLength(str) {
  //return str.split("").map(word => word + " " + v.length
//)
//}

reverse = function(array) {
 for (var i = array.length - 1; i >= 0; i--) {
var newArray = []
 newArray.push(array[i])
return newArray
}
alert(reverse([1,2,3]))
