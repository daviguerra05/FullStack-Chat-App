import './Header.css'
import Cookies from "universal-cookie"
const cookies = new Cookies();
import { signOut } from 'firebase/auth'
import { auth } from "/src/firebase-config.jsx";

export const Header =(props)=>{
    const {setIsAuth, setRoom} = props;

    const signUserOut = async ()=>{
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        setRoom(null);
      };

    return(
        <>
            <header>
                <h1>Chat App</h1>
                <button onClick={signUserOut}>Sign Out</button>
            </header>
        </>
    )
}