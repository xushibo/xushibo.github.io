const TEXT = "hello world.";
const output = document.querySelector(".prompt-text");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

async function typeOut() {
  for (let index = 1; index <= TEXT.length; index += 1) {
    output.textContent = TEXT.slice(0, index);
    await new Promise(resolve => window.setTimeout(resolve, 85 + Math.random() * 75));
  }
}

// Let the two command lines finish fading in before the prompt starts typing.
if (reduceMotion) output.textContent = TEXT;
else window.setTimeout(() => void typeOut(), 520);
