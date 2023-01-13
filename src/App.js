import Navber from './components/Navber';
import './input.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Product from './screens/Product';
import Catagory from './components/Catagory';
import Footer from './components/Footer';
import CatagoryList from './screens/CatagoryList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Navber /> <Catagory /> <Home /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product' element={<> <Navber /> <Product /> </>} />
        <Route path='/catagorylist' element={<> <Navber /> <CatagoryList /> <Footer /> </>} />
      </Routes>

    </div>
  );
}

export default App;
