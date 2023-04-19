import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todo'
import { crateTodo, deleteTodo, updateTodo, selectTodo } from '../redux/modules/todoReduser'

// 아이디값
let id = 0;

function TodosList() {

  /** 스토어에 접근해서 값을 읽어보자 */
  const todoList = useSelector((state) => {
    console.log("1. 스토어 접근후 가져온값 > ", state.todoReducer)
    return state.todoReducer
  })

  /** 컴포넌트의 요청정보를 스토어로 전달해줄 디스패처를 불러온다 */
  const dispatch = useDispatch()
  

  /**
   * 추가버튼을 눌렀을 때 동작하는 함수
   * @param {*} event 
   */
  const addBtnClickEventHandler = (e) =>{
      dispatch(crateTodo())
  }

  /**
   * input tag에서 입력 이벤트가 발생할 경우 동작하는 함수
   * @param {*} event 
   */
  function iptChangeEventHandler(e) {
    if(e.target.id === 'titleIpt'){
      dispatch(updateTodo({title: e.target.value, body: todoList.todo.body, isDone: todoList.todo.isDone}))
    }else{
      dispatch(updateTodo({title: todoList.todo.title, body: e.target.value, isDone: todoList.todo.isDone}))
    }
  }

  /**
   * 완료, 취소, 삭제 버튼을 눌렀을때 동작하는 함수
   * @param {*} event 
   */
  function cardBtnClickEventhandle(e) {
    let btnFlg = e.target.innerText  // 완료, 취소, 삭제 값을 가진다.        
    let todoId = e.target.id // 해당 todo의 아이디값을 가져온다. 

    if (btnFlg === '삭제') {
      dispatch(deleteTodo())
    } else if (btnFlg == '완료' || btnFlg == '취소') {
      dispatch(selectTodo())
    } else {
      dispatch(selectTodo())
    }
  }

  return (
    <div className="App">
      <div className="App-Header">MY TODO LIST</div>
      <div className="create-div">
        <label>TASK</label><input id="titleIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.title}></input>
        <label>TASK CONTENT</label><input id="bodyIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.body}></input>
        <button onClick={addBtnClickEventHandler}>추가</button>
      </div>
      <div className="select-div">
        <div className="header">Working</div>
        <div className="cards working">
          <Todos area="workingZoen" />
        </div>

        <div className="header">Done</div>
        <div className="cards done">
          <Todos area="doneZoen" />
        </div>

      </div>
    </div>
  );
}

export default TodosList;
