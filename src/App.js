import "./App.css";
import { Switch, Route } from "react-router-dom";

// Components
import TopBar from "./compotents/Topbar/TopBar";
import Categories from "./compotents/Topbar/Categories";
import HomePage from "./compotents/Pages/Home";
import RegisterPage from "./compotents/Pages/RegisterPage";
import LoginPage from "./compotents/Pages/LoginPage";
import UserRoute from "./compotents/PrivateRoutes/User/UserRoute";
import AdminRoute from "./compotents/PrivateRoutes/Admin/AdminRoute";
import PrivateUserRoute from "./compotents/PrivateRoutes/User/PrivateUserRoute";
import PrivateAdminRoute from "./compotents/PrivateRoutes/Admin/PrivateAdminRoute";
import ProductDetail from "./compotents/Pages/ProductDetail";
import NotFound from "./compotents/Pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./compotents/Footer";

function App() {
  return (
    <div className="container-fuild vh-100">
      {/* TOPBAR */}

      <TopBar />
      <Categories />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <PrivateUserRoute path="/profile" component={UserRoute} />
        <PrivateAdminRoute path="/admin" component={AdminRoute} />
        <Route path="*" component={NotFound} />
      </Switch>

      {/*   <Footer /> */}
      <Footer />
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
    </div>
  );
}

export default App;
