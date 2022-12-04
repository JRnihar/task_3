import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attendance from './Components/Attendance';
import Login from './Components/Login';
import SignUp1 from './Components/SignUp1';
import SignUp2 from './Components/SignUp2';
import SignUp3 from './Components/SignUp3';

function App() {
  return (
    <div >
      <Routes>

        <Route path='/singup' element={<SignUp1></SignUp1>}></Route>
        <Route path='/singup2' element={<SignUp2></SignUp2>}></Route>
        <Route path='/singup3' element={<SignUp3></SignUp3>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/attendance' element={<Attendance />}></Route>
      </Routes>
    </div>
  );
}

export default App;
