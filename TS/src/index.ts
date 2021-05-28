// import 'colors';
// console.log('----------------<ts>---------------'.bgMagenta.black.bold);
const myObj = {
   method() {
      console.log('Object::', this);
   }
};
myObj.method(); //Object:: { method: [Function: method] }

//CLass
class MyClass {
   method() {
      console.log('Class::', this);
   }
}

const ins = new MyClass();
ins.method(); //Class:: MyClass {}

//Function
function myFunction(this: any, text: string) {
   console.log('Function::', this, text);
}

myFunction.call(myObj, 'ABC');
