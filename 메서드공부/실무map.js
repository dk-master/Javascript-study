//실무에서 자주 쓰이는 map

const userList = [
    {userId : "1", firstname: "dongkwan", lastname: "Go", yyyymmdd: "19950121", phone: "010-1111-1112", address : "seoul"},
    {userId : "1", firstname: "dongjun", lastname: "Go", yyyymmdd: "19970512", phone: "010-1323-1111", address : "busan"},
    {userId : "1", firstname: "dongho", lastname: "Go", yyyymmdd: "19991111", phone: "010-4444-1111", address : "jeju"},
];

const mon = ['Jan','Feb','Mar','Apr','May','Jun','jul','Aug','Sep','Oct','Nov','Dec']
console.log(mon[parseInt("05")]);
const newUserList = userList.map(idx => ({
    userId:idx.userId, 
    firstName:idx.firstname,
    lastname:idx.lastname,
    yyyymmdd : idx.yyyymmdd,
    year : idx.yyyymmdd.substring(0,4),
    month : idx.yyyymmdd.substring(4,6),
    day: idx.yyyymmdd.substring(6,8),
    usDateFormat: (mon[parseInt(idx.yyyymmdd.substring(4,6))-1] + " " + parseInt(idx.yyyymmdd.substring(6,8)) + "," + idx.yyyymmdd.substring(0,4)),
    fullName: idx.firstname + ' ' +idx.lastname,
    phone: idx.phone, 
    address:idx.address,
}))  // 객체 {} 로 집어넣었으니까 배열 객체로 그대로 나옴

console.log(newUserList) // 이렇게 되면 매번 할 때마다 fullname을 얻으려고 lastname과 firstname을 가져 올 필요가 없이 fullName을 map으로 넣어주면 된다.

//db에 yymmdd 데이터 타입 형태로 저장된것이 아니라 문자 타입으로 개발해야할 경우도 많이 생긴다. 년도 따로, 월 따로 일 따로

// 맵은 기존의  DB데이터를 가지고 새로운 형태의 필드들을 추가한 배열을 만드는데 도움을 준다 !!!

//공부 할때 이 기능은 어떤때 쓰일지 생각을 해봐야한다. 실제 개발할 때 정확히 써먹을 수 있다.