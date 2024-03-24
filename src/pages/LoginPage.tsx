import { FormRow } from "../components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const initialState = { email: "", password: "" };
  const [values, setValues] = useState(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      console.log("please fill out all fields...");
      return;
    }

    const loginUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/v1/auth/login",
          { email, password },
          { withCredentials: true }
        );
        console.log("login successfull", data);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };

    loginUser();
  };

  if (isLoggedIn) {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return (
    <main className="page-100">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>login</h3>
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
        />
        <FormRow
          name="password"
          type="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button type="submit" className="submit-btn">
          Log in
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
