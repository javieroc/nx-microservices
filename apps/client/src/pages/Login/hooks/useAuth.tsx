import { useState } from "react";

function useAuth() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  function saveToken(userToken: string) {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  }

  return {
    setToken: saveToken,
    token,
  }
}

export { useAuth }
