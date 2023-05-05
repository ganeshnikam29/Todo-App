import React, {useState} from "react";

export default function Form() {
    // let firstName = '';
    // let lastName = '';
    const [firstName , setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    function handleReset() {
        firstName = '';
        lastName = '';
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                name ="first name"
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}