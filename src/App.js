import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComponentsPage from './pages/ComponentsPage';
import NotFound from './components/NotFound';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/components'>
          <ComponentsPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegistrationPage />
        </Route>
        <Route path={'*'} component={NotFound} />;
      </Switch>

      {/* <Footer />  тут пока проблема со стилями...*/}
    </Router>
  );
}

export default App;
