import supabase from "../supabase/config";
import CreateUser from "../components/CreateUser";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import "./HomePage.css";

function HomePage() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    supabase
      .from("characters")
      .select()
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <CreateUser getUsers={getUsers} />
      <SearchBar getUsers={getUsers} setUsers={setUsers} />
      <section className="users-container">
        {users?.map((user) => {
          return <UserCard getUsers={getUsers} key={user.id} user={user} />;
        })}
      </section>
    </>
  );
}

export default HomePage;
