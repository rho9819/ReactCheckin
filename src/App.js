import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Login from './Page/Login/Login';
import Home from './Page/Home/Home'
import Map from './Component/Map/map.jsx'



function App() {  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
