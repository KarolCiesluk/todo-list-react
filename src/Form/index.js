import { useState } from "react";
import { Wrapper, Input, Button } from "./styled";

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
        <Wrapper onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <Button>Dodaj zadanie</Button>
        </Wrapper>
    )
};

export default Form;