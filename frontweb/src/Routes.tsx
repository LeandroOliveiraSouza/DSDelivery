import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Orders from "./components/Orders";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
