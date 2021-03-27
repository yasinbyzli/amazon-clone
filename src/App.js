import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Switch>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/">
              <Home />
            </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
