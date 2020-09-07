// Map이라는 내장객체는 object랑 유사하다
let user = {};
user.name  = "Dongkwan";
user.email = "sunilair@naver.com";
user.phone = "010-9481-0567";
// object는 key값을 숫자로 할 수 없다.
user[1] = "112333";
user["gender"] = "남자";
console.log(user)
//코딩하다보면 어떨때는 대괄호 쓰고 어떨 때는 . 쓴다. 일괄성이 떨어진다.
console.log("name", user.name);
let guestArr = [

    {name:"A", city: "seoul1"},
    {name:"B", city: "seoul1"},
    {name:"C", city: "seoul1"},
    {name:"D", city: "seoul2"},
    {name:"E", city: "seoul2"},
    {name:"F", city: "seoul3"},
    {name:"G", city: "seoul4"},
    
]

let oGuest = {};
console.log(oGuest);
guestArr.forEach(ele => {
    if(!oGuest[ele.city]){ // key값은 유일하기 때문에 key를 가지고 값들을 그루핑 시켜서 만들어 줄 수 있다.
        oGuest[ele.city] = [];
    }

    oGuest[ele.city].push(ele);
})
console.log(oGuest)
console.log("--------------------------------------------");
// let userMap = new Map(); // key와 value를 가지고 있는 함수 
// userMap.set("name", "Dongkwan");
// userMap.set("email", "sunilair@naver.com");
// userMap.set("phone", "010-9481-0567");
// userMap.set(1, "1123323");
// console.log("name", userMap.get("name"));



console.log(mapGuest)
// map은 키에 숫자 스트링 상관없이 들어 갈 수 있다. 심지어 변수도 하지만 object는 넣지 못한다.