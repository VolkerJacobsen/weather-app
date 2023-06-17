import "./Form.css";
import Button from "../Button/index";
console.log("test");
export default function Form({ onAddActivity, checked }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;

    const data = {
      name: formElements.name.value,
      isForGoodWeather: formElements.goodWeather.checked,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.elements.activity__input.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <h2 className="entry-form__title">Add new Activity</h2>
      <formfield className="entry-form__fields">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="goodWeather">Good-weather activity:</label>
        <input id="goodWeather" type="checkbox" name="goodWeather" />
      </formfield>
      <div className="entry-form__button-wrapper">
        <Button />
      </div>
    </form>
  );
}
