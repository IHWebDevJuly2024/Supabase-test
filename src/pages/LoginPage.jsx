import { useEffect, useState } from "react";
import supabase from "../supabase/config";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getSession = async () => {
    try {
      const session = await supabase.auth.getSession();

      console.log(session.data.session.user.id);
      if (session.data.session.expires_at > Date.now() / 1000) {
        console.log("Logged in");
      } else {
        console.log("Not logged in");
      }
    } catch (error) {
      console.log("Not logged in", error);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

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
