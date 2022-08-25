import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import style from "./ButtonLogin.module.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={style.buttonLog} onClick={() => loginWithRedirect()}>Iniciar Sesión</button>;
};

export default LoginButton;