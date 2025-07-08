
const responses = {
  "skills": "My skills include Java, Spring Boot, Angular, HTML, CSS, JavaScript, MySQL, and Git.",
  "projects": "I have worked on:\n1. Job Portal (Java + Spring Boot + Angular)\n2. Library Management System (Java + MySQL).",
  "education": "I completed my B.Tech in Electrical and Electronics Engineering in 2023.",
  "experience": "I am a fresher with hands-on project experience.",
  "default": "I'm here to answer questions about my skills, projects, or education. 😊"
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("user", userText);

  const lower = userText.toLowerCase();
  let reply = responses["default"];
  if (lower.includes("skill")) reply = responses["skills"];
  else if (lower.includes("project")) reply = responses["projects"];
  else if (lower.includes("education") || lower.includes("study")) reply = responses["education"];
  else if (lower.includes("experience")) reply = responses["experience"];

  setTimeout(() => {
    addMessage("bot", reply);
  }, 600);

  input.value = "";
}

function addMessage(sender, text) {
  const chat = document.getElementById("chatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}
