
const Todo = ({ todos, cardBtnClickEventhandle, area}) => {
    // todos.isDone 값에 따라 리턴되는 배열을 달리한다.
    return (
        <>
        {
            todos.filter((item) => {
                return area=='workingZoen'?item.isDone == false:item.isDone == true
            }).map((item) => {
                return (
                <div key={item.id} className="task">
                    <div className="task-title">{item.title}</div>
                    <div className="task-body">{item.body}</div>
                    <div className="task-btns">
                        <button onClick={cardBtnClickEventhandle} id={item.id}>삭제</button>
                        <button onClick={cardBtnClickEventhandle} id={item.id}>{area=='workingZoen'?'완료':'취소'}</button>
                    </div>
                </div>
                )
            })
        }
    </>
    )
}

export default Todo;