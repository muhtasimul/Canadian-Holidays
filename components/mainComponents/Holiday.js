import React from 'react'
import classes from "./Holiday.module.css"
import { useRouter } from 'next/router'

export default function ({ holidays }) {


    const router = useRouter()

    const handleChange = (id) => {
        router.push(`${id}`)
    }

    const holiday = holidays.map(day => (
        <div
            className={classes.card}
            key={day.id}>
            <h1>{day.name}</h1>
            <h5><em>{day.date}</em></h5>
            <button className='btn btn-lg' onClick={() => handleChange(day.id)}>Details</button>
        </div>
    ))

    return (
        <>
            {holiday}
        </>
    )
}
