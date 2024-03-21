import "./App.css";
import { Stratagem, ALL_STRATAGEMS } from "./Data";
import { useEffect, useState } from "react";
import StratagemArrow from "./components/StratagemArrow";
import GameBoard from "./components/GameBoard";
import UpcomingStratagem from "./components/StrategemUpcoming";
import music from "./assets/sounds/music.wav";
import jump from "./assets/sounds/jump.wav";
import oops from "./assets/sounds/oops.wav";
import success from "./assets/sounds/success.wav";

// REFACTOR code
// Sound management
// Attributions
// Style --- dampen colors
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stratagemList, setStratagemList] = useState<Stratagem[]>([]);
  const [incorrectKey, setIncorrectKey] = useState(false);
  const [currentStratagemIndex, setCurrentStratagemIndex] = useState(0);

  const startGame = () => {
    setStratagemList([
      ALL_STRATAGEMS[Math.floor(Math.random() * ALL_STRATAGEMS.length)],
      ALL_STRATAGEMS[Math.floor(Math.random() * ALL_STRATAGEMS.length)],
      ALL_STRATAGEMS[Math.floor(Math.random() * ALL_STRATAGEMS.length)],
    ]);
    setIsPlaying(true);
    const audio = new Audio(music);
    audio.volume = 0.3;
    audio.play();

    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
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
      if (code === stratagemList[0]?.code[currentStratagemIndex || 0]) {
        setCurrentStratagemIndex((prevIndex) => prevIndex + 1);
        setIncorrectKey(false);
        const jumpAudio = new Audio(jump);
        jumpAudio.volume = 0.5;
        jumpAudio.play();
      } else if (code) {
        setIncorrectKey(true);
        setCurrentStratagemIndex(0);
        const oopsAudio = new Audio(oops);
        oopsAudio.volume = 0.5;
        oopsAudio.play();
      }
    };

    window.addEventListener("keydown", currentStratTest);

    return () => {
      window.removeEventListener("keydown", currentStratTest);
    };
  }, [currentStratagemIndex, stratagemList]);

  useEffect(() => {
    if (currentStratagemIndex >= stratagemList[0]?.code.length && isPlaying) {
      setTimeout(() => {
        setStratagemList(() => [
          stratagemList[1],
          stratagemList[2],
          ALL_STRATAGEMS[Math.floor(Math.random() * ALL_STRATAGEMS.length)],
        ]);
        setCurrentStratagemIndex(0);
        const successSound = new Audio(success);
        successSound.volume = 0.8;
        successSound.play();
      }, 100);
    }
  }, [currentStratagemIndex, stratagemList, isPlaying]);

  return (
    <main>
      {isPlaying ? (
        <section className="flex-col justify-center">
          <UpcomingStratagem stratagemList={stratagemList} />
          <GameBoard
            incorrectKey={incorrectKey}
            setIncorrectKey={(isKeyIncorrect: boolean) =>
              setIncorrectKey(isKeyIncorrect)
            }
          >
            <>
              {stratagemList[0]?.code.map((direction, i) => (
                <StratagemArrow
                  key={i}
                  currentStratagemIndex={currentStratagemIndex}
                  stratagemDirection={direction}
                  controlPosition={i}
                />
              ))}
            </>
          </GameBoard>
        </section>
      ) : (
        <input
          className="text-white bg-brightblue cursor-pointer hover:bg-brightblue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:brightblue dark:hover:brightblue focus:outline-none dark:focus:ring-blue-800"
          type="button"
          value="Play"
          onClick={() => startGame()}
        />
      )}
      <div>
        {/* 
         Attribution so far
        <ul>
          <li>
            S:{" "}
            <a href="https://freesound.org/people/Scrampunk/sounds/345299/">
              OKAY!
            </a>{" "}
            by <a href="https://freesound.org/people/Scrampunk/">Scrampunk</a> |{" "}
            <span>License: </span>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              Attribution 4.0
            </a>
          </li>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
          ></a>
          <li>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              S:{" "}
            </a>
            <a href="https://freesound.org/people/joshuaempyre/sounds/251461/">
              Arcade Music Loop.wav
            </a>{" "}
            by{" "}
            <a href="https://freesound.org/people/joshuaempyre/">
              joshuaempyre
            </a>{" "}
            | <span>License: </span>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              Attribution 4.0
            </a>
          </li>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
          ></a>
          <li>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              S:{" "}
            </a>
            <a href="https://freesound.org/people/WIM/sounds/9020/">oops.wav</a>{" "}
            by <a href="https://freesound.org/people/WIM/">WIM</a> |{" "}
            <span>License: </span>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              Attribution 4.0
            </a>
          </li>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
          ></a>
          <li>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
            >
              S:{" "}
            </a>
            <a href="https://freesound.org/people/cabled_mess/sounds/350905/">
              Jump_C_05
            </a>{" "}
            by{" "}
            <a href="https://freesound.org/people/cabled_mess/">cabled_mess</a>{" "}
            | <span>License: </span>
            <a
              href="http://creativecommons.org/publicdomain/zero/1.0/"
            >
              Creative Commons 0
            </a>
          </li>
          <a
            href="http://creativecommons.org/publicdomain/zero/1.0/"
          ></a>
        </ul> */}
      </div>
    </main>
  );
}

export default App;
