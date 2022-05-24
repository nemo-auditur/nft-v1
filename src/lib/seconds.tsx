import zeroChar from "../assets/0.png";
import firstChar from "../assets/1.png";
import secondChar from "../assets/2.png";
import thirdChar from "../assets/3.png";
import fourthChar from "../assets/4.png";
import fithChar from "../assets/5.png";
import sixthChar from "../assets/6.png";
import seventhChar from "../assets/7.png";
import eighthCar from "../assets/8.png";
import ninethChar from "../assets/9.png";

const secondsDisplay = (seconds: number) => {
  let secondsInString = seconds.toString();
  if (secondsInString.length < 2) {
    console.log("seconds", seconds);
  } else {
    console.log(secondsInString.charAt(0));
  }
  switch (seconds) {
    case 0:
      return (
        <span>
          <img src={zeroChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 1:
      return (
        <span>
          <img src={firstChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 2:
      return (
        <span>
          <img src={secondChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 3:
      return (
        <span>
          <img src={thirdChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 4:
      return (
        <span>
          <img src={fourthChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 5:
      return (
        <span>
          <img src={fithChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 6:
      return (
        <span>
          <img src={sixthChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 7:
      return (
        <span>
          <img src={seventhChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 8:
      return (
        <span>
          <img src={eighthCar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    case 9:
      return (
        <span>
          <img src={ninethChar} height="100px" width="100px" alt="" />
          {seconds}
        </span>
      );
    default:
      break;
  }
};

export default secondsDisplay;
