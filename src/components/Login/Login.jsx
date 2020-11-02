import React, { useContext, useState } from "react";
import UserContext from "../../context/userContext";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Mock API call
    // When success returns
    const data = {
      token: "hgshasdf7asdfuj",
      fullName: "Jonathan Watson",
    };

    user.setFullName(data.fullName);
    user.setToken(data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={emailAddress}
          name="emailAddress"
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
