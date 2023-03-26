import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => {
    // try {
    //     const token = await AsyncStorage.getItem("NewAppProject.authToken")
    //     if (token) return token;
    // } catch(e) {
    //     // error
    // }

    // return null;
    return "8dbf1648-bae2-4257-b8ff-2e5128ef5d6d";
}

const httpLink = createHttpLink({
    uri: 'http://192.168.1.2:4000'
  });
  
  const authLink = setContext((_, { headers }) => {
    
    const token = getToken();

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

  export default client;