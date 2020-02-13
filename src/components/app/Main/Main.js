import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Form from "../Form";
import Table from "../Table";
import newId from "../../../utils/newId";

const Container = styled.div`
    width: 560px;
    height: 514px;
    background: #29303b;
`;

const Context = styled.div`
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

function Main() {
    const [value, setValue] = useState("");
    const [tasks, setTask] = useState([
        { id: newId(), task: "learn react", isCompleted: false },
        { id: newId(), task: "create a api with php", isCompleted: false },
        { id: newId(), task: "study maths", isCompleted: false },
    ]);

    const createTask = event => {
        event.preventDefault();
        if (value === "") {
            alert("You cannot remember of the nothing :)");
            return;
        }
        const newTask = [
            ...tasks,
            { id: newId(), task: value, isCompleted: false },
        ];
        setTask(newTask);
    };

    const handleValue = event => {
        let value = event.target.value;
        setValue(value);
    };

    const checkedTask = index => {
        const newTask = tasks.map(task => {
            if (task.id === index) {
                task.isCompleted = task.isCompleted ? false : true;
            }
            return task;
        });
        setTask(newTask);
    };

    const deleteTask = index => {
        const newTask = tasks.filter(task => task.id !== index);
        setTask(newTask);
    };

    return (
        <Fragment>
            <Container>
                <Context>
                    <Header />
                    <Form
                        value={value}
                        handleValue={handleValue}
                        onClick={createTask}
                    />
                    <Table
                        data={tasks}
                        checkedTask={checkedTask}
                        deleteTask={deleteTask}
                    />
                </Context>
            </Container>
        </Fragment>
    );
}

export default Main;
