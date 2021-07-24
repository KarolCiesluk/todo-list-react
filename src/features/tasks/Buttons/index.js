import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks
} from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);

  const dispatch = useDispatch();

  return (
    <Wrapper>
    <Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            doneAll
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;