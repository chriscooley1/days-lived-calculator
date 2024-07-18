import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [daysLived, setDaysLived] = useState<number | null>(null);

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAge(event.target.valueAsNumber);
        const newAge = event.target.value;
        if (newAge === "") {
            setAge("");
        } else {
            setAge(Number(newAge));
        }
    };

    const calculateAge = (): void => {
        if (typeof age === "number" && !isNaN(age)) {
            const days = age * 365;
            setDaysLived(Math.floor(days));
        } else {
            setDaysLived(null);
        }
    };

    return (
        <>
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
            {daysLived !== null && (
                <p>{name}, you have lived approximately {daysLived} days.</p>
            )}
        </>
    );
}

export default Calculator;
