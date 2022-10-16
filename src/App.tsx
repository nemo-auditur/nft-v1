import { useState } from "react";
import "./App.css";
import Countdown from "react-countdown";
import symbolDisplay from "./symbolDisplay";
import LandingPage from "./landingPage";

const App = () => {
  type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  };

  let date: Date = new Date();
  date.setMinutes(date.getMinutes() + 1);

  const [displayLanding, setDisplayLanding] = useState<boolean>(false);

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds }: Props) => {
    // Render a countdown
    return (
      <div className="symbolContainer">
        <span>{symbolDisplay(days)}</span>
        <span>{symbolDisplay(hours)}</span>
        <span>{symbolDisplay(minutes)}</span>
        <span>{symbolDisplay(seconds)}</span>
      </div>
    );
  };

  return (
    <>
      {!displayLanding ? (
        <div className="CountdownContainer">
          <Countdown
            date={date}
            renderer={renderer}
            onComplete={() =>
              setDisplayLanding((displayLanding) => !displayLanding)
            }
          />
        </div>
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default App;
