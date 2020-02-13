import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    width: 503px;
    height: 50px;
    background: #f93161;
`;

const Title = styled.div`
    padding: 5px;
    text-align: center;
    font-family: "Kurale", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #fff9f9;
`;

function Header() {
    return (
        <StyledHeader>
            <Title> My Tasks </Title>
        </StyledHeader>
    );
}

export default Header;
