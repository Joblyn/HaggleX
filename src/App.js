import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Pages/signup";
import Layout from "./Layout/layout";
import Dashboard from "./Pages/dashboard";
import Wallet from "./Pages/wallet";
import SignIN from "./Pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/sign_in" component={SignIN}/>
        <Layout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/wallet" component={Wallet} />
          </Switch>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
