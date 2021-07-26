import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, aboutMe }) => (
    <Wrapper>
        <Header className="section__header">
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;