import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import TopBar from "./compotents/TopBar";
import RegisterPage from "./compotents/Pages/RegisterPage";
import LoginPage from "./compotents/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fuild">
        <TopBar />
        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
