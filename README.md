<div style="display:flex; align-items: center;">
<img src="https://user-images.githubusercontent.com/58963027/232326249-c3dc4e87-a8e2-4dd8-84bc-a42e82e556d0.png" align="left" width="30px"/>
<h1>first-react-to-do!</h1></div>
<h3>리액트로 만든 첫번째 todo 입니다.</h3>
<h3>구현 화면</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/58963027/232555325-0cbaba1a-d6e5-4828-bbc0-6b1f1469e7ee.gif"></p>
<p align="center">내용 입력 후 추가 버튼을 클릭하면 TODO가 추가 됩니다.</p>
<p align="center">TODO 완료 버튼을 누르면 완료로 처리되고 아래의 영역으로 이동합니다.</p>
<p align="center">완료된 TODO의 취소 버튼을 누르면 완료되지않음 상태로 위쪽 영역으로 이동합니다.</p>
<p align="center">삭제 버튼을 클릭하면 등록된 TODO가 삭제됩니다.</p>
</div>

<h3>컴포넌트 분리</h3>
<ul>
<li>TodoList.jsx - 투두리스트를 TodoList.jsx로 분리하였습니다.</li>
<li>Todo.jsx - 반복되는 투두 카드 목록을 Todo.jsx로 분리하였습니다.</li>
</ul>

```javascript
// components/TodoList.jsx
/** 생략 */
      <div className="select-div">
        <div className="header">Working</div>
        <div className="cards working">
          <Todos todos={todos} cardBtnClickEventhandle={cardBtnClickEventhandle} area="workingZoen"/>
        </div>
        <div className="header">Done</div>
        <div className="cards done">
          <Todos todos={todos} cardBtnClickEventhandle={cardBtnClickEventhandle} area="doneZoen"/>
      </div>
/** 생략 */
```

```javascript
// components/Todo.jsx
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
```
