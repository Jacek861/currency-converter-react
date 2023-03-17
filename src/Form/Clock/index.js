import { useState } from "react";

export const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    setInterval(() => { setCurrentDate(new Date()) }, 1000);

    return (
        <div>
            {currentDate.toLocaleDateString("en-EN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            })}
        </div>
    )
};

