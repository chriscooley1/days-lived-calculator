import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");

    return (
        <>
            <form>
                <div>
                    <label htmlFor="...">Name</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter name here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setName(event.target.value)}/>
                </div>
            </form>
        </>
    );
}

export default Calculator;