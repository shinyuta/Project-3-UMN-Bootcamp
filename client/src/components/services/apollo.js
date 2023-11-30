import { 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to your Apollo Server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server endpoint
});

// Create an Apollo Client with a link to your server and an in-memory cache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
