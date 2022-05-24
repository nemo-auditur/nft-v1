import "./symbolDisplay.css";
import zeroChar from "./assets/0.png";
import firstChar from "./assets/1.png";
import secondChar from "./assets/2.png";
import thirdChar from "./assets/3.png";
import fourthChar from "./assets/4.png";
import fithChar from "./assets/5.png";
import sixthChar from "./assets/6.png";
import seventhChar from "./assets/7.png";
import eighthCar from "./assets/8.png";
import ninethChar from "./assets/9.png";

const secondsUnitDisplay = (seconds: number) => {
  switch (seconds) {
    case 0:
      return (
        <div>
          <img src={zeroChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 1:
      return (
        <div>
          <img src={firstChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 2:
      return (
        <div>
          <img src={secondChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 3:
      return (
        <div>
          <img src={thirdChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 4:
      return (
        <div>
          <img src={fourthChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 5:
      return (
        <div>
          <img src={fithChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 6:
      return (
        <div>
          <img src={sixthChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 7:
      return (
        <div>
          <img src={seventhChar} height="100px" width="100px" alt="" />
        </div>
      );
    case 8:
      return (
        <div>
          <img src={eighthCar} height="100px" width="100px" alt="" />
        </div>
      );
    case 9:
      return (
        <div>
          <img src={ninethChar} height="100px" width="100px" alt="" />
        </div>
      );
    default:
      break;
  }
};

const symbolDisplay = (seconds: number) => {
  let secondsToString = seconds.toString();
  let secondsTens = parseInt(secondsToString.charAt(0));
  let secondsUnits = parseInt(secondsToString.charAt(1));
  console.log("test", seconds);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {seconds.toString().length < 2 ? (
        <>
          <img
            src={zeroChar}
            alt="A strange symbol..."
            height="100px"
            width="100px"
          />
          <div>{secondsUnitDisplay(seconds)}</div>
        </>
      ) : (
        <>
          <div>{secondsUnitDisplay(secondsTens)}</div>
          <div>{secondsUnitDisplay(secondsUnits)}</div>
        </>
      )}
    </div>
  );
};
export default symbolDisplay;
