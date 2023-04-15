
const Todo = ({ todos, todoState, cardBtnClickEventhandle }) => {
    if (todoState == "working") {
        return (
            <>
                {
                    todos.filter((todo) => {
                        return todo.isDone == false && todo.title !=''
                    }).map((todo, idx) => {
                        return (<div key={todo.id} className="task">
                            <div className="task-title">{todo.title}</div>
                            <div className="task-body">{todo.body}</div>
                            <div className="task-btns"><button onClick={cardBtnClickEventhandle} id={"del" + todo.id}>삭제</button><button onClick={cardBtnClickEventhandle} id={"dne" + todo.id}>완료</button></div>
                        </div>

                        )
                    })
                }
            </>
        )
    } else {
        return (
            <>
                {
                    todos.filter((todo) => {
                        return todo.isDone == true && todo.title !=''
                    }).map((todo, idx) => {
                        return (<div key={todo.id} className="task">
                            <div className="task-title">{todo.title}</div>
                            <div className="task-body">{todo.body}</div>
                            <div className="task-btns"><button onClick={cardBtnClickEventhandle} id={"del" + todo.id}>삭제</button><button onClick={cardBtnClickEventhandle} id={"Wrk" + todo.id}>취소</button></div>
                        </div>

                        )
                    })
                }
            </>
        )
    }
}

export default Todo;