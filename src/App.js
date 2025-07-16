import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Checkout from "./screens/Checkout";
import Success from "./screens/Success";  // <-- import Success screen
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // this runs when the component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
    
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} /> {/* <-- new success route */}
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
