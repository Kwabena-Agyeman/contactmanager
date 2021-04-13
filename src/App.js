import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import ContactList from './Components/ContactList';
import Addcontact from './Components/AddContact';
import About from './Components/About';
import { Provider } from './Context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                <ContactList />
              </Route>
              <Route exact path='/addContact'>
                <Addcontact />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
