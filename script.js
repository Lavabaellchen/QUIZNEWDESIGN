// Definition der Akkordtypen
const chordTypes = [
    { name: "Moll9", notes: ["C3", "D3", "Eb3", "G3", "Bb3"] },
    { name: "Moll11", notes: ["C3", "Eb3", "G3", "Bb3", "D4"] },
    { name: "Maj79", notes: ["C3", "E3", "G3", "B3", "D4"] },
    { name: "Dur9", notes: ["C3", "E3", "G3", "Bb3", "D4"] },
    { name: "Dur13", notes: ["C3", "E3", "G3", "B3", "D4", "A4"] },
    { name: "Durb9", notes: ["C3", "E3", "Gb3", "Bb3", "D4"] },
    { name: "Dur#11", notes: ["C3", "E3", "G#3", "Bb3", "D4", "A4"] },
    { name: "Dur#9", notes: ["C3", "E3", "G#3", "Bb3", "D4"] }
];

let currentChord = {};

// Funktion zum Zufällige Auswahl eines Akkords
function getRandomChord() {
    const randomIndex = Math.floor(Math.random() * chordTypes.length);
    return chordTypes[randomIndex];
}

// Funktion zum Abspielen des Akkords (simuliert)
function playChord(chord) {
    console.log(`Akkord ${chord.name} wird abgespielt.`);
    // Hier würde normalerweise die MIDI-Wiedergabe implementiert werden
}

// Funktion zum Anzeigen der Akkord-Buttons
function displayChordButtons() {
    const chordButtonsContainer = document.getElementById("chordButtons");
    chordButtonsContainer.innerHTML = "";

    chordTypes.forEach(chord => {
        const button = document.createElement("button");
        button.textContent = chord.name;
        button.classList.add("chord-button");
        button.addEventListener("click", () => {
            checkAnswer(chord);
        });
        chordButtonsContainer.appendChild(button);
    });
}

// Funktion zum Überprüfen der Benutzerantwort
function checkAnswer(selectedChord) {
    const resultMessage = document.getElementById("resultMessage");

    if (selectedChord === currentChord) {
        resultMessage.textContent = "Richtig!";
    } else {
        resultMessage.textContent = "Falsch!";
    }
}

// Event Listener für den "Akkord anhören" Button
const playChordBtn 
