import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAddTodo } from "../../redux/todosSlice";

function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTodo(text));
    setText("");
  };
  return (
    <section className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          autoFocus
          onChange={({ target }) => {
            setText(target.value);
          }}
          value={text}
        />
      </form>
    </section>
  );
}
export default Header;
