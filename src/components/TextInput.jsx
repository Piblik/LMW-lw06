function TextInput({ text, setText }) {
    return (
        <div className="text-input">
            <label>Введіть текст:</label>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введіть будь-який текст..."
            />
        </div>
    );
}

export default TextInput;