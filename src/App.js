import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import TopBar from "./compotents/TopBar";
import RegisterPage from "./compotents/Pages/RegisterPage";
import LoginPage from "./compotents/Pages/LoginPage";
import NotFound from "./compotents/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fuild w-100 100vh">
        <TopBar />
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
