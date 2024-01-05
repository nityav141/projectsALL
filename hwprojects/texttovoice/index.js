// let speech=new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener("click",()=>{
//     speech.text=document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

if ('speechSynthesis' in window) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance();

    function convertText() {
        var inputText = document.getElementById('inputText').value;

        if (inputText !== '') {
            utterance.text = inputText;
            synth.speak(utterance);
        }
    }

    function stopSpeech() {
        synth.cancel();
    }
} else {
    alert("Sorry, your browser doesn't support the Web Speech API. Please try using a different browser.");
}