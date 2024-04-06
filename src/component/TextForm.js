import React from 'react'
import { useState } from 'react'

function TextForm() {
       const [text , settext] = useState("");

    //upercase text
    const upercase = () =>{
        let newtxt = text.toUpperCase();
        settext(newtxt)
        console.log(newtxt)
        console.log("text upper")
        }
    const onchangetxt = (event) =>{
        settext(event.target.value)
    }
    //lowercase text
    const lowercase = () =>{
        let txtlower = text.toLowerCase()
        settext(txtlower)
        console.log("text lower")
       }
    //clear text
    const cleartext = () =>{
      console.log("clear text ")
        let txtlower = "";
        settext(txtlower)
       }
       
    //text copide 
    const handelcopy = ()=>{
      console.log("copy text");
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    //hendel spaces
    const handelspace = () =>{
      console.log("remove space")
      let newtxt = text.split(/[ ]+/);
      settext(newtxt.join(" "))
    }
  return (
    <>
      <div className="form-group my-3">
    <label htmlFor="exampleFormControlTextarea1" className='d-flex justify-content-center my-4 font-weight-bold'>Enter your Text here</label>
    <textarea className="form-control"  id="mybox" rows="8" onChange = {onchangetxt} value={text}></textarea>
   
  </div>
    <div className='container'>
    <h6>{text.split(" ").length - 1} word</h6><h6>{text.length} characters</h6>
    <button className='btn btn-primary ' onClick={upercase}>convert to uppercase</button>
    <button className='btn btn-primary mx-2' onClick={lowercase}>convert to lowercase</button>
    <button className='btn btn-primary mx-2' onClick={cleartext}>clear text</button>    
    <button className='btn btn-primary mx-2' onClick={handelcopy}>copy text</button>    
    <button className='btn btn-primary mx-2' onClick={handelspace}>Remove extra space</button>    
    </div>
    </>
  )
}

export default TextForm
