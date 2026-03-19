import React, { useEffect, useMemo, useRef, useState } from "react";
import { paragraphs } from "../data/paragraphs";

const TypingTest = () => {

    const [mistakes, setMistakes] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const [paragraphText, setParagraphText] = useState(() => {
        return paragraphs[Math.floor(Math.random() * paragraphs.length)];
    });

    const [timer, setTimer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isTyping, setIsTyping] = useState(false);
    const inputRef = useRef(null);
    const typingTextRef = useRef(null);

    function buildMapped(text) {
        return text.split("").map((char, idx) => ({
            content: char,
            correct: false,
            incorrect: false,
            active: idx === 0,
        }));
    }

    const mapped = useMemo(() => {
        return buildMapped(paragraphText);
    }, [paragraphText]);

    const [typed, setTyped] = useState("");
    const [content, setContent] = useState(mapped);

    useEffect(() => {
        if (typed.length === 0) {
            // When nothing is typed, keep the UI at the "pre-start" state.
            setContent(mapped);
            setMistakes(0);
            setAccuracy(0);
            return;
        }

        const arr = typed.split("");
        // Deep copy so we don't mutate React state objects directly.
        const copy = content.map((item) => ({ ...item }));

        copy.forEach((char, idx) => {
            copy[idx].active = false;
            // Reset correctness state on every keystroke so backspace clears red.
            copy[idx].correct = false;
            copy[idx].incorrect = false;
        });

        // Cursor should always blink on the *next* character to type.
        // typed.length == index of the next required character (includes spaces).
        const activeIndex = typed.length;
        if (copy[activeIndex]) copy[activeIndex].active = true;
        
        let nextMistakes = 0;
        arr.forEach((char, idx) => {
            if (!copy[idx]) return;

            // Correct/incorrect per character; recalculated every change.
            if (copy[idx].content === char) {
                copy[idx].correct = true;
                copy[idx].incorrect = false;
            } else {
                copy[idx].correct = false;
                copy[idx].incorrect = true;
                nextMistakes += 1;
            }
        });

        setMistakes(nextMistakes);
        setContent(copy);
    }, [typed]);

    const handleTyping = (evt) => {
        if (isTyping == false) {
            setIsTyping(true);
        }
        setTyped(evt.target.value);
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

    // Keep the "active" character visible inside the scrolling paragraph.
    useEffect(() => {
        if (!typingTextRef.current) return;
        const activeEl = typingTextRef.current.querySelector(".active");
        if (!activeEl) return;
        activeEl.scrollIntoView({ block: "nearest" });
    }, [typed, timeLeft]);

    function handleTryAgain() {
        if (timer) clearInterval(timer);
        setTimer(null);
        setIsTyping(false);
        setTimeLeft(60);
        setMistakes(0);
        setAccuracy(0);
        setTyped("");

        // Pick a new paragraph for the next attempt.
        // If there's more than one paragraph, avoid repeating the same one.
        let nextParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
        if (paragraphs.length > 1 && nextParagraph === paragraphText) {
            nextParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
        }

        setParagraphText(nextParagraph);
        setContent(buildMapped(nextParagraph));

        // Keep the user's flow: cursor back into the typing input.
        inputRef.current?.focus();
    }
    

  return (
    <div className="body">

      <div className = "wrapper">
        
        <div className="content-wrapper">
            
            <div className="typing-text" ref={typingTextRef}>
                <input 
                    type = "text"
                    value = {typed} 
                    className="input-field"
                    onChange={handleTyping}
                    disabled={timeLeft <= 0}
                    ref={inputRef}
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
                            {typed.length === 0
                                ? 0
                                : Math.max(0, Math.round(((typed.length - mistakes) / typed.length) * 100))}
                            %
                        </span>
                    </li>
                    <li className="wpm">
                        <p>
                            WPM:
                        </p>
                        <span>
                            {typed.length === 0 || (60 - timeLeft) <= 0
                                ? 0
                                : Math.round(
                                    ((Math.max(typed.length - mistakes, 0) / 5) / ((60 - timeLeft) / 60))
                                  )}
                        </span>
                    </li>
                </ul>
                <button onClick={handleTryAgain}>
                    Try Again
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
