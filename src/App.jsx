import './App.css';
import React, { useEffect, useState } from 'react';
import Todos from './component/Todo'

// 아이디값
let id = 0;

function App() {
  
  const [todo, SetTodo] = useState({id: id, isDone: false})
  const [todos, SetTodos] = useState([])
  
  /**
   * input tag에서 입력 이벤트가 발생할 경우 동작하는 함수
   * @param {*} event 
   */
  function iptChangeEventHandler(e) {
    if(e.target.id === 'titleIpt'){
      // TASK Input 태그에서 입력 이벤트 발생 시
      SetTodo({...todo, title: e.target.value})
    }else{
      // CONTENT Input 태그에서 입력 이벤트 발생 시
      SetTodo({...todo, body: e.target.value})
    }
  }

  /**
   * 추가버튼을 눌렀을 때 동작하는 함수
   * @param {*} event 
   */
  function addBtnClickEventHandler(e) {
      if(document.getElementById('titleIpt').value == '' ||document.getElementById('bodyIpt').value =='' ){
        alert("값을 입력해주세요.")
      }else{
        todos.push(todo)
        SetTodos([...todos])
      }
      id = id+1;
      SetTodo({...todo, id: id, isDone: false, title:'', body:''})
  }

  /**
   * 완료, 취소, 삭제 버튼을 눌렀을때 동작하는 함수
   * @param {*} event 
   */
  function cardBtnClickEventhandle(e) {
    let btnFlg = e.target.innerText  // 완료, 취소, 삭제 값을 가진다.        
    let todoId = e.target.id // 해당 todo의 아이디값을 가져온다. 

    if(btnFlg ==='삭제'){
      SetTodos([...todos.filter((item)=>(item.id != todoId))])
    }else if(btnFlg !== '삭제'){
      // 취소 또는, 완료 이므로 기존의 상태값을 반대값으로 변경만 해주면 된다.
      // 맵 전체를 순회하면서 아이디가 선택한 카드의 아이디와 일치하면 상태값을 변경
      // 아니라면 기존의 상태값을 그대로 유지
      todos.map(function(item){
        item.id == todoId?item.isDone = !item.isDone:item.isDone = item.isDone
      })
      SetTodos([...todos])
    }
  }

  return (
    <div className="App">
      <div className="App-Header">MY TODO LIST</div>
      <div className="create-div">
        <label>TASK</label><input id="titleIpt" type="text" onChange={iptChangeEventHandler} value={todo.title}></input>
        <label>TASK CONTENT</label><input id="bodyIpt" type="text" onChange={iptChangeEventHandler} value={todo.body}></input>
        <button onClick={addBtnClickEventHandler}>추가</button>
      </div>
      <div className="select-div">
        <div className="header">Working</div>
        <div className="cards working">
          <Todos todos={todos} cardBtnClickEventhandle={cardBtnClickEventhandle} area="workingZoen"/>
        </div>

        <div className="header">Done</div>
        <div className="cards done">
          <Todos todos={todos} cardBtnClickEventhandle={cardBtnClickEventhandle} area="doneZoen"/>
        </div>

      </div>
    </div>
  );
}

export default App;
