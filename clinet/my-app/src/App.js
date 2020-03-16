import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'

//components
import BookList from './components/BookList';
import AddBooks from './components/AddBooks';

// apollo client setup
const client = new ApolloClient({
  uri : `http://localhost:4000/graphql`
})
function App() {
  return (
    <ApolloProvider client = {client}>
      <div id="main">
        <h1>Berihu's Reading List</h1>
        <BookList />
        <AddBooks />
      </div>
    </ApolloProvider>
  );
}

export default App;
