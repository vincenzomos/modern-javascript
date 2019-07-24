// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
  .then(() => newChatForm.reset())
  .catch(err => console.log(err));
})

newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //update name via chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  //resetForm
  newNameForm.reset();
  //show then hide the update-message;
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => updateMssg.innerText = '', 3000);
  
  // localStorage.setItem()
});

//update chatroom
rooms.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') { 
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});

// class instances
const chatUI = new ChatUI(chatList);
const initialUserName = localStorage.getItem('chatroom_username');
const chatroom = new Chatroom('gaming', initialUserName ? initialUserName : 'anonymous'); 


// get chats & render
chatroom.getChats(data => chatUI.render(data));
