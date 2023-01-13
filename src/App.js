import Navber from './components/Navber';
import './input.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Navber/> <Home/></>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>

    </div>
  );
}

export default App;
