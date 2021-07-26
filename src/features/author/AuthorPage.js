import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Bio } from "../../common/Section/styled";
import { aboutMe } from "./aboutMe";

const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />

        <Section
            title="Karol Cieśluk"
            body={
                <Bio>
                    {aboutMe}
                </Bio>
            }
        />
    </Container>
);

export default AuthorPage;

