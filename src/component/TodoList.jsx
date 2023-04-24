import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todo'
import { crateTodo, updateTodo } from '../redux/modules/todoReduser'
import * as comm from '../styles/styles'

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

  return (
    <comm.Body>
      <comm.Header>MY TODO LIST</comm.Header>
      <comm.InnerDiv>
        <comm.InputLabel>TASK</comm.InputLabel><comm.StIpt id="titleIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.title}></comm.StIpt>
        <comm.InputLabel>TASK CONTENT</comm.InputLabel><comm.StIpt id="bodyIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.body}></comm.StIpt>
        <comm.StBtn onClick={addBtnClickEventHandler}>추가</comm.StBtn>
      </comm.InnerDiv>
      <div className="select-div">
        <comm.StAraa>Working</comm.StAraa>
        <comm.StCardsDiv>
          <Todos area="workingZoen" />
        </comm.StCardsDiv>
        <comm.StAraa>Done</comm.StAraa>
        <comm.StCardsDiv>
          <Todos area="doneZoen" />
        </comm.StCardsDiv>

      </div>
    </comm.Body>
  );
}

export default TodosList;
