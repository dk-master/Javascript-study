// // map 
const fun = {
map : (func, iter) => {
    let res= [];
    for(p of iter) {
        res.push(func(p));
    }
    return res;
},

// // let names = [];
// // for (const p of products) {
// //     names.push(p.name);
// // };
// // console.log(names);


// // let prices = [];
// // for(const p of products) {
// //     prices.push(p.price)
// // }
// // log(prices)

// console.log(document.querySelectorAll('*').map(el => el.nodeName)); // 에러남

// let m = new Map();
// m.set('a',10);
// m.set('b',20);
// console.log(new Map(map(([k,a]) => [k,a * 2], m)));
// const it = m[Symbol.iterator]();
// console.log(it.next());


//filter

// let under20000 = [];
// for (let p of products) {
//     if(p.price < 20000) under20000.push(p);
// }
// console.log(...under20000);

filter : (func,iter) => {
    let res = [];
    for (const p of iter) {
        if(func(p)) res.push(p);
    }
    return res;
}
,
// let it = filter((a) => {
//     return a < 5;
// }, function * (){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }() )

// console.log(it);


// const nums = [1,2,3,4,5];
// let total = 0;
// for(let n of nums) {
//     total = total +n;
// }
// console.log(total);

// const reduce = () => {

// }
// const add = (a,b) => {
//     return a+b;
// }

// log(reduce(add,0,[1,2,3,4,5]));


reduce : (f,acc,iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc,a);
    }
    return acc;
},

// console.log(reduce((product_price, product) =>{
//     return  product_price + product.price
    
// }, 0, products))



//함수형 사고

}
module.exports = fun;