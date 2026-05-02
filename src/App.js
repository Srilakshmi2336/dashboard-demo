import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Routes>

       <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" 
       element={<Login setIsLoggedIn={setIsLoggedIn} />}/>

         <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
    </Routes>
    </BrowserRouter>
  );
}

export default App