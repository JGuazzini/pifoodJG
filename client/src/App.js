import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Food</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
