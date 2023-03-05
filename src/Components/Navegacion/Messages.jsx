/*import React from 'react'


const Mensajes = () => {
  return (
    <div>
       <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
    </div>
  )
}

export default Mensajes*/

import React from "react";

function Message(props) {
  return (
    <div className="message">
      <h2>{props.sender}</h2>
      <p>{props.content}</p>
    </div>
  );
}

function Messages(props) {
  return (
    <div className="messages">
      <h1>Messages</h1>
      {props.messages.map((message) => (
        <Message
          key={message.id}
          sender={message.sender}
          content={message.content}
        />
      ))}
    </div>
  );
}

export default Messages;
