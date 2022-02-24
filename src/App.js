import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isDownload, setIsDownload] = useState(false);

  const fetchData = async () => {
    await axios
      .get("https://dpu-backend.herokuapp.com/api/v1/auth/all")
      .then((users) => setUsers(users.data))
      .finally(setIsDownload(true));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);
  return (
    <div className="App">
      <h2>Mert Yigittop</h2>
      <hr />
      <ul>
        {isDownload ? (
          users.map((user, index) => <li key={index}>{user.email}</li>)
        ) : (
          <li>Loading..</li>
        )}
      </ul>
    </div>
  );
}

export default App;
