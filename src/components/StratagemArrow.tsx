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
    console.log(currentStratagemIndex, controlPosition);
  return (
    <p
      key={`direction${controlPosition}`}
      className={`${
        typeof currentStratagemIndex !== "undefined" &&
        currentStratagemIndex > controlPosition
          ? "font-bold"
          : ""
      }`}
    >
      {stratagemDirection}
    </p>
  );
};

export default StratagemArrow;
