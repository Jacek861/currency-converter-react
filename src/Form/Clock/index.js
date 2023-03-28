import { useState, useEffect } from "react";
import { StyledClock } from "./style";

export const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <StyledClock>
            {currentDate.toLocaleDateString("en-EN", {
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
            {", "}
            {currentDate.toLocaleTimeString()}
        </StyledClock>
    );
};

