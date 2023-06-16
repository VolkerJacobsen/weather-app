import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import Header from "./components/Header/index.js";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("newEntries", {
    defaultValue: [],
  });
  const [checked, setChecked] = useState(false);
  const newCheckedStatus = setChecked(checked);

  const isGoodWeather = true;

  const filteredWeatherStatus = (event) =>
    activities.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );

  function handleAddActivity(newActivity) {
    newActivity = { ...newActivity, id: uid() };
    setActivities([newActivity, ...activities]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <List
          activities={filteredWeatherStatus}
          isGoodWeather={isGoodWeather}
        />
        <Form onAddActivity={handleAddActivity} checked={newCheckedStatus} />
      </main>
    </div>
  );
}

export default App;
