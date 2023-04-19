import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from '../pages/Details'
import TodoList from '../component/TodoList'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<TodoList/>}/>
                <Route path ="details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
} 

export default Router