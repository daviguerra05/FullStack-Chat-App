import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { auth, db } from "/src/firebase-config.jsx";

import './Chat.css'

//
export const Chat = (props)=>{
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db,"messages");

    //Effect
    useEffect(()=>{
        const queryMessages = query(
                messagesRef, 
                where("room","==",room), 
                orderBy("createdAt")
            );
        const unsubscribe = onSnapshot(queryMessages, (snapshot)=>{
            let messages = [];
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(), id:doc.id });
            });

            setMessages(messages);
        });

        return () => unsubscribe();
    },[]);
    
    //Submit
    const handleSUmbmit = async(e)=>{
        e.preventDefault();
        if (newMessage === "") return;
        const input = document.getElementById('inp');
        input.value = "";
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });
        setNewMessage("");
    };

    let last_user = null;
    return(
        <>  
            <section id='chatS'>
                <h1>Sala atual: {room}</h1>
                <h2></h2>
                <div className='chatC'>
                    <div className='cViewport'>
                        {messages.map((message)=>{
                            return <p style={{textAlign: message.user == auth.currentUser.displayName ? 'end':'start'}}> 
                                        {message.user == auth.currentUser.displayName ? "":message.user+":"} {message.text} 
                                    </p>
                        })}
                    </div>

                    <form onSubmit={handleSUmbmit} className='cInput'>
                        <input 
                            type="text" 
                            id="inp"
                            placeholder='Message Here...'
                            onChange={(e)=>setNewMessage(e.target.value)}
                        />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}