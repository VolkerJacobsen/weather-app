import "./Form.css";
import Button from "../components/Button/index.js";

export default function Form(onAddActivity) {
  return (
    <form className="entry-form">
      <h2 className="entry-form__title">Add new Activity</h2>
      <formfield className="entry-form__fields">
        <label for="activity__input">Name</label>
        <input
          type="text"
          className="entry-form__field "
          id="activity__input"
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
