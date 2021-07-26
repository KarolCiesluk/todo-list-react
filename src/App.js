import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { Navigation, StyledNavLink } from "./styled";

const App = () => (
    <HashRouter>
        <Navigation>
            <li>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
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