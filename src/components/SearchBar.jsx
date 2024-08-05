import { useState } from "react";
import supabase from "../supabase/config";

function SearchBar({ getUsers, setUsers }) {
  const [searchQuery, setSearchQuery] = useState("");

  function getSearchResults(e) {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      getUsers();
      return;
    }
    supabase
      .from("users")
      .select()
      .or(`name.ilike.${e.target.value}%`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <input
        onChange={getSearchResults}
        type="text"
        placeholder="search your character"
      />
      <p>{searchQuery}</p>
    </>
  );
}

export default SearchBar;
