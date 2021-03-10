import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';

const DetailPage = React.lazy(() => import('../DetailPage/DetailPage'));
const ListingPage = React.lazy(() => import('../ListingPage/ListingPage'));

const App: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<div>Loading...</div>}>
          <ListingPage />
        </Suspense>
      </Route>
      <Route exact path="/best-astrologer/:id">
        <Suspense fallback={<div>Loading...</div>}>
          <DetailPage />
        </Suspense>
      </Route>
    </Switch>
  </Router>
);

export default App;
