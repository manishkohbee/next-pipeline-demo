import { useEffect, useState } from "react";

function CountdownTimer() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2022-08-15T00:00:00+05:30") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                // days: Math.floor(difference / ())
                hours: Math.floor(difference / (1000 * 60 * 60) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div >
            <span>
                <span>{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</span>
                <span>:</span>
                <span>{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}</span>
                <span>:</span>
                <span>{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</span>
            </span>
        </div>
    );
}

export default CountdownTimer;