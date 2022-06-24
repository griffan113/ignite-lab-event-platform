import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3iozv0cbs01xxfpo748x4/master',
  cache: new InMemoryCache()
})