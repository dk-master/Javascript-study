// 평가 - 코드가 계산되는것 

// 일급 - 값으로 다룰 수 있다, 변수에 담을 수 있다. 함수의 인자로 사용될 수 있다 , 함수의 결과로 사용될 수 있다.

// 일급함수 - 함수가 값으로 다뤄질 수 있다.

// const apply1 = f => f(1); //  함수를 받아서 함수를 실행해준다 (매개변수로, 리턴값으로)
// const add2 = a => a+2;
// apply1(add2)

const times = (f,n) => {
    let i = -1;
    while (++i < n ) f(i);
}

times(console.log(), 3);

//