import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
  
      {/* <Nav /> */}
      <Router>
      <StoreProvider>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      </StoreProvider>
      </Router>
      </ApolloProvider>
  )
}
export default App