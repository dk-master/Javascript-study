// 제너레이터  : 이터레이터이자 이터러블을 생성하는 함수(반환하는 함수)

function *gen() {
    yield 1;
    yield 2;
    yield 3;

} // 제너레이터에서는 return값을 만들어줄 수 있는데 순회할때 마지막 done의 값으로 만들어 줄 수 있다.
//어떠한 값도 순회할 수 있다 제너레이터를 통해서 ... 

let iter = gen();
iter.next();
for (const a of iter) console.log(a)


//홀수만 발생시키는 이터레이터 만들어보자

function *infinity(i = 0) {
    while(true) yield i++;
}

let iter3 = infinity();




function *odds(limit) {
    for (let i = 0; i < limit; i++) {
        if( i % 2) {yield i
         console.log(i)   
        };
    }
}
let iter2 = odds(10);
console.log(iter2.next())

console.log(iter2.next())

console.log(iter2.next())

console.log(iter2.next())


// 재밌게 표현한 홀수 뽑기 함수 ㅋ

function *funnyOdds(limit) {
    for(const a of infinity(1)) {
        if( a % 2) yield a;
        if (a == limit) return;
    }
}


let iter4 = funnyOdds(20);
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());

// for of , 전개연산자, 구조 분해, 나머지 연산자 제너레이터 같이 사용할 수 있다.

console.log(odds(10))