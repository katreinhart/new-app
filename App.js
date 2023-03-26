
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NavigationContainer } from '@react-navigation/native';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.2:4000'
});

const authLink = setContext((_, { headers }) => {
  const token = "ef455ba4-1117-44a4-87a0-f5b8df70430c"
  return {
    headers: {
      ...headers,
      authorization: token ? token : ""
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

import MainNavigation from './src/screens/MainNavigation';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('NewAppProject', () => App);