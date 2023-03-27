import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { tokenVar } from "./state/reactive-vars";

const httpLink = createHttpLink({
    uri: 'http://192.168.1.2:4000'
  });
  
  const authLink = setContext((_, { headers }) => {    
    const token = useReactiveVar(tokenVar);

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