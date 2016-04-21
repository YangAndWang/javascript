var a = -1;
var b = a+++a; //  -> b is -1   first a is -1 then ++a return 0 so it is -1  maybe error 
var c = a+ + +a;// -> c is -2   first a is -1 then + + a is let a to Number<sub>2</sub> so it equal -1 + -1
var d = a+ ++a;//  -> d is -1   first a is -1 then ++a return 0 so it is -1
var e = a++ +a;//  -> e is -1   first ++a return -1,a is 0 then a is 0 so it is -1
//why get these results; test in FireFox   console.log(a+++a)

