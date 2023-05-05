import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";

test("App should be in the document",() => {
     render(<App/>);
    // screen.logTestingPlaygroundURL();
    const firstNameInput = screen.getByPlaceholderText(/first name/i);
    const lastNameInput = screen.getByPlaceholderText(/last name/i);

    fireEvent.click(firstNameInput);
    fireEvent.change(firstNameInput, {target :{ value : 'Ganesh'}})

    fireEvent.click(lastNameInput);
    fireEvent.change(lastNameInput,{ target: { value: 'Nikam' }})

    const h1 =screen.getByRole('heading', {
        name: /hi,/i
    })
    expect(h1).toHaveTextContent('Ganesh Nikam')
})