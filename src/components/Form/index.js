import Button from "../components/Button/index.js";

export default function Form(onAddActivity) {
  return (
    <form>
      <h2>Add new Activity</h2>
      <formfield>
        <label for="activity__input">Name</label>
        <input type="text" class="input" id="activity__input"></input>
        <label for="checkbox">Good-weather activity:</label>
        <input type="checkbox" id="checkbox"></input>
      </formfield>
      <Button />
    </form>
  );
}
