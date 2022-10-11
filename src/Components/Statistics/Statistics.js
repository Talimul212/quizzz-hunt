import React from 'react';
import './Statistics.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: 'React',
            total: 8,
        },
        {
            name: 'JavaScript',
            total: 9,
        },
        {
            name: 'CSS',
            total: 8,
        },
        {
            name: 'Git',
            total: 11,
        }

    ];
    return (
        <div className='statistics'>
            <h2>Statistics of Quizs</h2>

            <div className='statistics-barchart' >
                <BarChart width={550} height={190} data={data}>
                    <Bar dataKey="total" fill="rgb(168, 214, 255)" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

        </div>
    );
};

export default Statistics;