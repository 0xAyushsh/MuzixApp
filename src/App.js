import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import Signin from './components/Authentication/Signin'
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/signup/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={SignUp} />
      <ProtectedRoute exact path="/" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
