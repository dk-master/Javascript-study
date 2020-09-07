const user = [ {
    userIdx : "1", userName: "김동관", phone : "010-1111-1111" ,address: "seoul"
},
{
    userIdx : "2", userName: "이망고", phone : "010-1231-1111" ,address: "busan"
},
{
    userIdx : "3", userName: "박망고", phone : "010-3331-1111" ,address: "incheon"
}]

let selectedUserInfo = {};
for(let i =0; i<user.length; i++) {
    if(user[i].userIdx == "2") {
        selectedUserInfo = user[i];
    }
}

console.log(selectedUserInfo)

// 실제 실무에서  filter 쓰이는 용도
// 특정정보만 출력하고 싶을 때 
// 테이블 정보에서 특정 정보만 뽑아 내고 싶을때  ex) userIdx별로 다르니까 근데 sql문으로 해도 댐

let selectedUserInfo2 = user.filter(u => u.userIdx == "2");
console.log(selectedUserInfo2)
