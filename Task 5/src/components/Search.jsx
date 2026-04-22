import React, { useMemo } from "react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("");

  const users = [
    { id: 1, name: "Prasanna", role: "full stack dev" },

    { id: 2, name: "Bala", role: "full stack dev" },
    { id: 3, name: "Aneesh", role: "full stack dev" },
    { id: 4, name: "Michael", role: "full stack dev" },
    {
      id: 5,
      name: "Arun",
      role: "frontend developer",
    },
    {
      id: 6,
      name: "Divya",
      role: "UI/UX designer",
    },
    {
      id: 7,
      name: "Karthik",
      role: "backend developer",
    },
    {
      id: 8,
      name: "Sneha",
      role: "data analyst",
    },
    {
      id: 9,
      name: "Rahul",
      role: "devops engineer",
    },
    {
      id: 10,
      name: "Priya",
      role: "full stack dev",
    },
    {
      id: 11,
      name: "Vikram",
      role: "cyber security",
    },
    {
      id: 12,
      name: "Anjali",
      role: "software tester",
    },
    {
      id: 13,
      name: "Suresh",
      role: "cloud engineer",
    },
    {
      id: 14,
      name: "Meena",
      role: "mobile app developer",
    },
  ];

  const filterUsers = useMemo(() => {
    if (submit.trim() === "") return [];

    return users.filter((user) =>
      user.name.toLowerCase().includes(submit.toLowerCase()),
    );
  }, [submit]);
  return (
    <div className="hero">
      <form>
        <input
          type="text"
          placeholder="Search name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => setSubmit(search)}
          className="btn-group"
        >
          Search
        </button>

        {submit.trim() === "" ? (
          <p>Start to type</p>
        ) : filterUsers.length === 0 ? (
          <p>No user found</p>
        ) : (
          <ul>
            {filterUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Search;
