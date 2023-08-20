let a = 10;
let b = 10;

a += 2
// console.log(a+b);
let e = a + b;
console.log(e);



// next
function sum() {
    let a = 5;
    let b = 5;
    let d = b + a;
    console.log(d);
}
sum();


// next
function re() {
    let a=3;
    let b=2;
    let e=a+b;
    return e;
}
let f=re();
console.log(f);




// next
function grating(b){
    console.log("hello",b, "how are you")
}
grating("rajesh");
grating("naven");



// next
function add(a,b){
    console.log("add",a+b ,"multipl" ,a*b);

}
add(3,9);


// next
let rajectration = "   raJesh"
let login = "rajEsh   "

let trimname = rajectration.trim();
let tolowercase = trimname.toLowerCase();

let trimname2 = rajectration.trim();
let toLowerCase2 = trimname2.toLowerCase();

console.log(tolowercase === toLowerCase2);

if (tolowercase === toLowerCase2) {
    console.log("successfull");
}
else {
    console.log("not");
}



// next
let number = "1220"
let velu = number.padStart(12, "x")
console.log(velu);

let cartat = rajectration.charAt(5);
console.log(cartat);

let string = "rajesh,raju,rampal"
let welu = string.split(",")
console.log(welu[1], string.length,);
console.log(welu);





// next
let str="rajesh kumar"
let rejelt=str.indexOf("kumar");
console.log(rejelt);

rejelt=str.search(/Kumar/i);
console.log(rejelt)


// next
let attr=" rajesh Rajesh RAJESH"
rejelt=attr.match(/rajesh/gi) 
console.log(rejelt)



// next
let name="rajesh"
let strr =`hello ${name}` 
console.log(strr,typeof(strr))


