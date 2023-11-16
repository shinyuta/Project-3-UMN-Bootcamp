const paragraphs = [
    "Why do Americans have so many different types of towels? We have beach towels, hand towels, bath towels, dish towels, camping towels, quick-dry towels, and let's not forget paper towels. Would 1 type of towel work for each of these things? Let's take a beach towel. It can be used to dry your hands and body with no difficulty. A beach towel could be used to dry dishes. Just think how many dishes you could dry with one beach towel. I've used a beach towel with no adverse effects while camping. If you buy a thin beach towel it can dry quickly too. I'd probably cut up a beach towel to wipe down counters or for cleaning other items, but a full beach towel could be used too. Is having so many types of towels an extravagant luxury that Americans enjoy or is it necessary? I’d say it's overkill and we could cut down on the many types of towels that manufacturers deem necessary.",
    "The wave crashed and hit the sandcastle head-on. The sandcastle began to melt under the waves force and as the wave receded, half the sandcastle was gone. The next wave hit, not quite as strong, but still managed to cover the remains of the sandcastle and take more of it away. The third wave, a big one, crashed over the sandcastle completely covering and engulfing it. When it receded, there was no trace the sandcastle ever existed and hours of hard work disappeared forever.",
    "Her hand was balled into a fist with her keys protruding out from between her fingers. This was the weapon her father had shown her how to make when she walked alone to her car after work. She wished that she had something a little more potent than keys between her fingers. It would have been nice to have some mace or pepper spray. He had been meaning to buy some but had never gotten around to it. As the mother bear took another step forward with her cubs in tow, she knew her fist with keys wasn't going to be an adequate defense for this situation.",
    "It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels. Now that the dream vacation was only a week away, the virus had stopped all air travel.",
    "They needed to find a place to eat. The kids were beginning to get grumpy in the back seat and if they didn't find them food soon, it was just a matter of time before they were faced with a complete meltdown. Even knowing this, the solution wasn't easy. Everyone in the car had a different opinion on where the best place to eat would be with nobody agreeing with the suggestions of the others. It seemed to be an impossible no-win situation where not everyone would be happy no matter where they decided to eat which in itself would lead to a meltdown. Yet a decision needed to be made and it needed to be made quickly."
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const accTag = document.querySelector(".acc span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const randomIDX = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[randomIDX].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        accTag.innerText = `${Math.round(100 - ((mistakes / charIndex) * 100))}%`;
        
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);