import "./UserCard.css";
import supabase from "../supabase/config";

function UserCard({
  user: { id = null, name, last_name, campus, city, avatar_url, anime },
  getUsers,
}) {
  function deleteUser() {
    supabase
      .from("users")
      .delete()
      .eq("id", id)
      .then(() => getUsers())
      .catch((error) => console.error(error));
  }

  return (
    <div className={anime ? "red user-card" : "user-card"}>
      <img width={"300px"} src={avatar_url} alt="" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>Last name: {last_name}</p>
        <p>Campus: {campus}</p>
        <p>City: {city}</p>
        {anime ? <p>This user is an anime character</p> : null}
      </div>
      <p onClick={deleteUser} className="trash-icon">
        🗑️
      </p>
    </div>
  );
}

export default UserCard;
