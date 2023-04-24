import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo} from '../redux/modules/todoReduser'
import * as comm from '../styles/styles'

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
        <comm.DetailMain>
            <comm.DetailBtn onClick={() => { navigate(-1) }}>이전으로</comm.DetailBtn>
            <comm.DetailInner><comm.DetailTitleDiv>번 호</comm.DetailTitleDiv>{params.id}</comm.DetailInner>
            <comm.DetailInner><comm.DetailTitleDiv>제 목</comm.DetailTitleDiv>{todo[0].title}</comm.DetailInner>
            <comm.DetailInner><comm.DetailTitleDiv>내 용</comm.DetailTitleDiv>{todo[0].body}</comm.DetailInner>
        </comm.DetailMain>
    );
}

export default Details;