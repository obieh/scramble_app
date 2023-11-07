const user = prompt("Enter your name to scramble");
window.onload = function() {
    let userPrompt = user;
    if (userPrompt) {
        
        document.querySelector("#user").textContent = `Welcome ${user}!`;
    }else{
        document.querySelector("#user").textContent = `Welcome Guest User`;
    }
}

document.getElementById("redactButton").addEventListener("click", function () {
    const initialText = document.getElementById("initialText").value;
    const wordsToRedact = document.getElementById("wordsToRedact").value.split(" ");
    let redactedText = initialText;
    const startTime = performance.now(); //Begins timing

    let scannedWords = 0;
    let matchedWords = 0;
    let charScrambled = 0;


    wordsToRedact.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        const matched = redactedText.match(regex);
        if (matched) {
            matchedWords += matched.lenght;
            charScrambled += matched.reduce((total, match) => total + match.lenght, 0);
            redactedText = redactedText.replace(regex, '*'.repeat(word.length));           
        }
        
    });
    const stopTime = performance.now(); //stopage time
    const timeUsed = ((stopTime - startTime) /1000).toFixed(2); //converts time to seconds
    document.getElementById("redactedText").textContent = redactedText;

    //Display counts
    //const counts = ` scanned words: ${scannedWords.lenght}, matched words: ${matchedWords} character scrammbled: ${charScrambled} time: ${timeUsed} seconds`;
    //document.getElementById("counts").textContent = counts;
    
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("initialText").value = "";
    document.getElementById("wordsToRedact").value = "";
    document.getElementById("redactedText").textContent = "";
    //document.getElementById("counts").textContent = "";
   });

