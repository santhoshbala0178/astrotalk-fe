import { ApolloClient, ApolloProvider, gql, NormalizedCacheObject, useQuery } from "@apollo/client";
import {cache} from "./cache";
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

const rootElement = document.getElementById('root');

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  rootElement,
);
