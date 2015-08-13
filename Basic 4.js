// Test.describe( "diamond()", function(){
//  Test.assertEquals(diamond(3), " *\n***\n *\n")
//  Test.assertEquals(diamond(2), null)
//  Test.assertEquals(diamond(-3), null)
//  Test.assertEquals(diamond(0), null)
//});

//   *
//  ***
// ***** n
//  ***
//   *

//    *
//   ***
//  *****
// ******* n
//  *****
//   ***
//    *

diamond()
Expected: *
***
 *
, instead got:  *
***
 *

var
  NEWLINE    = '\n',
  CHAR       = '*',
  whitespace = // :: Integer -> String
    function whitespace(n) { return ' '.repeat(n); };

function lines(n) {
  var
    lines = [];

  for(var i = n; i > 0 ; i -= 2) {
    lines
      .push(
        whitespace(lines.length+1) + CHAR.repeat(i) // :: String
      )
  }

  return lines;
}

function diamond(n){
  if(n <= 0 || n % 2 === 0) {return null;}

  var
    base   = CHAR.repeat(n),
    top    = lines(n-2).reverse().join(NEWLINE),
    bottom = lines(n-2).join(NEWLINE);

  return [top,base,bottom].join(NEWLINE);
}

//

function diamond(n){
  if(n <= 0 || n % 2 === 0) {return null;}

  var
    base   = [],
    top    = [],
    bottom = null;

  // '*****'

  for(var x = n; x === 0; x -= 1) {
    base.push('*')
  }

  return [top,base,bottom].join(NEWLINE);
}
