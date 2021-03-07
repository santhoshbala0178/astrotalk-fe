import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPage from '../DetailPage/DetailPage';
import Header from '../Header';
import ListingPage from '../ListingPage/ListingPage';

const App: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <ListingPage />
      </Route>
      <Route exact path="/best-astrologer/:id">
        <DetailPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
