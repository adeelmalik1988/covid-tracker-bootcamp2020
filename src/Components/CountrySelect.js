import React, {useEffect,useState} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core'
import styles from './CountrySelect.module.css'
import {countries} from './Api'

const CountrySelect = ({handleCountryChange}) => {

const [countriesData, setcountriesData] = useState([])

useEffect(() => {
    async function getData(){

         setcountriesData(await countries())

    }
    getData()
    
}, [])

    return (
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
              <option value=''>Global</option>
              {
                  countriesData.map((data,ind)=>(
                  <option value={data} key={ind}>{data}</option>
                  )
                  )
              }

          </NativeSelect>
      </FormControl>
    );
    }
  
  export default CountrySelect;
  