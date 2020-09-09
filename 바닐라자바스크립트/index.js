//const title = document.getElementById("title");
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "#7f8c8d";
//const btn1 = document.getElementById('click'); // 모바일에서 findbyid  이런거랑 비슷한거같다..

// function handleClick() {
//     //console.log(title.style.color);
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//         console.log(title.style.color)
//     }else {
//         title.style.color = BASE_COLOR;
//         console.log(title.style.color)
//     }
// }

// function handleClick() {
//     //const currentClass = title.className;
//     const hasClass = title.classList.contains(CLICKED_CLASS)

//     if(!hasClass) {
//         //title.className = CLICKED_CLASS;\
//         title.classList.add(CLICKED_CLASS);
//     }
//     else {
//         //title.className = "";\
//         title.classList.remove(CLICKED_CLASS);


//     }   // toggle은 우리가 했던것들의 요약
// } // ->
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);

}
function init () {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // title의 
    console.log("change")
}

init();