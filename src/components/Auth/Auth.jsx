import {auth, provider} from "/src/firebase-config.jsx"
import {signInWithPopup} from "firebase/auth"
import Cookies from "universal-cookie"
const cookies = new Cookies();
import './Auth.css'

//
export const Auth =(props)=>{
    const {setIsAuth} = props;

    const signInWithGoogle = async()=>{
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token",result.user.refreshToken);
            setIsAuth(true); 
        }catch(e){ 
            console.log(e)
        }
    }

    return(
        <>
            <section id='signInS'>
                <div className="signInContainer">
                    <h1>Sign in</h1>
                    <h2></h2>
                    <button onClick={signInWithGoogle}>
                        Sign In with Google <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="G" width="30px" height="30px"/>
                    </button>
                </div>
            </section>
        </>
    )
}