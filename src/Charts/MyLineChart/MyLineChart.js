import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Cell, LabelList, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyLineChart.css'
const MyLineChart = () => {
    const [chart , setChart] = useState([]);
    useEffect(()=>{
        fetch('data2.json')
        .then(res => res.json())
        .then(data => setChart(data));
    },[])
    
    return (
        <div className='chart-container'>
        
        <div className='mt-16 '>
            <h1 className='mb-10 font-black text-xl'>MONTH WISE SELL</h1>
            <LineChart  width={400} height={300} data={chart} >
                <Line type="monotone" dataKey='sell' stroke="#8884d8"></Line>
                <YAxis dataKey={'sell'} />
                <XAxis dataKey={'month'} />
               <Tooltip />
               <Legend>sell</Legend>
            </LineChart>
            
        </div>
        <div className='mt-16 '>
        <h1 className='mb-10 font-black text-xl'>INVESTMENT VS REVENUE</h1>
            <BarChart width={500} height={300} data={chart}>
            <Bar dataKey="investment" fill="#8884d8">
                <LabelList dataKey="revenue" position="top" fill="#82ca9d"/>
                {/* <Bar dataKey={'revenue'} overlinePosition = "top"  ></Bar> */}
            </Bar>

            <Bar dataKey="revenue" fill='#82ca9d'  />
            <XAxis dataKey={'month'} />
            <YAxis dataKey={'investment'} />
            <Tooltip />
            <Legend >investment</Legend>
            <Legend> revenue</Legend>
            </BarChart>
        </div>
        
        </div>
        
    );
};

export default MyLineChart;