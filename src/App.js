import "./App.css";
import Header from "./components/Header/index.js";
import Form from ".components/Form/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Form />
      </main>
    </div>
  );
}

export default App;
