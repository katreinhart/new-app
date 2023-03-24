
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'http://192.168.1.2:4000',
  cache: new InMemoryCache()
});

import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import AuthorsScreen from './src/screens/AuthorsScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{name: "Kat"}}/>
          <Stack.Screen name="Courses" component={CoursesScreen} />
          <Stack.Screen name="Authors" component={AuthorsScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('NewAppProject', () => App);