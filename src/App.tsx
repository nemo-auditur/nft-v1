import "./App.css";
import Countdown from "react-countdown";
import symbolDisplay from "./symbolDisplay";

function App() {
  type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  };

  let date: Date = new Date();
  date.setDate(date.getDate() + 2);

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
    <div className="Appcontainer">
      <Countdown date={date} renderer={renderer} />
    </div>
  );
}

export default App;
