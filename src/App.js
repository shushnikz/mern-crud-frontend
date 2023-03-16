import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { AddUser } from './components/AddUser';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AllUsers } from './components/AllUsers';
import { EditUser } from './components/EditUser';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adduser" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
        <Route path="/allusers" element={<ProtectedRoute><AllUsers /></ProtectedRoute>} />
        <Route path="/edituser/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (localStorage.getItem("mern-crud-user")) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }
}
