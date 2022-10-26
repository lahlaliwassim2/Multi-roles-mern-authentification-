import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
// import Profil from './pages/profil';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Profil from './pages/Profil';
import Login from './pages/Login';
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div class="bg-light" style={{height: "100vh"}}>

      {/* <Navbar /> */}
      <Routes>
       
        <Route path="/" element={<Register />}/>
        <Route path="/profil" element={<Profil />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />}  />
      </Routes>
    </div>
  </BrowserRouter >
  
  );
}

export default App;
