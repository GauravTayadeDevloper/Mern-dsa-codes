import { useEffect, useRef } from "react";

export default function Assignment2() {
  const visitRef = useRef(0);
  const startTimeRef = useRef(Date.now());
  

  useEffect(() => {
    visitRef.current += 1; 
    const timer = setInterval(() => {
      const currentTime = Date.now() - startTimeRef.current;
      console.log("Session time (mili sec):", currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Session time (sec):", currentTime);
    };
  }, []);

  return (
    <div>
      <h2>Check console for session time</h2>
    </div>
  );
}
