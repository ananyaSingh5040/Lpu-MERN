import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { useState } from "react";

const App = () => {
  const [currUser, setCurrUser] = useState({
    isLoggedIn: false,
    fullName: "Guest",
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              currUser.isLoggedIn ? <HomePage /> : <Navigate to="/login" />
            }
          />
          {/* Navigate comp redirects you to the given route */}
          <Route
            path="/login"
            element={currUser.isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={currUser.isLoggedIn ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
