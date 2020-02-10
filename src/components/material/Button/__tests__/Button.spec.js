import React from "react";
import Button from "../Button";
import { render, cleanup, getByText } from "@testing-library/react";

afterEach(cleanup);

describe("Button component", () => {
    test("Matches the snapshot", () => {
        const { asFragment } = render(<Button> Click me! </Button>);
        
        expect(asFragment().firstChild).toMatchSnapshot();
    });

    test("Has text", () => {
        const { container } = render(<Button> Click me! </Button>);
        const element = container.firstChild;
        const button = getByText(element, /^Click me!/);

        expect(button).not.toBe(null);
    });
});