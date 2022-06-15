import React, { useState, useEffect } from "react";
import axios from 'axios'
import Table from "./table/table";
import Loader from "./loader/loader";

function App() {

  const baseUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';


  const [contactData, setContactData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [directoinCode, setDirectionCode] = useState()
  

  useEffect(() => {
    axios(baseUrl).then((res) => {
          // console.log(res)
          setContactData(res.data)
          setIsLoading(false)
        })
  }, [])

  return (
    <div className="container">
      {isLoading ? <Loader /> : <Table contactData={contactData} setContactData={setContactData} />}



    </div>
  );
}

export default App;
