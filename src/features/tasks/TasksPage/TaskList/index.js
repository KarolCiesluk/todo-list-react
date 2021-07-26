import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectHideDone,
  toggleTaskDone,
  removeTask
} from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
          >
            {task.done ? "✓" : ""}
          </Button>
          <Content
            // path="/zadania/:id"
            done={task.done}
          >
            {task.content}
          </Content>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            🗑️
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;