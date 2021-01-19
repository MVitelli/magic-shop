import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from './Pages/Cards';
import { SiteProvider } from './Context/SiteContext';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <SiteProvider>
        <Router>
          <Switch>
            <Route path="/cards" component={Cards} />
            <Route path="/" component={Cards} />
          </Switch>
        </Router>
      </SiteProvider>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
