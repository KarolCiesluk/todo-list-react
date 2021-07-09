import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const theme = {};

/*
  1 Button
    color: teal
    hover: hsl(180, 100%, 30%)
    active: hsl(180, 100%, 35%)
    disabledColor: #ddd
  2 Form
    I Input
      border: #ddd
    II Button
      color: white
      background: teal
      hoverBackground: hsl(180, 100%, 30%)
      focusBackground: hsl(180, 100%, 35%)
  3 Section
    I Wrapper
      background: white
      shadow: #ddd
    II Header
      border: #ddd
  4 Tasks
    I Item
      border: #ddd
    II Button
      color: white
      background: hsl(120, 61%, 34%)
      hoverBackbground: hsl(120, 61%, 39%)
      activeBackground: hsl(120, 61%, 44%)
      background: hsl(348, 83%, 47%)
      hoverBackbground: hsl(348, 83%, 52%)
      activeBackground: hsl(348, 83%, 57%)
*/    

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : [];
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter((task) => task.id !== id));
  }

  const toggleHideDone = () => {
    return setHideDone(hideDone => !hideDone);
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(
      tasks => tasks.map(task => ({
        ...task,
        done: true,
      })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
      }
    ])
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />

        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
