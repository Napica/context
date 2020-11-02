import React, { useContext } from "react";
import UserContext from "../../context/userContext";

const Welcome = () => {
  const { fullName } = useContext(UserContext);
  return <div>{fullName && <h1>Welcome {fullName}</h1>}</div>;
};

export default Welcome;
