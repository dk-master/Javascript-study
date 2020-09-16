import React from 'react';
import PropTypes from "prop-types";

// const foodILike = [
//   {
//   id : 1,
//   name: "Kimchi",
//   image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  
//   },

//   {
//     id : 2,
//     name : 'bibimbap',
//     image : "https://user-images.githubusercontent.com/61861809/93076641-9d37f580-f6c2-11ea-9e6a-ac4978a87808.jpg",
  
//   },

//   {
//     id : 3,
//     name : 'background',
//     image : "https://user-images.githubusercontent.com/61861809/93076685-acb73e80-f6c2-11ea-8948-24b64d643a9f.jpg",
    
//   },

//   {
//     id : 4,
//     name : "background2",
//     image : "https://user-images.githubusercontent.com/61861809/93076774-cfe1ee00-f6c2-11ea-90d7-b4d83c6190d1.jpg",
   
//   }
// ];
// function Food({name,image}) { // props가 object 그니까 데이터베이스 하나의 이름 data에서 꺼내온다고 생각하면 된다. 
//   console.log(); // props.favorite 와 {favorite}은 같은거다 
//   return <div>
//     <h2>I like {name}</h2>
//     <img src = {image} alt ={name}/>
//   </div>
// };

// // Food.propTypes = {
// //   name : propTypes.string.isRequired,
// //   picture : propTypes.string.isRequired,
// //   rating : propTypes.string.isRequired
// // };


//  /* function renderFood(dish) {
//     return <Food name = {dish.name} image={dish.image} />
//   }*/  // 이런식으로 함수로 뺄 수도 있다. 그리고 이걸 다르게 뭐..  

// function App() {
//   return ( 
//     <div>
      
//       {foodILike.map(dish =>  <Food key = {dish.id} name = {dish.name} image = {dish.image} />)} 
//         </div>
//       // 근데 이렇게 하면 음식 추가해줄때 마다 일일히 추가시켜줘야해 그래서 이건 비효율적이다.
//   ); // 저기 favorite 김치 처럼 객체도 보낼 수 있고 배열도 보낼 수 있다 화면간 이동이나 컴포넌트한테 그 데이터를 줄라면 저렇게 쓰면 될 것 같다.
// }


class App extends React.Component {
     // react는 자동적으로 redner메소드를 실행한다 그래서 화면에 보여준다... 그게 리액트다
  state = {
    count : 0
  };

  add = () => {
    console.log("add")
  } 

  minus = () => {

  }
  render() {
  return( <div>
    <h1>The number is : {this.state.count}</h1>
  <button onClick={this.add}>Add</button>
  <button onClick={this.minus}>Minus</button></div>
  );
   // 버튼엔 onClick이라는 prop이 default로 존재한다
}

}
export default App;

// 강의 컴포넌트 하나 끝날때마다 맨밑에 주석으로 남겨놓자
//컴포넌트는 html을 반환하는 함수 !!!!
// props를 어던 컴포넌트에 넘겨줬는데 그 컴포넌트는 받았지만 확인할수 있는 방법이 필요하다(우리가 원하는 props이 우리가 갖고 있는 props인지 체크하는 방법)