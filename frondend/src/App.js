import './App.css';
import { BrowserRouter,Routes,Route,Navigate, Router } from 'react-router-dom';

import Home  from './pages/Home';
import { RouterProvider } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';


function Logout(){
  localStorage.clear()
  return <Navigate to='./login'/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}
function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/> */}
      <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
