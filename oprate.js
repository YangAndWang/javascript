var a = -1;
var b = a+++a; //  -> b is -1
var c = a+ + +a;// -> c is -2
var d = a+ ++a;//  -> d is -1
var e = a++ +a;//  -> e is -1
//why get these results; test in FireFox   console.log(a+++a)

