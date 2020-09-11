const form = document.querySelector(".js-form");
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

const handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue)
    paintGreeting(currentValue)
    saveName(currentValue)
}
const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

const saveName = (text) => {
    localStorage.setItem(USER_LS, text);
}
const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

const initGreeting = () => {
    loadName();
}
 // DB에서도 그 URL로 (라우터)로 접근해야 정해진 그 데이터를 얻을 수 있다. 그 URL에서만 가져올수 있지
initGreeting();