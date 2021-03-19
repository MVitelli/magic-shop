import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SiteProvider } from './Context/SiteContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cards from './Pages/Cards';
import DeckBuilder from './Pages/DeckBuilder';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <SiteProvider>
        <Router>
          <Switch>
            <Route path="/" component={Cards} />
            <Route path="/export" component={DeckBuilder} />
            <Route path="/cards" component={Cards} />
            {/* <Route path="/" component={Home} /> */}
          </Switch>
        </Router>
      </SiteProvider>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
