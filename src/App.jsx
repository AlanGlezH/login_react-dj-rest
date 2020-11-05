import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import UserSession from "./components/UserSession/UserSession";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Header />
            <LoginForm />
          </Route>
          <Route exact path="/home">
            {UserSession.getAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            )}
            <Header />
            <h1>{`Bienvendio a Worktion ${UserSession.getUsername()}`}</h1>
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
