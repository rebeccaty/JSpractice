var
  CHAR = "*",
  NEWLINE = "\n",
  repeat =
    // repeat('*', 3) => '***'
    function repeat(c,n) {
      if(n===0) {return '';}
      return c + repeat(c,n-1);
    },

  lines =
    function lines(acc,n) {
      if(n<1) {return acc;}

      var
        core = repeat(CHAR,n),
        whitespace = repeat(" ",acc.length+1),
        line = whitespace + core;

      return lines(acc.concat([line]),n-2)
    },

  diamond =
    function diamond(n) {
      if(n<3 || n % 2 === 0) {return null}

      var
        core = repeat(CHAR, n),
        top = lines([],n-2).reverse().join(NEWLINE),
        bottom = lines([],n-2).join(NEWLINE);

      return [top,core,bottom].join(NEWLINE);
    }







1 + 0 = 1 and 0 + 1 = 1
2 * 1 = 2 and 1 * 2 = 2
'me' + '' = 'me' and '' + 'me' = 'me'
[] + [1] = [1] and [1] + [] = [1]
[].concat([1]) = [1] and [1].concat([]) = [1]
