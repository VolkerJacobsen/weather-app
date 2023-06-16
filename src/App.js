import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Header from "./components/Header/index.js";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("newEntries", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    newActivity = { ...newActivity, id: uid() };
    setActivities([newActivity, ...activities]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <List activities={activities} />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}

export default App;
