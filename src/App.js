import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: {
    standard: "teal",
    hover: "hsl(180, 100%, 30%)",
    active: "hsl(180, 100%, 35%)",
  },
  fillingColor: "#ddd",
  secondaryColor: "white",
  buttonColors: {
    forestGreen: {
      standard: "hsl(120, 61%, 34%)",
      hover: "hsl(120, 61%, 39%)",
      active: "hsl(120, 61%, 44%)",
    },
    crimson: {
      standard: "hsl(348, 83%, 47%)",
      hover: "hsl(348, 83%, 52%)",
      active: "hsl(348, 83%, 57%)",
    },
  },
};

/*
  1 Button
    color: teal 1a)
    hover: hsl(180, 100%, 30%) jaśniejszy teal 1b)
    active: hsl(180, 100%, 35%) najjaśniejszy teal 1c)
    disabledColor: #ddd szary 2)
  2 Form
    I Input
      border: #ddd szary 2)
    II Button
      color: white 3)
      background: teal 1a)
      hoverBackground: hsl(180, 100%, 30%) 1b)
      focusBackground: hsl(180, 100%, 35%) 1c)
  3 Section
    I Wrapper
      background: white 3)
      shadow: #ddd szary 2)
    II Header
      border: #ddd szary 2)
  4 Tasks
    I Item
      border: #ddd szary 2) 
    II Button
      color: white 3)
      background: hsl(120, 61%, 34%) zielony 4a)
      hoverBackbground: hsl(120, 61%, 39%) jaśniejszy zielony 4b)
      activeBackground: hsl(120, 61%, 44%)  najjaśniejszy zielony 4c)
      background: hsl(348, 83%, 47%) czerwony 5a)
      hoverBackbground: hsl(348, 83%, 52%) jaśniejszy czerwony 5b)
      activeBackground: hsl(348, 83%, 57%) najjaśniejszy czerwony 5c)
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
