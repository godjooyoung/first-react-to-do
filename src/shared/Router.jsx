import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from '../pages/Details'
import Main from '../pages/Main'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Main/>}/>
                <Route path ="details/:id" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
} 

export default Router