import React, {useState} from 'react'

export default function TextArea(props) {
   
    const [textCase, setTextCase] = useState(true);
   
    const btnFunc = ()=>{
        // setText("You Clicked Button")
        
        if(btnText==="UPPERCASE"){
            setText(text.toUpperCase());
            setBtnText('lowercase')
        }
        if(btnText==="lowercase"){
         setText(text.toLowerCase());
        setBtnText('UPPERCASE')
        }
        // console.log("You Clicked Button", text)
        
    }
    const textAreaFunc = (event)=>{
        // console.log("Clicket text area", event)

        setText(event.target.value)
    }
    const clickText = ()=>{
        if(text === "Enter your text here")
        setText("");
    }
    const [text, setText] = useState("Enter your text here");
    const [btnText, setBtnText] = useState("UPPERCASE")
    // let d = document.getElementById('para');
    // d.innerHTML = text;
    return (
        <>
            <div className="container">
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="textArea" className="form-label">{props.title}</label>
                <textarea className="form-control" onClick={clickText} value={text} onChange={textAreaFunc} id="textArea" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={btnFunc}>Convert to {btnText}</button>
            </div>
            <div className="container my-3">
                <h2>
                    Your Text Summary
                </h2>
                <ol>
                    <li>
                 Your text length is: {text.length}
                    </li>
                    <li>
                 Your text type is  : {typeof text}
                    </li>
                    <li>
                 Your text Words  : {text.split(" ").length} and {text.split(" ").length-1} white spaces
                    </li>
                    
                    <li>
                 Your text contains  : {text.textCase==true?"yes":"no"}
                    </li>
                </ol>
                <h2>Your Text Preview</h2>
                <p id='para'> {text}</p>
            </div>
        </>
    )
}
