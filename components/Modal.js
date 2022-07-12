export default function Modal({open,children,onClose}){
    if(!open) return null
    return(
        <div className="overlay">
        <div className="response_modal">
           <img src="/close_icon.svg" alt="close_icon" className="close_button" onClick={onClose}/>
         
            <p className="form_message">Thank You!!! I have received your Message</p>
            {children}
        </div>
        </div>
    )
}