import { toAuthor, toTasks } from "../routes";
import { NavigationWrapper, StyledNavLink } from "./styled";

const Navigation = () => (
    <nav>
        <NavigationWrapper>
            <li>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </li>
        </NavigationWrapper>
    </nav>
);

export default Navigation;

