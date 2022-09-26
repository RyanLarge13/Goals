import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account.</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email."
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password."
            onChange={onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
