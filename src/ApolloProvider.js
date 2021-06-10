import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";
import fetch from "isomorphic-fetch";

const API_URL = "https://YOUR_GRAPHQL_ENDPOINT/v1/graphql";


export default function ApolloGraphqlProvider({
  children,
}) {
  const { getAccessTokenSilently } = useAuth0();

  const authLink = setContext(async (_, { headers }) => {
    let accessToken = null;
    try {
      accessToken = await getAccessTokenSilently();
    } catch (e) {
      console.log({ e });
    }

    headers = { ...headers };
    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`;
    }

    return { headers };
  });

  const httpLink = createHttpLink({
    fetch,
    uri: API_URL,
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
