import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Header from "./components/Header/index.js";
import Form from ".components/Form/index.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("actvities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities({ id: uid(), ...newActivity }, ...activities);
  }

  // setEntries([
  //   { id: uid(), date, isFavorite: false, ...newEntry },
  //   ...entries,
  // ]);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
