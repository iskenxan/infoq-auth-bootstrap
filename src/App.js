import './App.css';
import Routes from './routes';
import { Auth0Provider } from '@auth0/auth0-react'
import ApolloGraphqlProvider from './ApolloProvider';

const redirectURL = window.location.origin;

function App() {
  return (
    <div className="App">
      <Auth0Provider domain="YOUR_DOMAIN"
        clientId="YOUR_CLIENT_ID"
        redirectUri={redirectURL}>
        <ApolloGraphqlProvider>
          <Routes />
        </ApolloGraphqlProvider>
      </Auth0Provider>
    </div>
  );
}

export default App;
