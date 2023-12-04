import React, { useRef } from 'react'
import './Room.css'

export const Rooms =(props)=>{
    const {setRoom} = props;
    const roomInputRef = useRef(null);
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return(
        <> 
            <section id="roomS">
                <div className='roomC'>
                    <label>Enter Room name:</label>
                    <form onSubmit={handleSubmit}>    
                        <input 
                            ref={roomInputRef} 
                            type="text" 
                            placeholder='Room name...'
                        />
                        <button type='submit' onClick={() => setRoom(roomInputRef.current.value)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                            </svg> 
                        </button>
                    </form>
                </div>
            </section> 
        </> 

    )
}