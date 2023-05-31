import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick= ()=>{
        if(text.length===0){
            props.showAlert("Please enter text first","danger")
        }
        let newtext= text.toUpperCase();
        setText(newtext)
    }

    const handleloclick= ()=>{
        if(text.length===0){
            props.showAlert("Please enter text first","danger")
        }
    
        let newtext= text.toLowerCase();
        setText(newtext)
    }

    const handleclearclick = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text first","danger")
        }
        let newtext="";
        setText(newtext)
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    const [text,setText]= useState('Enter text here');
    // text="new text" wrong way to change the state
    // setText("new text") correct way
    return (
     <> 
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>  
        <div class="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }} id="Mybox" rows="8"></textarea>
        </div>
        <button className="btnPrimary" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btnPrimary mx-4" onClick={handleloclick}>Convert to Lowercase case</button>
        <button className="btnPrimary" onClick={handleclearclick}>Clear text</button>
       
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
        <p>{text.length>0? text.split(" ").length:0} Words,{text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minuites required to read </p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in textbox to priview"}</p>
    </div>
    </>  
  )
}
