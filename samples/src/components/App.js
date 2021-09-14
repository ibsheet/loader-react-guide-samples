// Main.
import AppRouter from "components/Router";
import Hello from "samples/Hello";

const App = () => {
  return (
    <>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} IBSheet8 React Guide Sample</footer>
    </>
  );
}

export default App;
