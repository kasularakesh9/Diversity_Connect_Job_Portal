const socketConnection = io('https://abr2435.uta.cloud');
const chatContainer = document.getElementById('messageValue');
const sendChatForm = document.getElementById('messagedisplayVAl');
const chatInput = document.getElementById('messageFetchButton');

const urlParameters = new URLSearchParams(window.location.search);
const userAlias = urlParameters.get('name');

socketConnection.emit('new-user', userAlias);

socketConnection.on('chat-message', data => {
  showTheTextValues(`${data.name}: ${data.message}`, 'other');
});

socketConnection.on('user-connected', userName => {
  showTheTextValues(`${userName} joined the text link`, 'info');
});

socketConnection.on('user-disconnected', userName => {
  showTheTextValues(`${userName} left the chat value`, 'info');
});

sendChatForm.addEventListener('submit', e => {
  e.preventDefault();
  const messageText = chatInput.value;
  showTheTextValues(`You: ${messageText}`, 'self');
  socketConnection.emit('send-chat-message', messageText);
  chatInput.value = '';
});

function showTheTextValues(text, messageType) {
  const messageElement = document.createElement('div');
  messageElement.innerText = text;
  
  if (messageType === 'self') {
    messageElement.classList.add('message', 'self');
  } else if (messageType === 'other') {
    messageElement.classList.add('message', 'other');
  } else if (messageType === 'info') {
    messageElement.classList.add('message', 'info');
  }
  
  chatContainer.append(messageElement);
}
