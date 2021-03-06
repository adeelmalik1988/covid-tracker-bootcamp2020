import React, {useState, useEffect} from 'react';
import styles from './App.module.css';

import Chart from './Components/Charts';
import Cards from './Components/Cards';
import {fetchData} from './Components/Api';
import CountrySelect from './Components/CountrySelect';
import covid_updated2 from './Images/covid_updated2.png'

function App() {

  const [globalData, setglobalData] = useState({})
  const [countryChange, setcountryChange] = useState('')

  useEffect(() => {
    async function getData() {
        const fetchedData = await fetchData()

        setglobalData(fetchedData)
    } 

    getData()
   
}, [])



async function handleCountryChange(country){

  const fetchedData = await fetchData(country)
  setglobalData(fetchedData)
  setcountryChange(country)
  
    
  }

 

  return (
    <div className={styles.container}>
      <img className={styles.image} src={covid_updated2} alt={'Covid-19'} />
      <Cards data={globalData}/>
      <CountrySelect handleCountryChange={handleCountryChange} />
      <Chart data={globalData} country={countryChange}/>
    </div>
  );
  }

export default App;
