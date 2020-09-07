
// // es5 방식
// const list = [1,2,3];

// for( var i =0; i< list.length; i++) {
//     console.log(list[i]); // length라는 프로퍼티에 의존, 숫자라는 키로 순회하도록 
// }

// const str = 'abc';
// for (var i =0; i < str.length; i++) {
//     console.log(str[i]);
// }

// for(const a of list) { // 간결하게 바꼈다. es6가 어떻게 순회에대해 추상화를 했고 어떻게 사용하게 했는가
//     console.log(a)
// }
// for (const a of str) {
//     console.log(a)
// }


// Array를 통해 알아보기

const arr = [1,2,3];
// arr[Symbol.iterator] = null;
// for (const a of arr) {
//     console.log(a);
// }

// Set

const set = new Set([1,2,3]);
console.log(set[Symbol.iterator]); // 각각 Symbol iterator를 다 가지고 있다.
for (const a of set) {
    console.log(a)
} // 

// map

const map = new Map([['a',1],['b',2],['c',3]]);
for (const a of map) {
    console.log(a)
}

console.log(arr[Symbol.iterator]);
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // value에 오는 값을 for 문 a에 담아서 출력해주는 방식.

let iter1 = arr[Symbol.iterator]();
iter1.next(); //  이 동작이 for문 안에서 이뤄지는 것이다.
for(const a of iter1){
    console.log(a)
}





//Symbol.iterator
// 이터러블/이터레이터 프로토콜


// 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값

// 즉 array가 Symbol.iterator를 가지고 있다.  이터레이터 - next라는 메서드를 가지고 있다.

// 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값