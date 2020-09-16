import React from 'react';

function Food({name,image}) { // props가 object 그니까 데이터베이스 하나의 이름 data에서 꺼내온다고 생각하면 된다. 
  console.log(); // props.favorite 와 {favorite}은 같은거다 
  return <div>
    <h2>I like {name}</h2>
    <img src = {image}/>

  </div>
};
const foodILike = [
  {
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },

  {
    name : 'bibimbap',
    image : "https://user-images.githubusercontent.com/61861809/93076641-9d37f580-f6c2-11ea-9e6a-ac4978a87808.jpg"
  },

  {
    name : 'background',
    image : "https://user-images.githubusercontent.com/61861809/93076685-acb73e80-f6c2-11ea-8948-24b64d643a9f.jpg"
  },

  {
    name : "background2",
    image : "https://user-images.githubusercontent.com/61861809/93076774-cfe1ee00-f6c2-11ea-90d7-b4d83c6190d1.jpg"
  }
];


function App() {
  return ( 
    <div>
      
      {foodILike.map(dish =>  <Food name = {dish.name} image = {dish.image}/>)}
        </div>
      // 근데 이렇게 하면 음식 추가해줄때 마다 일일히 추가시켜줘야해 그래서 이건 비효율적이다.
  ); // 저기 favorite 김치 처럼 객체도 보낼 수 있고 배열도 보낼 수 있다 화면간 이동이나 컴포넌트한테 그 데이터를 줄라면 저렇게 쓰면 될 것 같다.
}

export default App;

//컴포넌트는 html을 반환하는 함수 
