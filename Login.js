import React from "react";
import axios from 'axios';
import ".html";
import ".css";

export default function Login(){
const callApi = () =>{
axios({
method:"post",
url:"",
data:{
    id:"admin",
    pw:"12345"
}



})
.then((response)=>{
const result = response.data.result

})
.catch((response)=>{console.log('error')})





}

return(
<div>
    <button onClick={callApi}>Login</button>
</div>
)
}
