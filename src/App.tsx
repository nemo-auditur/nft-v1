import "./App.css";
import Countdown from "react-countdown";
import Spacer from "./Components/Spacer";
import symbolDisplay from "./symbolDisplay";

function App() {
  type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  };

  let date = new Date();
  date.setDate(date.getDate() + 2);

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds }: Props) => {
    // Render a countdown
    return (
      <div className="symbolContainer">
        <span>{symbolDisplay(days)}</span>
        <Spacer />
        <span>{symbolDisplay(hours)}</span>
        <Spacer />
        <span>{symbolDisplay(minutes)}</span>
        <Spacer />
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
