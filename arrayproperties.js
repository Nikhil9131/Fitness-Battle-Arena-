let array=["Apple","Banana","Mango","Lichi","strawberry"];

// length
// array ka size batana

console.log(array.length);

// push 
// array ke ander element daal dega
//last me element daalega

array.push("Watermelon");
console.log(array);

// pop
// element remove karedega last se

array.pop();
console.log(array);

// unshift
// element ko shuru me daal dega

array.unshift("Watermelon");
console.log(array);

// shift
// shuru ka index me joh value hai usko remove kardega

array.shift();
console.log(array);

// includes
// check karta hai ki element present hai yah nahi

console.log(array.includes("Mango"));
console.log(array.includes("Watermelon"));

// indexof
// uss element ka index ka return kardega
console.log(array.indexOf("Mango"));

// Join
// saare elements join kardegi jisse bhi join karana hai
console.log(array.join("-"));

// Slice
// elements btayega uss range ke right bound se just pehle
console.log(array.slice(1,3));

// splice
// elements btayega uss range ke right bound tak
console.log(array.splice(1,4));

array=["Apple","Banana","Mango","Lichi","strawberry"];
// normal for loop
console.log("For Loop");
for(var i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("For of loop")
// for of loop
for(i of array){
    console.log(i);
}
console.log("For each loop")
// for each

array.forEach(function(i){
    console.log(i);
})
array=[1,2,3,4,5,6,7,8,9,10];
// Advanced array method
// map 
// saare elements par condition apply kardega
const double=array.map(function(x){
    return x*2;
});
const doubledemo=array.map(x=>x*2);
console.log(double);
console.log(doubledemo);
console.log(array);

// filter
//tumhari condition karega
// joh bhi element conidtion pass hoga voh new array me aa jayega

const even=array.filter(function(x){
    return x%2==0;
});

const odd=array.filter(x=>x%2!=0);
console.log(even);
console.log(odd);

// reduce
// saare elements ko ek variable me convert kardega

const sum=array.reduce(function(sum,x){
    return sum+x;
},0);
const sum1=array.reduce(function(sum,x){
    return sum+x;
});
const sum2=array.reduce((sum,x)=>sum+x,0);
const sum3=array.reduce((sum,x)=>sum+x);
console.log(sum);
console.log((sum1));
console.log((sum2));
console.log((sum3));

//find
// jaise hi condition satisfy huyi vaise hi return kar diya 
const f=array.find(function(x){
    return x>3;
});
const fdemo=array.find(x=>x>3);
console.log(f);
console.log(fdemo);

// some()
// btata hai ki condition  kuch elements satisfy kar rahe hai yah nahi
const s=array.some(function(x){
    return x>3;
});
const sdemo=array.some(x=>x>3);
console.log(s);
console.log(sdemo);

// every()
// btata hai ki saare elements staisfy condition kar rahge hai yah nahi
const e=array.every(function(x){
    return x>5;
});
const edemo=array.every(x=>x>5);
console.log(e);
console.log(edemo);