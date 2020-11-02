import React, { useState } from "react";
import UserContext from "./context/userContext";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [token, setToken] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <UserContext.Provider
      value={{ token, fullName, setToken, setFullName }}
    >
      <div className="App">
        <h1>Hello world</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Login />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Welcome />
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
