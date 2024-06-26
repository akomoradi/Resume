function typingEffect() {
    const contactTexts = shuffleArray(["برنامه نویس"]);
    const typedtext = document.getElementsByClassName("typedtextfa")[0];
    let removing = false;
    let idx = (char = 0);
    setInterval(() => {
        if (char < contactTexts[idx].length)
            typedtext.innerHTML += contactTexts[idx][char];
        if (char == contactTexts[idx].length + 15) removing = true;
        if (removing)
            typedtext.innerHTML = typedtext.innerHTML.substring(
                0,
                typedtext.innerHTML.length - 1
            );
        char++;
        if (typedtext.innerHTML.length === 0) {
            if (idx === contactTexts.length - 1) idx = 0;
            else idx++;
            char = 0;
            removing = false;
        }
    }, 150);
}
typingEffect();

function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}