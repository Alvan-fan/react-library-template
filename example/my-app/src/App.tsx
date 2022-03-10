import './App.css';
import { ChatList, RoomList } from 'house-chat-react';
import 'house-chat-react/dist/css/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 123 */}
        <ChatList />
        {/* <RoomList /> */}
      </header>
    </div>
  );
}

export default App;
