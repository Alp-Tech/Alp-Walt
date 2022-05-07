import "./App.css";
import {
  MemoryRouter as Router,
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
            <Route>
              <Login />
            </Route>
            <Route>
              <Main />
            </Route>
            <Route>
              <Account />
            </Route>
            <Route>
              <Detail />
            </Route>
            <Route>
              <Graph />
            </Route>
            <Route>
              <Nft />
            </Route>
            <Route>
              <Signing />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
