import "./Form.css";
import Button from "../components/Button/index.js";
console.log("test");
export default function Form(onAddActivity) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (data.isForGoodWeather) {
      data.isForGoodWeather = true;
    } else {
      data.isForGoodWeather = false;
    }
    onAddActivity(data);
    event.target.reset();
    event.target.elements.activity__input.focus();
  }

  return (
    <form className="entry-form">
      <h2 className="entry-form__title">Add new Activity</h2>
      <formfield className="entry-form__fields">
        <label for="activity__input">Name</label>
        <input
          type="text"
          className="entry-form__field "
          id="activity__input"
          name="activity__input"
        ></input>
        <label for="checkbox">Good-weather activity:</label>
        <input type="checkbox" id="checkbox"></input>
      </formfield>
      <div className="entry-form__button-wrapper">
        <Button />
      </div>
    </form>
  );
}
