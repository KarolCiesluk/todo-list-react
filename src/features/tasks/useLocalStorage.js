import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";



export const useLocalStorage = () => {
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
};