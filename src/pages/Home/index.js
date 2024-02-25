import { useState, useEffect } from "react"
import {validateUserName} from '../../utils/index'


const Home = () => {
  const [userName, setUserName] = useState ({
    value: '',
    error: ''
  })

  const handleSubmot = () =>{
    if(validateUserName(userName.value)) {
      console.log("Validate");
    }
  }

  return (
    <div>HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome</div>
  )

}

export default Home