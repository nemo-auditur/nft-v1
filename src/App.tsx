import React from "react";
import "./App.css";
import Countdown from "react-countdown";
import secondsDisplay from "./lib/seconds";

function App() {
  type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  };

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }: Props) => {
    secondsDisplay(seconds);
    // Render a countdown
    return <span>{secondsDisplay(seconds)}</span>;
  };

  return (
    <div className="Appcontainer">
      <Countdown date={Date.now() + 13000} renderer={renderer} />
    </div>
  );
}

export default App;
