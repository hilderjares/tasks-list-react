import React from "react";
import Main from "../Main";
import styled from "styled-components";

const CenteredMain = styled.div`
    flex-wrap: wrap;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

function Task() {
    return (
        <CenteredMain>
            <Main />
        </CenteredMain>
    );
}

export default Task;
