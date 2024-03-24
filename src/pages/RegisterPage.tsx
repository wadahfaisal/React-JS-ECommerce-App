import { FormRow } from "../components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password, confirmPassword } = values;

    if (!name || !email || !password || !confirmPassword) {
      console.log("please fill out all fields...");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      console.log("password dosen't match");
      setIsLoading(false);
      return;
    }

    const loginUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          { name, email, password },
          { withCredentials: true }
        );
        console.log("register successfull", data);
        setIsLoggedIn(true);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
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
      <form className="auth-form" onSubmit={handleSubmit}>
        <h4 style={{ textAlign: "center" }}>register</h4>
        <FormRow
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
        />
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
        <FormRow
          labelText="confirm password"
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          value={values.confirmPassword}
        />
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "loading..." : "register"}
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
