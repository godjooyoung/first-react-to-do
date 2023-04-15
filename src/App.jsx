import './App.css';
import React, { useEffect, useState } from 'react';
import Todos from './component/Todo'

function App() {

  let todo = {
    id: 0,
    title: '리액트 과제 제출하기',
    body: '꼭 제출하자..',
    isDone: true
  }
  let todo2 = {
    id: 1,
    title: 'TIL 밀리지 않고 쓰기',
    body: '새로 알게된게 많아서 양이 많다.',
    isDone: false
  }

  const [title, SetTitle] = useState('')
  const [body, SetBody] = useState('')
  const [todos, SetTodos] = useState([todo, todo2])
  const [cnt, SetCnt] = useState(1)

  

  // 비동기로 처리되는 useState 때문에 use에픽트훅 사용
  useEffect(() => {
      console.log("최촤이님")
      todos.push({ id: cnt, title: title, body: body, isDone: false })
      SetTodos([...todos])
      SetTitle('')
      SetBody('')
      console.log(">>>>>>",cnt)  
  }, [cnt]);

  function iptChangeEventHandler(e) {
    if (e.target.id === 'titleIpt') {
      SetTitle(e.target.value)
    } else {
      SetBody(e.target.value)
    }
  }

  function addBtnClickEventHandler(e) {
      if(document.getElementById('titleIpt').value == '' ||document.getElementById('bodyIpt').value =='' ){
        alert("내용을 입력해 주세요.")
      }else{
        SetCnt(cnt+1)
      }
      
  }

  function cardBtnClickEventhandle(e) {    
    let btnFlg = e.target.innerText
    let todoId = e.target.id.substring(3,e.target.id.length)

    if(btnFlg ==='삭제'){
      console.log("삭제태그", todoId)
      SetTodos([...todos.filter((todo)=>(todo.id != todoId))])
    }else if(btnFlg !== '삭제'){
      todos.map(function(todo){
        if(todo.id == todoId){
          todo.isDone = !todo.isDone
        }else{
          todo.isDone = todo.isDone
        }
      })
      SetTodos([...todos])
    }
  }

  return (
    <div className="App">
      <div className="App-Header">MY TODO LIST</div>
      <div className="create-div">
        <label>TASK</label><input id="titleIpt" type="text" onChange={iptChangeEventHandler} value={title}></input>
        <label>TASK CONTENT</label><input id="bodyIpt" type="text" onChange={iptChangeEventHandler} value={body}></input>
        <button onClick={addBtnClickEventHandler}>추가</button>
      </div>
      <div className="select-div">
        <div className="header">Working</div>
        <div className="cards working">
          <Todos todos={todos} todoState="working" cardBtnClickEventhandle={cardBtnClickEventhandle} />
        </div>

        <div className="header">Done</div>
        <div className="cards done">
          <Todos todos={todos} todoState="done" cardBtnClickEventhandle={cardBtnClickEventhandle} />
        </div>

      </div>
    </div>
  );
}

// function Todos({ todos, todoState, cardBtnClickEventhandle}) {
//   if (todoState == "working") {
//     return (
//       <>
//         {
//           todos.filter((todo) => {
//             return todo.isDone == false
//           }).map((todo, idx) => {
//             return (<div key={todo.id} className="task">
//               <div className="task-title">{todo.title}</div>
//               <div className="task-body">{todo.body}</div>
//               <div className="task-btns"><button onClick={cardBtnClickEventhandle} id={"del" + todo.id}>삭제</button><button onClick={cardBtnClickEventhandle} id={"dne" + todo.id}>완료</button></div>
//             </div>

//             )
//           })
//         }
//       </>
//     )
//   } else {
//     return (
//       <>
//         {
//           todos.filter((todo) => {
//             return todo.isDone == true
//           }).map((todo, idx) => {
//             return (<div key={todo.id} className="task">
//               <div className="task-title">{todo.title}</div>
//               <div className="task-body">{todo.body}</div>
//               <div className="task-btns"><button onClick={cardBtnClickEventhandle} id={"del" + todo.id}>삭제</button><button onClick={cardBtnClickEventhandle} id={"Wrk" + todo.id}>취소</button></div>
//             </div>

//             )
//           })
//         }
//       </>
//     )
//   }
// }

export default App;
