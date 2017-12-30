var a = prompt ("Enter 'a' value");
var b = prompt ("Enter 'b' value");

var value = (a * a) - (2 * a * b) + (b * b);

console.log('Resoult of equations is:' + value);

if ( value > 0 )  {
    console.log("Wynik jest dodatni");
} else if ( value < 0 ) {
    console.log("Wynik jest ujemny");
} else {
    console.log("Wynik jest równy zero");
}


