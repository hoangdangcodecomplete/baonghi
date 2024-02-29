import React, { useEffect, useState } from "react";
import "./App.css";
import ringer from "./CuteHappyBirthdayMusic.mp3";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import heartimagepink from "./heartimagepink.jpg";
import happybirthdaycute from "./happy-birthday-cute.gif";
import { LineProgressBar } from "@frogress/line";

function App() {
  const [width, height] = useWindowSize();
  const audio = new Audio(ringer);
  audio.loop = true;

  const [isShowAll, setIsShowAll] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [percent, setPercent] = useState(0);

  const sampleText =
    "Hi em yêu ơi! \nChúc em một tuổi mới ngày càng thiệt xinh đẹp, thiệt nhiều sức khỏe, thành công ngày càng nhiều hơn nữa trong công việc và cuộc sống nghen. Mọi điều điều bình an may mắn sẽ đến với em. Cười tươi vui vẻ và yêu thương anh nhiều nhiều nữa nghen hehe <3. Mãi yêu bồ tèo của anh. ";

  useEffect(() => {
    if (isShowAll) {
      let typingTimeout: any;

      if (displayedText.length < sampleText.length) {
        // Schedule the next letter to be added to the displayed text
        typingTimeout = setTimeout(() => {
          console.log(sampleText.slice(0, displayedText.length + 1));

          setDisplayedText(sampleText.slice(0, displayedText.length + 1));
        }, 150);
      }

      // Clean up the timeout if the component unmounts or the text changes
      return () => clearTimeout(typingTimeout);
    }
  }, [displayedText, isShowAll]);

  const handleSetIsShowAll = () => {
    if (percent === 90) {
      setIsShowAll(true);
      audio.loop = true;
      audio.play();
    } else {
      setPercent(percent + 10);
    }
  };

  console.log("displayedText", displayedText.length);

  return (
    <div
      style={{ backgroundImage: isShowAll ? `url(${heartimagepink})` : "" }}
      className="App"
    >
      {!isShowAll && (
        <>
          <div id="heart" onClick={handleSetIsShowAll}></div>
          <div className="text-loves">{percent}% loves</div>
          <LineProgressBar
            percent={percent}
            progressColor="linear-gradient(to right, #ff655b 60%, #fd297b)"
            containerColor="#f0d4da"
            rounded={36}
            stripe
          />
        </>
      )}
      {isShowAll && (
        <>
          <Confetti width={width} height={height} />
          <div className="App-logo" />
          <div className="text-letter">
            <div className="text-display">
              <img
                className="gif-happy-birthday"
                src={happybirthdaycute}
                alt="loading..."
              />
              <img
                className="gif-happy-birthday"
                src={happybirthdaycute}
                alt="loading..."
              />
              <img
                className="gif-happy-birthday"
                src={happybirthdaycute}
                alt="loading..."
              />
            </div>
            <div className="text-letter-info">{displayedText}</div>
            {displayedText.length === 290 && (
              <>
                <div className="signature">
                  <img
                    className="gif-happy-birthday"
                    src={happybirthdaycute}
                    alt="loading..."
                  />
                  <img
                    className="gif-happy-birthday"
                    src={happybirthdaycute}
                    alt="loading..."
                  />
                  <img
                    className="gif-happy-birthday"
                    src={happybirthdaycute}
                    alt="loading..."
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
