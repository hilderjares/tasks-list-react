import React from "react";
import styled from "styled-components";
import Button from "../../material/Button";

const StyledTable = styled.table`
    background: #fff;
    color: #000;
    border-collapse: collapse;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    width: 503px;

    tr > * {
        padding: 10px;
    }

    td {
        border: 1px solid #000;
        text-align: center;
    }

    th {
        border: 1px solid #000;
        text-align: center;
    }

    .actions > * {
        color: #000000;
    }
`;

const Checked = styled(Button)`
    border: none;
    border-radius: 100%;
    background: rgba(26, 239, 111, 0.83);
    width: 40px;
    height: 40px;
`;

const Delete = styled(Button)`
    border: none;
    border-radius: 100%;
    background: #ccc;
    width: 40px;
    height: 40px;
`;

function Table({ data, checkedTask, deleteTask }) {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            {data.map(({ task, id, isCompleted }) => (
                <tbody key={id}>
                    <tr
                        style={{
                            textDecoration: isCompleted ? "line-through" : "",
                        }}
                    >
                        <td> {task} </td>
                        <td className="actions">
                            <Checked onClick={() => checkedTask(id)}>
                                <i class="fa fa-check-square"></i>
                            </Checked>
                            <Delete onClick={() => deleteTask(id)}>
                                <i class="fa fa-trash"></i>
                            </Delete>
                        </td>
                    </tr>
                </tbody>
            ))}
        </StyledTable>
    );
}

export default Table;
