// // const nums  = [1,2,3,4,5];

// // let total = 0;
// // for (const n of nums) {
// //     total = total + n;
// // }

// // console.log(total);

// const go = (...list) => {
//     console.log(list);
// }

// go(0, a=> a+1, a=> a+10, a=> a+100,console.log);

// //go 함수들과 인자를 전달해서 즉시 평가

// // pipe

// const f = pipe(a => a+1, a => a+10, a=> a + 100)

const add = (a,b) => a+b;

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l){
        res.push(i);
    }
    return res;
}
var list = range(4);
console.log(reduce(add,list));
