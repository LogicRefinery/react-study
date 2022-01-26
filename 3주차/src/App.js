import React,{ useState } from "react";
import ScrollBox from "./components/ScrollBox";

//첫번째ㅔ
function App() {
  // const [messege, setMessege] = useState("기본값");
  //useState() 함수는 인자를 하나 받는다.
  //받은 인자는 구조분해 활당에 첫번째 인자에 원시값으로 할당된다.
  //구조분해 할당에 두번째 인자는 함수이며 setMessage() 함수가 된다.
  //setMessage() 는 이벤트 발생시 인자 값으로 어떠한 값을 넣어주면 message의 값과 다르다면 재 랜더링을 한다.

  // console.log(typeof(message)); string 
  // console.log(typeof(setMessege)); function
    const [messege, setMessege] = useState("기본값");
    const onClickEnt = () =>{
      setMessege('어서오세요');
    }
    const onClickLev = () =>{
      setMessege('안녕히가세요');
    }    

  
  const [color, setColor] = useState('black');
  const printConsole = (e) =>{
    console.log(e.target.value);
    setMessege(e.target.value);
  }
  const initConsole = (msg) =>{
    console.log(msg);
    alert(`전송된 값 : ${msg}`);
    setMessege = '';
  }

  return (
    <div className="App">
      <h1>이벤트 연습</h1>
      <h2>{messege}</h2>
      <button onClick={onClickEnt}>입장</button>
      <button onClick={onClickLev}>퇴장</button>
      <input type="text" placeholder="아무 값이나 입력하세요" onChange={printConsole} />



    </div>
  );
}

export default App;
