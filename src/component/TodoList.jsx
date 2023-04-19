import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todo'
import { crateTodo, updateTodo } from '../redux/modules/todoReduser'
import styled from "styled-components";
const StApp = styled.div`
  text-align: center;
  min-width: 800px;
  max-width: 1200px;
  background-color: #282c34;
  margin : 0 auto;
  color : whitesmoke;
`
const StDiv = styled.div`
  background-color: #282c34;
  height: 50px;
  color: #61dafb;
  font-size: large;
  font-weight: 900;
  display: flex;
  align-items : center;
  margin: 0;
  justify-content: right;
  color :whitesmoke
`
const StIpt = styled.input`
  text-decoration: none;
  height: 30px;
  width: 250px;
  margin: 0px 5px 0px 5px;
`
const StHeader = styled.div`
  color: #61dafb;
  font-size: xx-large;
  font-weight: 900;
  height: 80px;
  width : 100%;
  display: flex;
  align-items : center;
  padding: 5px;
  justify-content: center;
  color :whitesmoke
`

const StP = styled.label`
text-decoration: none;
  height: 30px;
  width: 180px;
  text-align: right;  
`

const StBtn = styled.button`
  border: solid 3px blueviolet;
  background-color: blueviolet;
  font-size: large;
  text-decoration: none;
  border-radius: 8px;
  width: 50px;
  padding: 5px;
  margin: 10px 30px 10px 10px;
  color: white;
  &:hover {
    border: solid 3px white;
    background-color: white; 
    color: #282c34;
  } 
`

const StAraa = styled.div`
  height : 30px;
  margin : 5px 0px 5px 30px;
  font-size: large;
  font-weight: 900;
  text-align: left;
`

const StCardsDiv = styled.div`
display : flex;
  flex-direction: row;
  column-gap : 10px;
  flex-wrap: wrap;
  padding : 10px 30px 10px 30px;
`

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
    <StApp>
      <StHeader>MY TODO LIST</StHeader>
      <StDiv>
        <StP>TASK</StP><StIpt id="titleIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.title}></StIpt>
        <StP>TASK CONTENT</StP><StIpt id="bodyIpt" type="text" onChange={iptChangeEventHandler} value={todoList.todo.body}></StIpt>
        <StBtn onClick={addBtnClickEventHandler}>추가</StBtn>
      </StDiv>
      <div className="select-div">
        <StAraa>Working</StAraa>
        <StCardsDiv>
          <Todos area="workingZoen" />
        </StCardsDiv>

        <StAraa>Done</StAraa>
        <StCardsDiv>
          <Todos area="doneZoen" />
        </StCardsDiv>

      </div>
    </StApp>
  );
}

export default TodosList;
