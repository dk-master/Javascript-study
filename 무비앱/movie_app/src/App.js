import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail"; 
import Navigation from "./components/Navigation"
function App() {
  return <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/> 
    <Route path="/about" component={About}/> 
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
} // 리액ㅌ으 라우터에  url 설정하려면 

export default App;

/*
만약 import About as Potato "./routes/About"; 이라고 위에 해주면  About 이라고 굳이 할 필요 없다.
exact = {true} 이거아니면 랜더링하지 않겠다

Link를 쓰고 있다면 네비게이션이든 뭐든 HashRouter안에 넣어줘야한다 url들을 -> 링크들

모든 라우터들은 props를 가진다 증명하기 위해서 about.js에서 매개변수로 props넣은담에  console.log로 한번 찍어봐라 나오지?
*/