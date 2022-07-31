import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
