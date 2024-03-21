import arrowEmpty from "../assets/arrow-empty.svg";
import arrowFilled from "../assets/arrow-filled.svg";

type StratagemArrowProps = {
  currentStratagemIndex?: number;
  stratagemDirection?: string;
  controlPosition: number;
};

const StratagemArrow = ({
  currentStratagemIndex,
  controlPosition,
  stratagemDirection,
}: StratagemArrowProps) => {
  const getArrowDirection = () => {
    switch (stratagemDirection) {
      case "down":
        return "";
      case "up":
        return "rotate-180";
      case "left":
        return "rotate-90";
      case "right":
        return "-rotate-90";
      default:
        return "";
    }
  };

  const arrowDirection = getArrowDirection();

  return (
    <img
      src={
        typeof currentStratagemIndex !== 'undefined' && currentStratagemIndex > controlPosition
          ? arrowFilled
          : arrowEmpty
      }
      key={`direction${controlPosition}`}
      className={`${arrowDirection} w-12`}
    />
  );
};

export default StratagemArrow;
