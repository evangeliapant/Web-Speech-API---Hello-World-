function speak() {
    // Check if SpeechSynthesis is available
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance('Hello World');
        speech.lang = 'en-US';
        speech.pitch = 1; // Can vary between 0 and 2
        speech.rate = 1; // Can vary between 0.1 and 10
        speech.volume = 1; // Can vary between 0 and 1

        window.speechSynthesis.speak(speech);
    } else {
        alert('Sorry, your browser does not support speech synthesis.');
    }
}

function startRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;  // Set to false for single utterance
        recognition.interimResults = false;  // Set to true if you want to see real-time transcription

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('textOutput').textContent = transcript;
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
            document.getElementById('textOutput').textContent = 'Error occurred in recognition: ' + event.error;
        };

        recognition.onend = function() {
            console.log('Recognition ended');
        };

        recognition.start();
    } else {
        alert('Sorry, your browser does not support speech recognition.');
    }
}