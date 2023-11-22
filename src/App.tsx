import "./App.css";

function App() {
  return (
    <>
      <h1>Hello Sentry !</h1>
      <button onClick={() => methodDoesNotExist()}>Break the world</button>
    </>
  );
}

export default App;
