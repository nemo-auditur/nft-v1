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

const singleSymbolDisplay = (integer: number) => {
  switch (integer) {
    case 0:
      return (
        <div>
          <img alt="A strange symbol..." src={zeroChar} width="75%" />;
        </div>
      );
    case 1:
      return (
        <div>
          <img alt="A strange symbol..." src={firstChar} width="75%" />
        </div>
      );
    case 2:
      return (
        <div>
          <img alt="A strange symbol..." src={secondChar} width="75%" />
        </div>
      );
    case 3:
      return (
        <div>
          <img alt="A strange symbol..." src={thirdChar} width="75%" />
        </div>
      );
    case 4:
      return (
        <div>
          <img alt="A strange symbol..." src={fourthChar} width="75%" />
        </div>
      );
    case 5:
      return (
        <div>
          <img alt="A strange symbol..." src={fithChar} width="75%" />
        </div>
      );
    case 6:
      return (
        <div>
          <img alt="A strange symbol..." src={sixthChar} width="75%" />
        </div>
      );
    case 7:
      return (
        <div>
          <img alt="A strange symbol..." src={seventhChar} width="75%" />
        </div>
      );
    case 8:
      return (
        <div>
          <img alt="A strange symbol..." src={eighthCar} width="75%" />
        </div>
      );
    case 9:
      return (
        <div>
          <img alt="A strange symbol..." src={ninethChar} width="75%" />
        </div>
      );
    default:
      break;
  }
};

const symbolDisplay = (integer: number) => {
  let integerToString: string = integer.toString();
  let integerTens: number = parseInt(integerToString.charAt(0));
  let integerUnits: number = parseInt(integerToString.charAt(1));

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {integer.toString().length < 2 ? (
        <>
          <div>
            <img src={zeroChar} alt="A strange symbol..." width="75%" />
          </div>
          {singleSymbolDisplay(integer)}
        </>
      ) : (
        <>
          {singleSymbolDisplay(integerTens)}
          {singleSymbolDisplay(integerUnits)}
        </>
      )}
    </div>
  );
};
export default symbolDisplay;
