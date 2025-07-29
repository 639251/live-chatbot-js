function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");
    const message = input.value.trim();

    if (message !== "") {
        // User message
        const userMsgDiv = document.createElement("div");
        userMsgDiv.classList.add("message", "sent");
        userMsgDiv.textContent = message;
        chatBox.appendChild(userMsgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        input.value = "";

        // Bot reply after 1 second
        setTimeout(() => {
            const botReply = getBotReply(message); // dynamic reply
            const botMsgDiv = document.createElement("div");
            botMsgDiv.classList.add("message", "received");
            botMsgDiv.textContent = botReply;
            chatBox.appendChild(botMsgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

// Basic bot replies
function getBotReply(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! How can I help you?";
    } else if (msg.includes("your name")) {
        return "I'm ChatBot 🤖 , your name";
    } else if (msg.includes("where are you from") || msg.includes("kha s ho")) {
        return "I'm from Lucknow and you 😊";
    } else if (msg.includes("my name is ...")) {
        return "ok cool!";
    } else if (msg.includes("how are you")) {
        return "I'm good! Thanks for asking 😊";
    } else if (msg.includes("bye")) {
        return "Goodbye! Take care.";
    } else if (msg.includes("who makes you")) {
        return "Mahi Soni! Thanks for asking 😊";
    } else {
        return "I'm still learning! Can you try something else?";
    }
}