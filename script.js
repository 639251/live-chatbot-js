const form = document.getElementById("form");
const input = document.getElementById("input");
const chatBox = document.getElementById("chatBox");

const botResponses = {
  "hello": "Hi there! 👋 How can I help you today?",
  "hi": "Hello! 😊 What would you like to talk about?",
  "how are you": "I'm just a bunch of code, but I'm running smoothly! 😄",
  "what is your name": "I'm your personal chatbot 🤖 built with JavaScript.",
  "who made you": "I was created by Mahi Soni ✨",
  "creator": "Mahi Soni is my creator! 💻",
  "what can you do": "I can reply to your messages, save chats, and make your day better! ☀",
  "thank you": "You're most welcome! 💙",
  "bye": "Goodbye! Take care 😊",
};

// 🔁 Default fallback responses to avoid repetition
const defaultReplies = [
  "Interesting! Tell me more...",
  "That's cool! 😄",
  "I see! Let's continue...",
  "Can you explain that again?",
  "I'm still learning... but I'm listening 👂",
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = input.value.trim();
  if (userInput === "") return;

  addMessage(userInput, "sent");
  input.value = "";

  // Add chatbot response with delay
  setTimeout(() => {
    const botReply = getBotReply(userInput.toLowerCase());
    addMessage(botReply, "received");
  }, 600);
});

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  saveMessage({ text, type });
}

function getBotReply(userText) {
  for (let key in botResponses) {
    if (userText.includes(key)) {
      return botResponses[key];
    }
  }

  // If no match, return a random generic reply
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

// 🧠 LocalStorage Functions
function saveMessage(messageObj) {
  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push(messageObj);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessages() {
  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);
    div.innerText = msg.text;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

window.onload = function () {
  loadMessages();
};
