import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import PageNotFound from './PageNotFound';

const Router = () =>{
    return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path ="/" element={<Home/>}/>
                        <Route exact path ="/fdasfasfd" element={<Home/>}/>
                        <Route exact path ="/fdasfasfd/employees" element={<Employee/>}/>
                        <Route exact path ="/fdasfasfd/add" element={<AddEmployee/>}/>
                        <Route exact path ="/fdasfasfd/edit/:employeeId" element={<AddEmployee/>}/>
                        <Route exact path ="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            )
    }
    
    export default Router;