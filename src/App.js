import React, { useState, useEffect } from "react";
import axios from 'axios'
import Table from "./table/table";
import Loader from "./loader/loader";
import DetailRow from "./detailRow/detailRow";
import DetailItem from "./detailRow/detailRow";
import UserServerData from "./hooks/userServerData";
import Switcher from "./switcher/switcher";

function App() {

  const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const [isButtonClick, setIsButtonClick] = useState(false)
  // const [contactData, setContactData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const [directionSort, setDirectionSort] = useState(true)
  const [rowItem, setRowItem] = useState('')
  const [{ contactData, isLoading, setContactData, setIsLoading }, getData] = UserServerData({ url, isButtonClick })

  const buttonHandler = () => {
    
  }

  const detailRow = (row) => {
    return (setRowItem(row))
  }

  return (
    <div className="container">
      <Switcher buttonHandler={buttonHandler} />
      {isLoading ? <Loader /> :
        <Table contactData={contactData}
          setContactData={setContactData}
          setDirectionSort={setDirectionSort}
          directionSort={directionSort}
          detailRow={detailRow}
        />}
      <DetailItem detailItemData={rowItem} />
    </div>
  );
}

export default App;
