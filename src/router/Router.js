import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import UserDetail from "../pages/UserDetail";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
