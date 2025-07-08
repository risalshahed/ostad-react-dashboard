import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

export default function Recharts() {
    const data = [
        {
            month: 'January',   // independent -> xAxis
            sales: 300          // dependent
        },
        {
            month: 'February',
            sales: 400
        },
        {
            month: 'March',
            sales: 500
        },
    ]
  return (
    <div className='p-5'>
        <h2 className='text-2xl font-bold py-4'>
            Recharts
        </h2>
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="darkblue" />
        </BarChart>
    </div>
  )
}
