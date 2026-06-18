// original words from the toy, one array per sentence part
const classicSet = [
    ["The turkey", "Mom", "The dog", "My teacher", "The elephant", "The cat"],
    ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
    ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
    ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
    ["on the moon", "on the chair", "in my spagetti", "in my soup", "on the grass", "in my shoes"]
];

// track which word index is chosen for each of the 5 parts
let activeSet = classicSet;
let choices = [0, 0, 0, 0, 0];

// show the chosen word on one button label
function updateButton(part) {
    const word = activeSet[part];
    document.querySelector(`#word${part}`).textContent = word[choices[part]];
}

// refresh all 5 labels with FOR loop
function updateAllLabels() {
    for (let part = 0; part < 5; part ++) {
        updateLabel(part);
    }
}

// show the starting words when the page loads
updateAllLabels();

// cycle a part to its NEXT word wrapping around to the start
function cycleWord(part) {
    const words = activeSet[part];
    choices[part] = choices[part] + 1;
    if (choices[part] >= words.length) {
        choices[part] = 0;
    }
    updateLabel(part);
}

// one click listener on the container to catch all 5 buttons
const machine = document.querySelector("#machine");
machine.addEventListener("click", function (event) {
    const button = event.target.closest(".word-btn");
    if (button) {
        const part = Number(button.getAttribute("data-part"));
        cycleWord(part);
    }
});

// join the 5 chosen words into one sentence
function buildStory() {
    let sentence = "";
    for (let part = 0; part < 5; part ++) {
        const words =  activeSet[part];
        if (part < 4) {
            sentence += '${words[choices[part]]} ';
        } else {
            sentence += `${words[choices[part]]}`;
        }
    }
    return sentence;
}

//print the story to the output panel
const storyPanel = document.querySelector("#story");
function showStory() {
    storyPanel.innerHTML = `<p class="finished">${buildStory()}</p>`;
}

// run showStory() when the "Tell Story" button is clicked
const tellBtn = document.querySelector("#tell-btn");
tellBtn.addEventListener("click", showStory);