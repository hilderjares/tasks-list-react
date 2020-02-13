import React from "react";
import styled from "styled-components";
import InputText from "../../material/InputText";
import Button from "../../material/Button";

const ButtonAdd = styled(Button)`
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-size: 18px;
    color: #fef5f5;
    border: none;
    width: 96px;
    height: 33px;
    background: #f93161;
`;

const Input = styled(InputText)`
    padding: 0px;
    border: none;
    width: 396px;
    height: 33px;
    background: #ffffff;
`;

const StyledForm = styled.div`
    padding: 5px;
    display: flex;
`;

const Label = styled.div`
    padding: 5px;
`;

function Form({ value, handleValue, onClick }) {
    return (
        <StyledForm>
            <Label>
                <Input
                    value={value}
                    placeholder={"Type a new task here"}
                    onChange={handleValue}
                />
            </Label>
            <Label>
                <ButtonAdd onClick={onClick}> Add </ButtonAdd>
            </Label>
        </StyledForm>
    );
}

export default Form;
