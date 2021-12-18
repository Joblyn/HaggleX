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
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/sign_in" component={() => <SignIn isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Layout>
            <Switch>
              <Route path="/dashboard" component={() => <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
              <Route path="/wallet" component={Wallet} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
