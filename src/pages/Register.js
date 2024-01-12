import { useState } from "react";
import Input from "../components/ui/Input";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const user = {
        firstName,
        lastName,
        email,
        password,
        username,
      };

      const registerUser = await axios.post(
        "https://auth-api-olive.vercel.app/api/register",
        user,
        {
          withCredentials: true, // Tokenni cookie-ga saqlash uchun
        }
      );
      console.log(registerUser);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <div className="container py-3">
      <h1>{loader ? "Loading..." : null}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={"FirsName"}
          state={firstName}
          setState={setFirstName}
        />
        <Input
          placeholder={"LastName"}
          state={lastName}
          setState={setLastName}
        />
        <Input
          placeholder={"Email"}
          state={email}
          setState={setEmail}
          type={"email"}
        />
        <Input
          placeholder={"Password"}
          state={password}
          setState={setPassword}
          type={"password"}
        />
        <Input
          placeholder={"Username"}
          state={username}
          setState={setUsername}
        />
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}

export default Register;
