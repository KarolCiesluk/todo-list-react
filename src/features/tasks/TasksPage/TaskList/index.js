import { useSelector, useDispatch } from "react-redux";
import { toTask } from "../../../../common/routes";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery
} from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button, StyledLink } from "./styled";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            done={task.done}
          >
            <StyledLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledLink>
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
};

export default TaskList;