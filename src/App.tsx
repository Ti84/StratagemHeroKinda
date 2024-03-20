import "./App.css";
import { Stratagem, ALL_STRATAGEMS } from "./Data";
import { useEffect, useState } from "react";
import StratagemArrow from "./components/StratagemArrow";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stratagemList, setStratagemList] = useState<Stratagem[]>([]);
  const [currentStratagemIndex, setCurrentStratagemIndex] = useState(0);

  const startGame = () => {
    // TODO: Make a preview list of 3 or whatever.
    setStratagemList([
      ALL_STRATAGEMS[Math.floor(Math.random() * ALL_STRATAGEMS.length)],
    ]);
    setIsPlaying(true);
  };

  useEffect(() => {
    const currentStratTest = (e: unknown) => {
      const codeAsString = (keyCode: string) => {
        switch (keyCode) {
          case "ArrowUp":
          case "KeyW":
            return "up";
          case "ArrowRight":
          case "KeyD":
            return "right";
          case "ArrowDown":
          case "KeyS":
            return "down";
          case "ArrowLeft":
          case "KeyA":
            return "left";
          default:
            break;
        }
      };

      // LEARN UNKNOWNS NERD
      const code: unknown = codeAsString((e as KeyboardEvent).code);
      if (
        stratagemList.length > 0 &&
        code === stratagemList[0]?.code[currentStratagemIndex || 0]
      ) {
        setCurrentStratagemIndex((prevIndex) => prevIndex + 1);
      }
    };

    window.addEventListener("keydown", currentStratTest);

    return () => {
      window.removeEventListener("keydown", currentStratTest);
    };
  }, [currentStratagemIndex, stratagemList]);

  return (
    <main>
      {isPlaying ? (
        <section>
          <div>
            {stratagemList.map(({ icon, name }, i) => (
              <img className="w-[40px]" key={i} src={icon} alt={name} />
            ))}
          </div>
          <div>
            {stratagemList[0]?.code.map((direction, i) => (
              <StratagemArrow
                key={i}
                currentStratagemIndex={currentStratagemIndex}
                stratagemDirection={direction}
                controlPosition={i}
              />
            ))}
          </div>
        </section>
      ) : (
        <input
          className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          value="Play"
          onClick={() => startGame()}
        />
      )}
    </main>
  );
}

export default App;
