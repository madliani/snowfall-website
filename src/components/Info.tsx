import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    children: ReactNode;
};

const Container = styled.div`
    position: relative;
    height: 80vh;
`;

const Jumbotron = styled.div`
    position: absolute;
    top: 20vh;

    width: 100%;
    margin: 0;
    padding: 2rem 1rem;

    background: none;

    @media (max-width: 768px) {
        top: 12vh;
    }
`;

const Text = styled.div`
    line-height: 2rem;
`;

export const Info = ({ children }: Properties) => {
    return (
        <Container>
            <Jumbotron className="jumbotron jumbotron-fluid">
                <Text>{children}</Text>
            </Jumbotron>
        </Container>
    );
};
