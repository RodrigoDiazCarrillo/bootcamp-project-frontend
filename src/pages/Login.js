import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";


export const Login = () => {


  return (
    <>
      <h1>Login</h1>
      <form onSubmit="">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange=""
          value="{formValues.email}"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange=""
          values=""
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};
