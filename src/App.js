import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuoteRoute from './QuoteRoute';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch('/api/quotes.json').then(r => r.json()).then(setQuotes);
  }, []);

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:quoteId">
              <QuoteRoute quotes={quotes} />
            </Route>
            <Redirect to="/0" />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
