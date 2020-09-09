const clockContainer = document.querySelector(".js-clock"); // document안에 div가 있고 js-clock이 있으니까 사용가능
const clockTitle = clockContainer.querySelector("h1"); // clockContainer 안에 h1태그가 있다. 그래서 가져다가 쓸 수 있다. 부모 자식 관계?

const getTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
    
}

const init = () => {
    getTime();
    setInterval(getTime,1000)
    
}

init();