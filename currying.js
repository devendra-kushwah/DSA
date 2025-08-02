function main(a){
 console.log("a", a);
 return function(b){
    console.log("b", b);
 }
}
main(1)(2);