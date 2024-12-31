import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import Homepage from "./views/Homepage";
import Registerpage from "./views/Registerpage";
import Loginpage from "./views/Loginpage";
import Dashboard from "./views/Dashboard";
import Navbar from "./views/Navbar";
import Todo from "./views/Todo";
import Message from "./views/Message";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/inbox" element={<PrivateRoute component={Message} />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
