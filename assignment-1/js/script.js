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
