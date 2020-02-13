import React from "react";
import {
    render,
    cleanup,
    fireEvent,
    waitForElement,
} from "@testing-library/react";
import InputText from "../InputText";

afterEach(cleanup);

describe("InputText component", () => {
    test("Matches the snapshot", () => {
        const { asFragment } = render(<InputText />);

        expect(asFragment().firstChild).toMatchSnapshot();
    });

    test("Should setter text 'new task' in input text", async () => {
        const { getByTestId } = render(<InputText />);

        const input = await waitForElement(() => getByTestId("input-text"));

        fireEvent.change(input, { target: { value: "new task" } });

        expect(input.value).toBe("new task");
    });

    test("Should not is empty", async () => {
        const { getByTestId } = render(<InputText />);

        const input = await waitForElement(() => getByTestId("input-text"));

        fireEvent.change(input, { target: { value: "testing" } });

        expect(input.value).not.toBe("");
    });
});
