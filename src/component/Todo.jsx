import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodo,  toggleTodo} from '../redux/modules/todoReduser'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";

const StTodo = styled.div`
  margin : 5px 0px 5px 0px;
  width : 250px;
  height : 150px;
  border : 1px solid blueviolet;
  background-color: whitesmoke;
  color : #555;
  border-radius : 5px;
`

const StTitle = styled.div`
    margin : 10px;
    color : #111;
    font-weight: 900;
    border-radius : 5px;
`

const StBody = styled.div`
    height: 35%;
`

const StBtns = styled.div`
    color : #444;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
  

const StBtn = styled.button`
    border: solid 3px blueviolet;
    background-color: blueviolet;
    font-size: large;
    text-decoration: none;
    border-radius: 8px;
    width: 50px;
    padding: 5px;
    margin: 10px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &:hover{
        border: solid 3px #282c34;
        background-color: #282c34; 
        color: white;
    }
`

const Todo = ({ area }) => {

    /** 스토어에 접근해서 값을 읽어보자 */
    const todos = useSelector((state) => {
        console.log("todo 컴포넌트에서!. 스토어 접근후 가져온값 > ", state.todoReducer.todoList)
        return state.todoReducer.todoList
    })

    /** 컴포넌트의 요청정보를 스토어로 전달해줄 디스패처를 불러온다 */
    const dispatch = useDispatch()

    /**
     * 완료, 취소, 삭제 버튼을 눌렀을때 동작하는 함수
     * @param {*} event 
     */
    function cardBtnClickEventhandle(e) {
        let btnFlg = e.target.innerText  // 완료, 취소, 삭제 값을 가진다.        
        let todoId = e.target.id // 해당 todo의 아이디값을 가져온다. 

        if (btnFlg === '삭제') {
            dispatch(deleteTodo(todoId))
        } else if (btnFlg == '완료' || btnFlg == '취소') {
            dispatch(toggleTodo(todoId))
        } else {
            dispatch(selectTodo())
        }
    }

    const navigate = useNavigate()
    const location = useLocation()
    const param = useParams()


    // todos.isDone 값에 따라 리턴되는 배열을 달리한다.
    return (
        <>
            {
                todos.filter((item) => {
                    return area == 'workingZoen' ? item.isDone == false : item.isDone == true
                }).map((item) => {
                    return (
                        <StTodo key={item.id}>
                            
                            <StTitle>{item.title}</StTitle>
                            <StBody>{item.body}</StBody>
                            <StBtns>
                                <StBtn onClick={()=>{navigate('/details/'+item.id)}} >상세</StBtn>
                                <StBtn onClick={cardBtnClickEventhandle} id={item.id}>삭제</StBtn>
                                <StBtn onClick={cardBtnClickEventhandle} id={item.id}>{area == 'workingZoen' ? '완료' : '취소'}</StBtn>
                            </StBtns>
                        </StTodo>
                    )
                })
            }
        </>
    )
}

export default Todo;