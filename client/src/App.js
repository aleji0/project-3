import './App.css';
import Login from './components/Login';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Login />
    </ApolloProvider>
  );
}

export default App;
