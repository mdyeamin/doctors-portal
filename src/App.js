import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
