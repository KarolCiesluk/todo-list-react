import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";


import { Navigation, NavigationButton } from "./styled";

const App = () => (
    <HashRouter>
        <Navigation>
            <li>
                <NavigationButton to="/autor">O autorze</NavigationButton>
            </li>
            <li>
                <NavigationButton to="/zadania">Zadania</NavigationButton>
            </li>
        </Navigation>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;