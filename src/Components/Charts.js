import React, { useState, useEffect } from 'react'
import { dailyFetchData } from './Api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'


const Chart = ({data:{confirmed,recovered,deaths},country}) => {

    const [dailyData, setdailyData] = useState([])
   

    useEffect(() => {
        async function getDailyData() {
            setdailyData(await dailyFetchData())
            
        }

        getDailyData()
         

    }, [])


    const lineChart = (
        dailyData.length 
        ? <Line 
        data={{
            labels: dailyData.map(({date}) => date

            ),
            datasets: [{
                data: dailyData.map(
                    (data)=> data.confirmed
                ),

                label: 'Confirmed',
                borderColor: '#3333ff',
                backgroundColor: 'rgba(51,51,255,0.3)',
                fill: true

            },{
                data: dailyData.map((data)=> data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 30, 0, 0.60)',
                fill: true
                
            }]

        
        }

        }
        
        
        
        /> : null



    )
const barChar = (confirmed 
    ? <Bar
    data={{
        labels: ['Infected','Recovered','Deaths'],
        datasets:[{
            label:'People',
            backgroundColor:['rgba( 0,0,255, 0.5)','rgba(0, 255, 55, 0.705)','rgba(255, 30, 0, 0.63)'],
            data:[confirmed.value, recovered.value, deaths.value]
        }]

    }}
    options={{
        legend: {display: false},
        title: {display: true, text:`Current Stats in ${country}`},
        
    }}
    
    
    /> : null )


    return (
        <div  className={styles.container}>
            {country ? barChar : lineChart}



        </div>
            
    )



}
export default Chart