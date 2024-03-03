import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
`;

export const Column = styled(Flex)`
    flex-direction: column;
`;

export const ColumnGrow = styled(Column)`
    flex-grow: 1;
`;

export const FlexWrapper = styled(Flex)`
    display: flex;
    width: 200px;
    color: red;
`;