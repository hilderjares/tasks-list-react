import React, { Fragment } from 'react';
import Button from '../../material/Button';
import styled from 'styled-components';

const ButtonAdd = styled(Button)`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 18px;
    color: #FEF5F5;
    border: none;
    width: 96px;
    height: 33px;
    background: #F93161;
`;

function Main() {

    function hello(e) {
        e.preventDefault(); 
        alert();
    }

    return (
        <Fragment>
            <p> Main </p>
            <ButtonAdd onClick={hello}> Add </ButtonAdd>
        </Fragment>
    );
}

export default Main;