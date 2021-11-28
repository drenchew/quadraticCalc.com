let root1, root2;
let a = prompt("first number");
let b = prompt("second number");
let c = prompt("third number");
let d = b * b - 4 * a * c;

if (d > 0) {
   root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2*a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);

}

else if (d == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
   
}

else   {   
    (d<0)
    console.log('no real numbers');

}