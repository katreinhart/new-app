
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import client from './src/apolloconfig';


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