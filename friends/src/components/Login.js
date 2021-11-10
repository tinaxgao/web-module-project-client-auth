import React, { useHistory, useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState([]);

  const handleChange = e => {
    setCredentials({
      ...credentials,
        [e.target.name]: e.target.value
      })
    };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/login",
        `{ username: 'lambda', password: 'school' }`
      )
      .then((resp) => {
        //2. if the call is successful: save token in localStorage
        console.log(resp);
        // localStorage.setItem('token', resp.data.token);
        // localStorage.setItem('role', resp.data.role);
        // localStorage.setItem('username', resp.data.username);
        // this.props.history.push('/protected');
      })
      .catch((err) => {
        //3. if the call is unsuccessful: console.log error
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
