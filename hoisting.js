// logMessage();
// sumNumbers();

// function logMessage() {
//     return 'worked';
// }

// var sumNumbers = function() {
//     return 10 + 20;
// }

// 함수 표현식을 모르더라도 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지할 수 있다.

// function tabsHandler(index) {
//     return function tabClickEvent(event) {
//         console.log(index);
//     }
// }

// var tabs = document.querySelectorAll('.tab');
// var i;

// for (i = 0; i< tabs.length; i+=1){
//     tabs[i].onclick = tabsHandler(i);
// }


// for (var i = 0; i< 100; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i*100);
// };

function fetchItems() {
    return new Promise(function(resolve,reject){
        var items = [1,2,3];
        resolve(items);
    });
}