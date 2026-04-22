import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="hero">
      {loading ? (
        <p>Loading Please wait...</p>
      ) : (
        <div className="cardContainer">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;