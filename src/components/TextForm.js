import React,{useState} from 'react'
<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jacquard+24&family=Jersey+15&family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jacquard+24&family=Jersey+15&family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jacquard+24&family=Jersey+15&family=Lugrasimo&family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jacquard+24&family=Jersey+15&family=Lugrasimo&family=Romanesco&family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jacquard+24&family=Jersey+15&family=Lugrasimo&family=Romanesco&family=Sevillana&family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Give+You+Glory&family=Jacquard+24&family=Jersey+15&family=Lugrasimo&family=Romanesco&family=Sevillana&family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jacquard+24&family=Jersey+15&display=swap');

</style>


// console.log(useState('Enter text here2'))
export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Button was clicked."+text)
        let newText=text.toUpperCase();
    
        setText(newText);
        props.showAlert("converted to upper case.","success");
        // setText("Jai Shree Ram")
    }
    const handleDownClick=()=>{
        // console.log("Button was clicked."+text)
        let newText=text.toLowerCase();
        
        setText(newText);
        props.showAlert("converted to lower case.","success");
        // setText("Jai Shree Ram")
    }
    const handleClear=()=>{
        // console.log("Button was clicked."+text)
        // let newText=text.toLowerCase();
    
        setText("");
        props.showAlert("Text cleared","success");
        // setText("Jai Shree Ram")
    }
    const handleCopy=()=>{
        var x=document.getElementById("exampleFormControlTextarea1");
        x.select();
        //For selecting the text
        navigator.clipboard.writeText(x.value);
        props.showAlert("Text copied.","success");
    }
    const handleSpacing=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));  
        props.showAlert("Spaces Removed.","success"); 
             
    }
    const handleFont=()=>{
       const myFonts=[
        "Courier New', Courier, monospace","Arial, Helvetica, sans-serif","cursive","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif","Jersey","Bebas,Neue,Jacquard,Jersey,Sevillana","Sevillana","Bebas,Neue,Give+You+Glory,Jacquard,Jersey,Lugrasimo,Romanesco,Sevillana,Titan+One","Jacquard,Jersey","Romanesco"
       ]
       //    console.log(x.value);
       //    let a=x.value;
       
       let font=Math.floor(Math.random(0,1)*myFonts.length);
       console.log(font)
       document.getElementById("exampleFormControlTextarea1").style.fontFamily=myFonts[font];
       props.showAlert("Font changed.","success");
    //    a.style.fontFamily=font;
    }
    // We are not able to type now 
    // const handleOnChange=()=>{
    //     console.log("Button was clicked.")
    // }
    // but now we can type
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText("helkdcndklsaj")
    // setText("hii");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">Enter your text</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mx-4" onClick={handleDownClick}>Convert to LOWERCASE</button>
        <button className="btn btn-primary mx-4" onClick={handleClear}>ClearText</button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>CopyText</button>
        <button className="btn btn-primary mx-4" onClick={handleSpacing}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-4" onClick={handleFont}>Change Font</button>
        {/* <a className="btn btn-primary" href="#" role="button">Convert to LOWERCASE</a> */}
    </div>

    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
        
  )
}
