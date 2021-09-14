// Main.
import AppRouter from "components/Router";

const App = () => {
  return (
    <>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} IBSheet8 React Guide Sample</footer>
    </>
  );
}

export default App;
