import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, passowrd });
  };

  return (
    <div>
      <h2>Log In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      {" "}
      <input
        type="text"
        value={passowrd}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passowrd"
      />
      {" "}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
