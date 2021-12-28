import React,{useState} from 'react'

function Change() {
    const[inputvalue,setInputvalue]=useState("Amen!!") 
    const changeInput=(event)=>{
        const newvalue=event.target.value
        setInputvalue(newvalue)
    }
    return (
        <div>
            <input placeholder='Enter to change the value ...' onChange={changeInput}></input>
            <p>{inputvalue}</p>
        </div>
    )
}

export default Change
