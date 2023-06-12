import "./App.css";
import Routes from "routes/index";
import { ApolloProvider } from "@apollo/client";
import { client } from "api";
function App() {
  return (
    <ApolloProvider client={client}>
      {/* import other components of global themes etc here . We can also import layout , HOC here */}
      <Routes />
    </ApolloProvider>
  );
}

export default App;
