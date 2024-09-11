import './App.css'
import {useState} from "react";
import Number from "./components/Number/Number.tsx";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const changeNumbers = () => {
        const newNumbers: number[] = [];

        while (newNumbers.length < numbers.length) {
            const randomNum = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            if (!newNumbers.includes(randomNum)) {
                newNumbers.push(randomNum);
            }
        }

       setNumbers(newNumbers.sort((a, b) => a - b));
    };

    return (
        <>
            <div className="container">
                <button type={"button"} className={"changeBtn"} onClick={changeNumbers}>Click</button>

                {numbers.map((num, index) => (
                    <Number key={index} num={num}/>
                ))}
            </div>
        </>
    )
};

export default App

