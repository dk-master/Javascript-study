// 내 스스로 iterable을 메서드를 만들어보자

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i ==0 ? {done: true} : { value : i--, done : false}
            },
            [Symbol.iterator]() {
                return this; // 자기자신을 리턴 다시 한번 for of문 안에 들어간다거나 
            }
        }
    }
}

let iterator = iterable[Symbol.iterator]();
iterator.next();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

for (const a of iterator) console.log(a);

const arr2 = [1,2,3];
let iter2 = arr2[Symbol.iterator]();
for(const a of arr2) console.log(a);

