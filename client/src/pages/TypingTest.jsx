import React, { useState, useEffect, useRef } from "react";

const TypingTest = () => {

    // const [paragraphs, setParagraphs] = useState([
    //     "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let's not forget paper towels. Would 1 type of towel work for each of these things? Let's take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I've used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I'd probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary.",
    //     "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
    //     "Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers. It would have been nice to have some mace or pepper spray. He had been meaning to buy some but had never gotten around to it. As the mother bear took another step forward with her cubs in tow, she knew her fist with keys wasn't going to be an adequate defense for this situation.",
    //     "It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels. Now that the dream vacation was only a week away, the virus had stopped all air travel.",
    //     "They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others. It seemed to be an impossible no-win situation where not everyone would be happy no matter where they decided to eat which in itself would lead to a meltdown. Yet a decision needed to be made and it needed to be made quickly."
    // ]);
    
    // consts

    // const [charIndex, setCharIndex] = useState(0);

    // const [isTyping, setIsTyping] = useState(false);

    // const typingTextRef = useRef(null);
    // const inputFieldRef = useRef(null);

    // useEffect(() => {

    //     loadParagraph();

    //     inputFieldRef.current.addEventListener("input", inputTyping);
    //     document.addEventListener("keydown", () => inputFieldRef.current.focus());

    //     return () => {
    //         document.removeEventListener("keydown", () => inputFieldRef.current.focus());
    //     };

    // }, [charIndex, mistakes, timeLeft, isTyping]);



    // const loadParagraph = () => {

    //     const randomIDX = Math.floor(Math.random() * paragraphs.length);
    //     typingTextRef.current.innerHTML = "";
    //     paragraphs[randomIDX].split("").forEach((char) => {
    //         let span = `<span>${char}</span>`
    //         typingTextRef.current.innerHTML += span;
    //     });

    //     typingTextRef.current.querySelectorAll("span")[0].classList.add("active");
    // };


    // const initTyping = () => {
    //     let characters = typingTextRef.current.querySelectorAll("span");
    //     let typedChar = inputFieldRef.current.value.split("")[charIndex];
    //     if (charIndex < characters.length - 1 && timeLeft > 0) {
            // if (!isTyping) {
            //     setTimer(setInterval(initTimer, 1000));
            //     setIsTyping(true);
            // }
    //         if (typedChar == null) {
    //             if (charIndex > 0) {
    //                 setCharIndex((prevIndex) => prevIndex - 1);

    //                 if (characters[charIndex].classList.contains("incorrect")) {
    //                     setMistakes((prevMistakes) => prevMistakes - 1);
    //                 };

    //                 characters[charIndex].classList.remove("correct", "incorrect");
    //             }

    //         } else {

    //             if (characters[charIndex].innerText === typedChar) {
    //                 characters[charIndex].classList.add("correct");

    //             } else {
    //                 setMistakes((prevMistakes) => prevMistakes + 1);
    //                 characters[charIndex].classList.add("incorrect");
    //             }
    //             setCharIndex((prevIndex) => prevIndex + 1);
    //         }
    //         // 
    //         characters.forEach(span => span.classList.remove("active"));
    //         characters[charIndex].classList.add("active");
    
    //         let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
    //         wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;
            
    //         setMistakes(mistakes);
    //         setCharIndex(charIndex);

    //         wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
    //         wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;
            
    //         setTimeLeft(timeLeft - 1);

    //         // wpmTag.innerText = wpm;
    //         // mistakeTag.innerText = mistakes;
    //         // accTag.innerText = `${Math.round(100 - ((mistakes / charIndex) * 100))}%`;
            
    //     } else {
    //         clearInterval(timer);
    //         inputFieldRef.current.value = "";
    //     }
    // };

    // const initTimer = () => {
    //     if (timeLeft > 0) {
    //         setTimeLeft(timeLeft - 1);
    //         // timeTag.innerText = timeLeft;
    //         let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
    //         // wpmTag.innerText = wpm;
    //         wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;
    //     } else {
    //         clearInterval(timer);
    //     }
    // };

    // const resetGame = () => {
    //     loadParagraph();
    //     clearInterval(timer);
    //     setTimeLeft(maxTime);
    //     setCharIndex(0);
    //     setMistakes(0);
    //     setIsTyping(false);
    //     inputFieldRef.current.value = "";
    // }


    // const inputTyping = () => {
    //     const userInput = inputFieldRef.current.value;
    //     //logic for changing colors

    // }
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
            correct: true,
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
                setContent(copy);
            } else {
                copy[idx].correct = false;
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
                        <span key={idx} className={`${item.correct ? "correct" : "incorrect"} ${item.active ? "active" : ""}`}>
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
