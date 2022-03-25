import "./App.css";
import React from "react";

// Components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./compotents/Content";
import Topbar from "./compotents/Topbar";

function App() {
  return (
    <div className="container-fuild vh-100">
      <Topbar />
      <Content />
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
    </div>
  );
}

export default App;
