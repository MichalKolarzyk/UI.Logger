import React, { useEffect, useState } from 'react';
import config from "./config.json"
import logo from './logo.svg';
import './App.css';
import { ApiLoggerClient, GetMessageResponse } from './clients/ApiLoggerClient';
import MessageList from './components/MessageList';

function App() {
  const client = new ApiLoggerClient()
  const [messagesResponse, setMessagesResponse] = useState<GetMessageResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.getMessages();
      setMessagesResponse(data);
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MessageList messages={messagesResponse?.messages}/>
      </header>
    </div>
  );
}

export default App;
