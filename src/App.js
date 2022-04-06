import "./App.css";
import React from "react";

// Components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./compotents/Content";
import Topbar from "./compotents/Topbar";
import { SidebarProvider } from "./context/Sidebar";

function App() {
  return (
    <div className="container-fuild vh-100">
      <SidebarProvider>
        <Topbar />
        <Content />
        <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      </SidebarProvider>
    </div>
  );
}

export default App;
