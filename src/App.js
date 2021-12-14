import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/dashboard";
import Wallet from "./Pages/wallet";
import SignUp from "./Pages/signup";
import SignIn from "./Pages/signin";
import { ApolloProvider } from "@apollo/client";
import client from "./client";


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Layout>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/wallet" component={Wallet} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
