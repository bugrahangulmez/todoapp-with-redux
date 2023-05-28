import { useSelector, useDispatch } from "react-redux";
import {
  handleSelectActiveTasks,
  handleSelectAllTasks,
  handleSelectComplitedTasks,
} from "../../redux/todosSlice";

function Footer() {
  const dispatch = useDispatch();
  const { todoList, category } = useSelector((store) => store.todos);
  const handleSelectAll = () => {
    dispatch(handleSelectAllTasks());
  };
  const handleSelectActive = () => {
    dispatch(handleSelectActiveTasks());
  };
  const handleSelectCompleted = () => {
    dispatch(handleSelectComplitedTasks());
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((item) => item.isComplited === false).length}{" "}
        </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={handleSelectAll}
            className={category === "all" ? "selected" : null}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSelectActive}
            className={category === "active" ? "selected" : null}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSelectCompleted}
            className={category === "completed" ? "selected" : null}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
