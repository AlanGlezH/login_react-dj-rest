import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserSession from "../UserSession/UserSession";

function LoginForm() {
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  async function handleSubmitClick(e) {
    e.preventDefault();
    if (state.username && state.password) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: state.username,
          password: state.password,
        }),
      };
      const response = await fetch(
        "http://127.0.0.1:8000/dj-rest-auth/login/",
        requestOptions
      );
      const data = await response.json();
      if (data.key) {
        alert("Token: " + data.key);
        UserSession.setAuthenticated(true);
        UserSession.setUsername(state.username);
        console.log(UserSession.getUsername())
        history.push("/home");
      } else {
        alert("Datos inválidos");
      }
    } else {
      alert("Todos los campos deben estar completos");
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="mx-auto card col-lg-4 mt-5">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Usuario</label>
          <input
            className="form-control"
            id="username"
            placeholder="Ingresar usuario"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mt-2 mb-2"
          value={state.confirmPassword}
          onClick={handleSubmitClick}
          back="2F3437"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
