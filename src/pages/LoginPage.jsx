import { useState } from "react";
import supabase from "../supabase/config";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e) {
    e.preventDefault();
    supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
