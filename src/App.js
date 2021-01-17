import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { Context } from "./Context/GlobalState";
import Login from "./components/Login";
// import PrivateRoute from "./PrivateRoute";

function App() {
  const { user } = useContext(Context);

  return user === null ? (
    <Login />
  ) : (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:id" component={Chat} user={user} />
          <Route path="/" exact component={HomeScreen} user={user} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
