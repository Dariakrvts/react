import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

export const Card = styled.div`
    width: 100%;
    max-width: 250px;
    display: flex;
    background-color: grey;
`;

export const Text = styled.p`
    color: ${(props) => (props.$primary ? "green" : "#BF4F74")};
`;

export const Grid = styled.div`
    /* width: ${(props) => (100 / props.xs)}; */
`;

export const Link = styled(ReactLink)`
    color: "white";
`;