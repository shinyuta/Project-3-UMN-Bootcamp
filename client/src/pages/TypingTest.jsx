import React, { useState, useEffect, useRef } from "react";

const TypingTest = () => {

    const [mistakes, setMistakes] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [direction, setDirection] = useState("forward")

    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTyping, setIsTyping] = useState(false);
    
    const text = "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let's not forget paper towels. Would 1 type of towel work for each of these things? Let's take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I've used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I'd probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary.";
    const mapped = text.split("").map((char, idx) => {
        return {
            content: char,
            correct: false,
            incorrect: false,
            active: idx == 0 ? true: false,
        };
    });

    const [typed, setTyped] = useState("");
    const [content, setContent] = useState(mapped);

    useEffect(() => {
        const arr = typed.split("");
        const copy = [...content];

        copy.forEach((char, idx) => {
            copy[idx].active = false;
        });

        // direction
        if (direction == "backward" && charIndex > 0) {
            copy[charIndex - 1].active = true;
            setCharIndex((char) => char-1);
        } else if (direction == "backward" && charIndex == 0) {
            copy[charIndex].active = true;  
            setCharIndex(0);
        } else {
            copy[charIndex].active = true;
            setCharIndex((char) => char+1);
        }
        
        arr.forEach((char, idx) => {
            // correct incorrect
            if (content[idx].content == char) {
                copy[idx].correct = true;
                copy[idx].incorrect = false;
                setContent(copy);
            } else {
                copy[idx].correct = false;
                copy[idx].incorrect = true;
                setContent(copy);
                setMistakes(mistakes + 1);
            }
        });
    }, [typed, direction]);

    const handleTyping = (evt) => {
        if (isTyping == false) {
            setIsTyping(true);
        }
        setTyped(evt.target.value);
    };

    const handleKeyDown = (evt) => {
        let key = evt.key;
        if (key === "Backspace" || key === "Delete") {
            setDirection("backward");
        } else {
            setDirection("forward");
        }
        console.log(key);
    };

    // timer
    useEffect(() => {

        if (isTyping && timeLeft === 60) {
            setTimer(setInterval(() => {
                setTimeLeft((t) => (t-1));
            }, 1000));
        }
        return () => clearInterval(timer);

    }, [isTyping]);
    
    useEffect(() => {

        if (timeLeft <= 0) {
            clearInterval(timer);
        }

    }, [timeLeft]);
    

  return (
    <div className="body">

      <div className = "wrapper">
        
        <div className="content-wrapper">
            
            <div className="typing-text">
                <input 
                    type = "text"
                    value = {typed} 
                    className="input-field"
                    onChange={handleTyping}
                    onKeyDown={handleKeyDown}
                    disabled={timeLeft <= 0}
                />
                <p className = "paragraph">
                    {content.map((item, idx) => (
                        <span key={idx} className={`${item.correct ? "correct" : ""} ${item.incorrect ? "incorrect" : ""} ${item.active ? "active" : ""}`}>
                            {item.content}
                        </span>
                    ))}
                </p>
            </div>
            <div className="content">
                <ul className="results">
                    <li className = "time">
                        <p>
                            Time Left:
                        </p>
                        <span>
                            <b>{timeLeft}</b>s
                        </span>
                    </li>
                    <li className="mistake">
                        <p>
                            Mistakes:
                        </p>
                        <span>{mistakes}</span>
                    </li>
                    <li className="acc">
                        <p>
                            ACC:
                        </p>
                        <span>
                            {Math.round(100 - ((mistakes / (charIndex+1)) * 100))}%
                        </span>
                    </li>
                    <li className="wpm">
                        <p>
                            WPM:
                        </p>
                        <span>
                            {Math.round((((charIndex+1) - mistakes) / 5) / (60 - timeLeft) * 60)}
                        </span>
                    </li>
                </ul>
                <button>
                    Try Again
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
