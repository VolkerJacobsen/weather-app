import Activity from "../Activity/index";

export default function List({ activities, isGoodWeather }) {
  return (
    <div className="entries-section__entries">
      {isGoodWeather === true ? (
        <h2>The weather is awesome! Go outside and:</h2>
      ) : (
        <h2>Bad weather outside! Here's what you can do now:</h2>
      )}
      {activities.map((activity) => (
        <Activity
          text={activity.activity__input}
          id={activity.id}
          isForGoodWeather={activity.isForGoodWeather}
        />
      ))}
    </div>
  );
}
