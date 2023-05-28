import { useSelector, useDispatch } from "react-redux";
import { handleCompleteTask, handleDeleteTask } from "../../redux/todosSlice";

function Main() {
  const { todoList } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const handleComplited = (value) => {
    dispatch(handleCompleteTask(value));
  };
  const handleDelete = (value) => {
    dispatch(handleDeleteTask(value));
  };
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={null}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((task, index) => {
          return (
            <li
              className={task.isComplited === true ? "completed" : null}
              key={index}
              hidden={task.hidden}
            >
              <div className="view">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={task.isComplited}
                  onChange={() => {
                    handleComplited(task.task);
                  }}
                />
                <label htmlFor="">{task.task}</label>
                <button
                  onClick={() => {
                    handleDelete(task.task);
                  }}
                  className="destroy"
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Main;
