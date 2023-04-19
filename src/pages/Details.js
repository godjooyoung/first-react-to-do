import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo} from '../redux/modules/todoReduser'
import styled from "styled-components";
const StApp = styled.div`
  min-width: 800px;
  max-width: 1200px;
  background-color: #282c34;
  margin : 0 auto;
  color : whitesmoke;
`
const StDiv = styled.div`
  background-color: #282c34;
  height: 100px;
  font-size: large;
  font-weight: 900;
  display: flex;
  align-items : center;
  margin: 0;
  justify-content: space-between;
  color :whitesmoke;
  text-align: center;
  margin: 0px 100px 0px 0px;
`
const StBtn = styled.button`
  border: solid 3px blueviolet;
  background-color: blueviolet;
  font-size: large;
  text-decoration: none;
  border-radius: 8px;
  width: 100px;
  padding: 5px;
  margin: 10px 30px 10px 10px;
  color: white;
  &:hover {
    border: solid 3px white;
    background-color: white; 
    color: #282c34;
  } 
`
const StTitleDiv = styled.div` 
    width : 30%;
    font-size: x-large;
    padding: 10px;
    border-radius: 8px;
    background-color: whitesmoke;
    color:#282c34;
    margin: 10px 30px 10px 50px;
`

function Details() {
    const navigate = useNavigate();
    const params = useParams();

    const todoList = useSelector((state) => {
        return state.todoReducer.todoList
    })

    const dispatch = useDispatch()
    dispatch(selectTodo())
  
    const todo = todoList.filter((todo)=>{
        return todo.id == params.id
    })


    return (
        <StApp>
            <StBtn onClick={() => { navigate(-1) }}>이전으로</StBtn>
            <StDiv><StTitleDiv>번 호</StTitleDiv>{params.id}</StDiv>
            <StDiv><StTitleDiv>제 목</StTitleDiv>{todo[0].title}</StDiv>
            <StDiv><StTitleDiv>내 용</StTitleDiv>{todo[0].body}</StDiv>
        </StApp>
    );
}

export default Details;