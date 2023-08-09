import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '유니섹스 코트 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{글제목[i]}
                <span onClick={() => {따봉변경(따봉 + 1) }}>👍</span> {따봉}
                </h4>
              <p>2월 18일 발행</p>

            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}>삭제</button>

            </div>)
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>
        
      {
        modal === true ? <Modal title={title} 글제목={글제목} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button >글수정</button>
    </div>
  )
}

export default App;
