const products = [
{ name : "반팔티", price : 15000},
{ name : "긴팔티", price : 20000},
{ name : "후드티", price : 35000},
{ name : "핸드폰케이스", price : 10000},
{ name : "바지", price : 5000},

]

const map  = (f,iter) => { // 어떤값을 수집할 것 인지 f라는 함수에 완전 위임을 한다.
    let names = [];
    for (const a of iter) {
        names.push(f(a));
    }
        return names;

} // 맵 함수는 이 함수라 비슷하다

// const result = document.querySelectorAll("*");
// console.log(map(el => el.nodeName, result));
//console.log(document.querySelectorAll.map())

let m = new Map();
m.set('a', 10);
m.set('b',20);
console.log(new Map(map(([k,a]) => [k, a * 2], m)));


let under20000 = [];
for (const p of products) {
    if (p.price < 20000) under20000.push(p);
}

console.log( ...under20000)