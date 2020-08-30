

// // // 사용자정의 이터러블 알아보기

// // const iterable = {
// //     [Symbol.iterator]() {
// //         let i =3;
// //         return {
// //             next() {
// //                 return i ==0 ? {done : true}:  {value: i--, done: false}
// //             }
// //         }
// //     }
// // }
// // let iterator = iterable[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// //제너레이터 이터레이터를 리턴하는 함수

// function *gen() {
//     yield 1;
//     yield 2;
//     yield 3;

// }
// let iter = gen();
// log(iter.next())

// //자바스크립트에 iterable하면 순회할 수 있다.
// // 이 문장을 통해서 순회할 수 있는 값을 만들 수 있끼 때문에 제너레이터 통해서 어떠한 값이든 순회할 수 있도록 만들 수 있다.

// //홀수만 나오게한다 제너레이터 이용해서

function *infinity(i =0) {
    while(true) yield i++;
}
function *odds(l) {
    for( let i =0; i<= l; i++){
        if(i % 2) yield i;
    }
}
// let iter2 = odds(10);
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())
// console.log(iter2.next())

const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);
console.log(odds(5));