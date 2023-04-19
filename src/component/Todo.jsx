import { useDispatch, useSelector } from 'react-redux';
import { crateTodo, deleteTodo, updateTodo, selectTodo,  toggleTodo} from '../redux/modules/todoReduser'

const Todo = ({area }) => {

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


    // todos.isDone 값에 따라 리턴되는 배열을 달리한다.
    return (
        <>
            {
                todos.filter((item) => {
                    return area == 'workingZoen' ? item.isDone == false : item.isDone == true
                }).map((item) => {
                    return (
                        <div key={item.id} className="task">
                            <div className="task-title">{item.title}</div>
                            <div className="task-body">{item.body}</div>
                            <div className="task-btns">
                                <button onClick={cardBtnClickEventhandle} id={item.id}>삭제</button>
                                <button onClick={cardBtnClickEventhandle} id={item.id}>{area == 'workingZoen' ? '완료' : '취소'}</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todo;