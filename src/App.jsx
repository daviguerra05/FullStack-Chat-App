import React, {useState} from 'react'
import Cookies from "universal-cookie"
const cookies = new Cookies();
import { Auth } from './components/Auth/Auth'
import './styles/App.css'
import { Rooms } from './components/Rooms/Rooms';
import { Chat } from './components/Chat/Chat';


//
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  if (!isAuth){
    return (
      <>
        <Auth setIsAuth={setIsAuth}/>
      </>
    )
  }
  return (
    <>
      {room ? 
        <Chat room={room}/>
        :
        <Rooms setRoom ={setRoom}/>
      }
    </>
  ) 
}

export default App
