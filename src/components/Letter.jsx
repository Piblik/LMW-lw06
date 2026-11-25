import { useState } from "react";

function Letter({ char }) {
    const [randomColor] = useState(() => {
        const colors = [
            "#FF6B6B",
            "#FFD93D",
            "#6BCB77",
            "#4D96FF",
            "#B983FF",
            "#FF8E53",
            "#F06595",
            "#48CAE4"
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    });

    return (
        <span
            className="letter"
            style={{ backgroundColor: randomColor }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    );
}

export default Letter;
