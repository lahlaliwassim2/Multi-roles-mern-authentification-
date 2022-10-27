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
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="bg-light" style={{height: "100vh"}}>

      <Navbar />
      <Routes>
       
        <Route path="/" element={<Register />}/>
        <Route path="/profil" element={<Profil />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />}  />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </div>
  </BrowserRouter >
  
  );
}

export default App;
