export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <div className="entries-section__entries">
      {isGoodWeather ? (
        <h2>The weather is awesome! Go outside and:</h2>
      ) : (
        <h2>Bad weather outside! Here's what you can do now:</h2>
      )}
      {activities.map((activity) => (
        <article>
          <p key={activity.id} ClassName="actity__entry">
            {activity.name}
          </p>
          <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
        </article>
      ))}
    </div>
  );
}
