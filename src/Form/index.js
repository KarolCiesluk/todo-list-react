import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimedTaskContent = newTaskContent.trim();

        if (trimedTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;