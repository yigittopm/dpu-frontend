import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import TopBar from "./compotents/TopBar";
import Categories from "./compotents/Categories";
import HomePage from "./compotents/Pages/HomePage";
import RegisterPage from "./compotents/Pages/RegisterPage";
import LoginPage from "./compotents/Pages/LoginPage";
import ProtectedPages from "./compotents/Pages/ProtectedPages";
import ProtectedAdminPages from "./compotents/Pages/ProtectedAdminPages";
import NotFound from "./compotents/Pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      <div className="container-fuild w-100 100vh">
        <TopBar />
        <Categories />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedPages path="/profile" component={ProtectedPages} />
          <ProtectedAdminPages path="/admin" component={ProtectedAdminPages} />
          <Route path="*" component={NotFound} />
        </Switch>
        {/*   <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
