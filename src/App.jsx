import { useState } from "react";
import TextInput from "./components/TextInput";
import RunningText from "./components/RunningText";
import "./App.css";

function App() {
    const [text, setText] = useState("Привіт, React!");
    const [speed, setSpeed] = useState(10);
    const [isRunning, setIsRunning] = useState(true);

    return (
        <div className="app">
            <h1>Бігучий рядок</h1>

            <TextInput
                text={text}
                setText={setText}
            />

            <div className="controls">
                <label>
                    Швидкість руху:
                    <input
                        type="range"
                        min="2"
                        max="20"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                    />
                    {speed} сек.
                </label>

                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Зупинити" : "Запустити"}
                </button>
            </div>

            <RunningText
                text={text}
                speed={speed}
                isRunning={isRunning}
            />
        </div>
    );
}

export default App;