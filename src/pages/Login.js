import React, { useState } from "react";
import Input from "../components/ui/Input";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const login = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });

    console.log(login);
  };

  return (
    <form className="container py-4" onSubmit={handleSubmit}>
      <Input placeholder={"Email"} state={email} setState={setEmail} />
      <Input placeholder={"Password"} state={password} setState={setPassword} />
      <button className="btn btn-success">Send</button>
    </form>
  );
}

export default Login;
