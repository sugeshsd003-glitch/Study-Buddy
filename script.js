function getText() {
return document.getElementById("notes").value.trim();
}

// --------------------
// SUMMARIZER
// --------------------
function summarize() {

let text = getText();
if (!text) return alert("Enter notes first!");

let sentences = text.split(".").filter(s => s.length > 10);

let summary = sentences.slice(0, 3).join(". ");

document.getElementById("output").innerText =
"📌 Summary:\n\n" + summary;
}

// --------------------
// QUIZ GENERATOR
// --------------------
function generateQuiz() {

let text = getText();
if (!text) return alert("Enter notes first!");

let words = text.split(" ").filter(w => w.length > 4);

let quiz = "📝 Quiz Questions:\n\n";

for (let i = 0; i < 5; i++) {
let word = words[Math.floor(Math.random() * words.length)];
quiz += `${i+1}. Explain "${word}"\n`;
}

document.getElementById("output").innerText = quiz;
}

// --------------------
// FLASHCARDS
// --------------------
function flashcards() {

let text = getText();
if (!text) return alert("Enter notes first!");

let sentences = text.split(".").filter(s => s.length > 10);

let cards = "📚 Flashcards:\n\n";

sentences.slice(0, 5).forEach((s, i) => {
cards += `Q${i+1}: ${s.trim()}\nA${i+1}: (Try recalling this)\n\n`;
});

document.getElementById("output").innerText = cards;
}

// --------------------
//     AI TUTOR 
// --------------------

function answerQuestion() {

let question =
document.getElementById("question").value.toLowerCase();

// 🔥 ADD THIS FIRST (IMPORTANT)
if (
question.includes("date") ||
question.includes("today") ||
question.includes("day")
) {
let today = new Date().toDateString();

document.getElementById("output").innerText =
"📅 Today is: " + today;

return;
}

let notes =
getText().toLowerCase();

if (!question) return alert("Ask a question!");
if (!notes) return alert("Paste notes first!");

let sentences =
notes.split(".").filter(s => s.length > 10);

let matches = sentences.filter(s =>
question.split(" ").some(word => s.includes(word))
);

let answer = "";

if (matches.length > 0) {
answer = "🤖 Answer:\n\n" + matches.slice(0, 3).join(". ");
} else {
answer =
"🤖 I couldn't find the answer in your notes.\n\nTry adding more details.";
}

document.getElementById("output").innerText = answer;

}