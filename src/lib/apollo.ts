import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4pw3t0k2luc01xl02i1g5w4/master',
    cache: new InMemoryCache()
});