import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import Header from "./components/Header/index.js";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("newEntries", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  let filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  console.log(filteredActivities);

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );

        if (response.ok) {
          const data = await response.json();
          setWeather(data);
          console.log(data);
        } else {
          console.error("Response not okay");
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h2>
          {weather.condition} {weather.temperature}°C
        </h2>
        <List
          activities={filteredActivities}
          isGoodWeather={weather.isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
      </main>
    </div>
  );
}
