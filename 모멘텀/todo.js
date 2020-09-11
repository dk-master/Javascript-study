const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';
let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // jsonStringfy 이거 자바스크립트 object를 스트링으로 바꿔준다.
}
const paintToDo = (text) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length+1; // 이렇게 id를 줘버리면 문제가생긴다 나중에 지우고 다시 쓸때 글을 그래서 id를 dateTime으로 해주면 좋을것같다.
    span.innerText = text; // 작성한 글 (todoList)
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId // li에 id값 주는법 이따 삭제할때 어떤 li를 삭제해야할지 정하기 위해
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

const handleSubmits = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue)
    paintToDo(currentValue);
    toDoInput.value = ""
}

const loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS); // localStorage에는 자바스크립트 데이터를 저장할 수 없다 오로지 스트링값만 저장가능
    if(loadToDos !== null) {
         // DB에 객체를 보낼 때 json.stringfy로 해서 보내야 스트링값으로 읽히고 DB에서 가져올땐 string -> object로 변환해서 다시 가져와야한다.
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(ele => {
            paintToDo(ele.text);
        })
    }
}

const deleteToDo = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(ele => {
        return ele.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}
const initTodo = () => {
    
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmits)
}

initTodo();