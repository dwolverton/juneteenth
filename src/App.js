import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import QuoteRoute from './QuoteRoute';
import './App.css';
import fetchQuotes from './fetchQuotes';



function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetchQuotes().then(setQuotes);
  }, []);

  if (!quotes.length) {
    return null;
  }

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:quoteId">
              <QuoteRoute quotes={quotes} />
            </Route>
            <Redirect to={"/" + quotes[0].key} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
