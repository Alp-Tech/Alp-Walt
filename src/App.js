import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Main from "./components/Main";
import Account from "./components/Account";
import Detail from "./components/Detail";
import Graph from "./components/Graph";
import Nft from "./components/Nft";
import Signing from "./components/Signing";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path={"/"}>
              <Login />
            </Route>
            <Route path={"main"}>
              <Main />
            </Route>
            <Route path={"account"}>
              <Account />
            </Route>
            <Route path={"detail"}>
              <Detail />
            </Route>
            <Route path={"graph"}>
              <Graph />
            </Route>
            <Route path={"nft"}>
              <Nft />
            </Route>
            <Route path={"signing"}>
              <Signing />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
