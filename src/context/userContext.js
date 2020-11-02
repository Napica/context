import React from "react";

const UserContext = React.createContext({
  token: "",
  fullName: "",
  setToken: () => {},
  setFullName: () => {},
});

export default UserContext;
