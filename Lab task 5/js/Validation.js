function analyzeText() {
    let text = document.getElementById("paragraphInput").value;

    let characters = text.length;
    let wordsArray = text.trim().split(" ");
    let wordCount = 0;

    for (let i=0; i < wordsArray.length; i++){
      if (wordsArray[i] !== ""){
            wordCount++;
        }
    }
    let reversedText = text.split("").reverse().join("");

    document.getElementById("displayResult").innerHTML =
        "<p>Total Characters: " + characters + "</p>" +
        "<p>Total Words: " + wordCount + "</p>" +
        "<p>Reversed Text: " + reversedText + "</p>";
}
