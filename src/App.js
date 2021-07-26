import { HashRouter, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";

import Tasks from "./features/tasks/Tasks";
import { Navigation, NavigationButton } from "./styled";

const App = () => (
    <HashRouter>
        <Navigation>
            <li><NavigationButton to="/autor">O autorze</NavigationButton></li>
            <li><NavigationButton to="/zadania">Zadania</NavigationButton></li>
        </Navigation>
        <Switch>
            <Route path="/autor"><AuthorPage /></Route>
            <Route path="/zadania"><Tasks /></Route>
        </Switch>
    </HashRouter>
);

export default App;