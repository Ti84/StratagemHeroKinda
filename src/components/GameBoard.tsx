import { useEffect, useState } from "react";

type GameBoardProps = {
  incorrectKey: boolean;
  children: React.ReactNode;
  setIncorrectKey: (isIncorrectKey: boolean) => void;
};

const GameBoard = ({ incorrectKey, children, setIncorrectKey }: GameBoardProps) => {
  const [isWigglin, setIsWigglin] = useState(false);

  // Needs a refactor. Start animation over on new key input.
  // Make it so it is not effect driven.
  useEffect(() => {
    if (incorrectKey) {
      setIsWigglin(true);
      const timeoutId = setTimeout(() => {setIsWigglin(false); setIncorrectKey(false);}, 500);
      return () => {
        setIsWigglin(false);
        setIncorrectKey(false);
        clearTimeout(timeoutId);
      };
    }
  }, [incorrectKey, setIncorrectKey]);

  return (
    <div
      className={`flex justify-center mt-7 ${isWigglin ? "animate-[wiggle_0.25s_linear_infinite]" : ""}`}
    >
      {children}
    </div>
  );
};

export default GameBoard;
