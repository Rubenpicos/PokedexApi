import { AppRouter } from "./AppRouter";
import { PokedemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <PokedemonProvider>
      <AppRouter />
    </PokedemonProvider>
  );
}

export default App;
