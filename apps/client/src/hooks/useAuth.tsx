import { useState } from "react";
import { LoginResponse } from "../types";

function useAuth() {
  const [auth, setAuth] = useState<LoginResponse>(getAutData());

  function getAutData(): LoginResponse {
    const authString = localStorage.getItem('auth');
    return JSON.parse(authString);
  }

  function saveAuth(authData: LoginResponse) {
    localStorage.setItem('auth', JSON.stringify(authData));
    setAuth(authData);
  }

  return {
    setAuth: saveAuth,
    auth,
  }
}

export { useAuth }
