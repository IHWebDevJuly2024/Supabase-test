import "./CreateUser.css";
import { useState } from "react";
import UserCard from "./UserCard";
import supabase from "../supabase/config";

function CreateUser({ getUsers }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [campus, setCampus] = useState("");
  const [city, setCity] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name,
      last_name: lastName,
      campus,
      city,
      avatar_url: avatarUrl,
    };

    supabase
      .from("users")
      .insert(newUser)
      .then(() => {
        setName("");
        setLastName("");
        setCampus("");
        setCity("");
        setAvatarUrl("");
        getUsers();
      })
      .catch((error) => console.error(error));
  }

  return (
    <section className="form-card-container">
      <UserCard
        user={{
          name,
          last_name: lastName,
          campus,
          city,
          avatar_url: avatarUrl,
        }}
      />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label>Campus</label>
        <input
          type="text"
          value={campus}
          onChange={(event) => setCampus(event.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label>Avatar url</label>
        <input
          type="text"
          value={avatarUrl}
          onChange={(event) => setAvatarUrl(event.target.value)}
        />
        <button>Create new user</button>
      </form>
    </section>
  );
}

export default CreateUser;
// name, last_name, campus, city, avatar_url
