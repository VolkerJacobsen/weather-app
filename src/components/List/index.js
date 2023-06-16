import Activity from "../Activity/index";

export default function List({ activities }) {
  return (
    <div className="entries-section__entries">
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
