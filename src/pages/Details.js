import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo} from '../redux/modules/todoReduser'

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
        <div>
            <button onClick={() => { navigate(-1) }} >이전으로</button>
            <div>아이디 : {params.id}</div>
            <div>제목 : {todo[0].title}</div>
            <div>내용 : {todo[0].body}</div>
        </div>
    );
}

export default Details;