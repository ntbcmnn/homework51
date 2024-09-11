import './App.css'
import {useState} from "react";
import Number from "./components/Number/Number.tsx";

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const changeNumbers = (): void => {
        const newNumbers: number[] = [];

        while (newNumbers.length < numbers.length) {
            const randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }
        setNumbers(newNumbers.sort((a: number, b: number) => a - b));
    };

    return (
        <>
            <div className="container">
                <div className="numbers-container">
                    {numbers.map((num: number, index: number) => (<Number key={index} num={num}/>))}
                </div>

                <button type={"button"} className={"changeBtn"} onClick={changeNumbers}>
                    <img src="https://www.svgrepo.com/show/18461/refresh.svg" alt="regenerate numbers"/>
                </button>
            </div>
        </>
    )
};

export default App