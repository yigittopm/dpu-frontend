import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState("hello");

  const data = async () => {
    const text = await axios.get("https://dpu-backend.herokuapp.com/");
    const a = await text.data;
    setHello(a);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="App">
      <h2>Mert Yigittop</h2>
      <h4>{hello}</h4>
    </div>
  );
}

export default App;
