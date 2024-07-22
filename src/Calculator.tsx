import React, { useState } from "react";

const Calculator: React.FC = () => {
    // State variables for name, age, and calculated days lived
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [daysLived, setDaysLived] = useState<number | null>(null);

    // Handler for changes in the age input field
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // Update age state with the value from the input field
        setAge(event.target.valueAsNumber);
        const newAge = event.target.value;
        if (newAge === "") {
            setAge("");
        } else {
            setAge(Number(newAge));
        }
    };

    // Function to calculate days lived based on age
    const calculateAge = (): void => {
        // Check if age is a valid number
        if (typeof age === "number" && !isNaN(age)) {
            const days = age * 365; // Calculate days lived
            setDaysLived(Math.floor(days)); // Update days lived state
        } else {
            setDaysLived(null); // Set days lived state to null if age is invalid
        }
    };

    return (
        <>
            {/* Form for entering name and age, and displaying calculated days lived */}
            <form onSubmit={(e) => {e.preventDefault(); calculateAge();}}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter name here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setName(event.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={age !== undefined ? age : ""}
                        placeholder="Enter age in years"
                        onChange={handleAgeChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* Display the calculated days lived if available */}
            {daysLived !== null && (
                <p>{name}, you have lived approximately {daysLived} days.</p>
            )}
        </>
    );
}

export default Calculator;
