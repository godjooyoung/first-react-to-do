// 중앙 데이터 관리소(Store)설정
// one project one store 
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from '../modules/todoReduser'

// reducer의 묶음들
const rootReducer = combineReducers(
    {
        todoReducer : todoReducer,
    })

// reducer의 묶음으로 store를 만든다.
const stroe = createStore(rootReducer)

export default stroe;