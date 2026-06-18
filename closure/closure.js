function outer() {
    let count = 0;
    function inner() { 
        count++;
        console.log(count);
    }
    return inner; 
}

const counter = outer();
counter();
counter();
counter();
counter();

function createCount(ib) {
    let b=ib;
    return {
        deposit(a){
            b+=a;
            console.log(b);
        },
        withdraw(a){
            b-=a;
            console.log(b);
        },
        checkBalance(){
            console.log(b);
        }
    };
}
const acc = createCount(2000);
acc.deposit(500);
acc.withdraw(300);
acc.checkBalance();
console.log(acc.b);

function multiplier(factor) {
    return function(number) {
        return factor * number;
    }
}
const t=multiplier(3);
console.log(t(5));