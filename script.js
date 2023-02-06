const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messageList = document.getElementById("message-list");

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = messageInput.value;
  const messageElement = document.createElement("div");
  messageElement.innerText = message;

  messageList.appendChild(messageElement);
  messageInput.value = "";
});
