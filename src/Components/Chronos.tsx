import { useState, useEffect,  HTMLAttributes} from "react";

export default function Chronos(props: HTMLAttributes<HTMLSpanElement>){
    const [time, setTime] = useState<string>("00:00 AM");

    useEffect(() => {
        const interval = setInterval(() => {
            var time = new Date();
                const timeStr = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                setTime(timeStr);
          }, 1000);

          return () => clearInterval(interval);
    })
    
    return (
        <span {...props}>{time}</span>
    )
}