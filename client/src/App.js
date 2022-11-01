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
import NotAcces from './pages/NotAcces';
import AdminRouter from './components/AdminRouter';
import ForceRedirect from './components/ForceRedirect';

function App() {
 /* A variable that is used to check if the user is connected or not. */
  const user = {
    isConnected :false,
    role:"USER"
  }
  return (
    <BrowserRouter>
            <div className="bg-light" style={{height: "100vh"}}>

            <Navbar user={user}/>
  <Routes>
       
          <Route path="/" element={
             <PrivateRouter user={user}>
                <Profil />
             </PrivateRouter>
           }/>

        
          <Route path="/register" element={
            <ForceRedirect user={user}>
              <Register />
            </ForceRedirect>        
          } />
          

         <Route path="/login" element={
           <ForceRedirect user={user}>
               <Login />
           </ForceRedirect>
          }  />


          <Route path="/admin" element={
            <AdminRouter user={user}>
               <Admin />
            </AdminRouter>
     
          } />
   


        <Route path="*" element={<NotFound />}  />
        <Route path="/notacces" element={<NotAcces />}  />
    </Routes>
    </div>
  </BrowserRouter >
  
  );
}

export default App;
