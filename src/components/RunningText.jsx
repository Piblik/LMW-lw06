import Letter from "./Letter";

function RunningText({ text, speed, isRunning }) {
    return (
        <div className="running-container">
            <div
                className={`running-track ${isRunning ? "running" : "paused"}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...text].map((char, index) => (
                    <Letter key={index} char={char}/>
                ))}
            </div>
        </div>
    );
}

export default RunningText;