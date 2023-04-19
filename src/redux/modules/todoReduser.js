/**
 * todoReducer
 * 
 */

// 액션 타입
const CRATE_TODO = "CRATE_TODO"     // TODO 추가
const DELETE_TODO = "DELETE_TODO"   // TODO 삭제
const UPDATE_TODO = "UPDATE_TODO"   // TODO 수정 (제목, 내용)
const SELECT_TODO = "SELECT_TODO"   // TODO 상세보기
const TOGGLE_TODO = "TOGGLE_TODO"   // TODO 상태변경

// ActionCreater
export const crateTodo = (data) => {
    return {
        type: CRATE_TODO,
        payload: data
    }
}

export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload : data,
    }
}

export const updateTodo = (data) => {
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

export const selectTodo = () => {
    return {
        type: SELECT_TODO,
    }
}

export const toggleTodo = (data) => {
    return {
        type: TOGGLE_TODO,
        payload : data
    }
}



// 초기상태값
const initState = {
    todo : {
        id: 0,
        isDone: false,
        title:'',
        body:''
    },
    todoList : []
}

/**
 * 리듀서 : state를 액션의 타입에 맞추어서 변화를 일으키는 함수
 * 액션 : state를 어떻게 변화시킬지 타입과 내용을 기록한것
 * @param {} initState 
 * @param {} action 
 */


const todoReducer = (state = initState, action) => {
    console.log("0. state:",state, ", state.id:",state.id)
    switch (action.type) {
        case CRATE_TODO:
            return {
                todo : {
                    id: state.todo.id + 1,
                    isDone: false,
                    title: '',
                    body: ''
                },
                todoList : [...state.todoList, state.todo]
            }
        case DELETE_TODO:       
            state.todoList = state.todoList.filter((x)=>{
                return x.id != action.payload
            })
            return {
                todo : {
                    id: state.todo.id,
                    isDone: false,
                    title: '',
                    body: ''
                },
                todoList : state.todoList
            }
        case UPDATE_TODO:
            return {
                todo : {
                    id: state.todo.id,
                    title: action.payload.title,
                    body: action.payload.body,
                    isDone : false
                },
                todoList : state.todoList
            }
        case TOGGLE_TODO:
            state.todoList.map((x) => {
                    if(x.id == action.payload){
                        x.isDone = !x.isDone
                    }
                }
            );
            return {
                todo : {
                    id: state.todo.id,
                    isDone: false,
                    title: '',
                    body: ''
                },
                todoList : [...state.todoList]
            }
        case SELECT_TODO:
            // TODO 상세보기, 상세보기 하면서 상태값 변경 (리스트는 그대로 입력값은 초기값으로
            return {
                todo : {
                    id: state.todo.id,
                    isDone: false,
                    title: '',
                    body: ''
                },
                todoList : state.todoList
            }

        default:
            return {
                todo : {
                    id: state.todo.id,
                    isDone: false,
                    title: '',
                    body: ''
                },
                todoList : []
            }


            
            
    }
}

export default todoReducer