import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


const App=()=> {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
    </>
  )
}

export default App
