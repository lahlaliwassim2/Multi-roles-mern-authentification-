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
import PrivateRouter from './components/PrivateRouter';

function App() {
  const user = {
    isConnected :false
  }
  return (
    <BrowserRouter>
    <div className="bg-light" style={{height: "100vh"}}>

      <Navbar />
      <Routes>
       
        <Route path="/" element={
        <PrivateRouter user={user}>
           <Register />
        </PrivateRouter>
       }/>
        <Route path="/profil" element={
        <PrivateRouter user={user} >

        <Profil />
        </PrivateRouter>
      } />
        <Route path="/admin" element={
        <PrivateRouter user={user}>
             <Admin />
        </PrivateRouter>
     
        } />
        <Route path="/login" element={<Login />}  />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </div>
  </BrowserRouter >
  
  );
}

export default App;
