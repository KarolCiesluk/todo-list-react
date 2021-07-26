import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectAreTasksLoading } from "../tasksSlice";
import { Button } from "./styled";

function Tasks() {
const dispatch = useDispatch();
const areTasksLoading = useSelector(selectAreTasksLoading);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button
          onClick={() => dispatch(fetchExampleTasks())}
          disabled={areTasksLoading}
          >
            {areTasksLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList />
        }
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
};

export default Tasks;
