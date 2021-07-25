import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Author from "./features/author";
import Tasks from "./features/tasks/Tasks";

const App = () => (
    <HashRouter>
        <ul>
            <li><Link to="/autor">O autorze</Link></li>
            <li><Link to="/">Zadania</Link></li>
        </ul>
        <Switch>
            <Route path="/autor"><Author /></Route>
            <Route path="/"><Tasks /></Route>
        </Switch>
    </HashRouter>
);

export default App;