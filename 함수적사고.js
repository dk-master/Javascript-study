const fun = require('./전개연산자');

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000},
    
]

const add = (a,b) => a+b;
console.log(fun.reduce(
        add,
        fun.map(p =>p.price,
            fun.filter(p =>p.price<20000,products))));

            //함수 중첩, 연속실행하면서, 이 값으로 부터 출발해서 필터하고 해당하는 값을 맵을 통해 원하는 값으로 추출하고 reduce를 통해 축약해 나가면서
         // 마지막일을 처리