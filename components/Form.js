import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Modal from "../components/Modal";
export default function Form(){
   
   const[fullname,setFullname] = useState("");
   const[email,setEmail] = useState("");
   const[message,setMessage] = useState("");
   const [state, handleSubmit] = useForm("myyovoal");
   const[showModal,setShowModal] = useState(false);

   
  

    return(
        <div>
                {state.succeeded ? <Modal open={showModal} onClose={()=>setShowModal(false)}/>:null}
            <form className="myform" onSubmit={handleSubmit}>
               
                <label className="label">Fullname</label>
                <input type="text" id="fullname" name="fullname" placeholder="FullName" value={fullname} onChange={(e)=>{
                    setFullname(e.target.value)
                }} className="input"/>
                    <ValidationError 
                    prefix="Fullname" 
                    field="text"
                    errors={state.errors}
                        />
                <label className="label">Email Address</label>
                <input type="email" id="email" name="email" placeholder="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} className="email"/>
                 <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                        />
              
                <label className="label">Message</label>
                <textarea name="message" placeholder="Message" value={message} onChange={(e)=>{
                    setMessage(e.target.value)
                }} className="message">

                </textarea>
                <ValidationError 
                 prefix="Message" 
                field="message"
                errors={state.errors}
                 />
                <button className="submit_button" disabled={state.submitting} onClick={()=>setShowModal(true)}>Send</button>
            </form>
        </div>
    )
}