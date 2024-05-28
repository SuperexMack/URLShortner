import axios from "axios"
import { useState } from "react"
import "./Input.css"
function Input(){

    let [getLink , setLink] = useState("")
    let [getshorter , setShorter] = useState("")
    const GetTheData = async()=>{
        try{
        const response = await axios.post("http://localhost:8000/v1/insertURL" , {
        InsertedUrl : getLink,
        })  

        if(response.data.url){
            setShorter(`http://localhost:8000/v1/${response.data.url}`)
        }
        else{
            setShorter("Error: Unable to shorten the URL");
        }

    }

        catch(error){
           setShorter("some error occured " + error)
        }
       
   }
  
  return(
  <>
  <div className="Mainbox">
  <input onChange={(e)=>setLink(e.target.value)} placeholder="Enter the Link"></input>
  <button onClick={GetTheData}>Get</button>
  <div className="NewLink">NewLink - {getshorter}</div>
  </div>
  </>
  )
}

export default Input
