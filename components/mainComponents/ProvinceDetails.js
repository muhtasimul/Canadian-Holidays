import React from 'react'
import classes from "./Holiday.module.css"
import { useRouter } from 'next/router'
import Head from "next/head"


export default function ProvinceDetails({ details }) {

    const router = useRouter()

    const handleChange = () => {
        router.back()
    }

    return (
        <>
            <Head>
                <title>{details.name}</title>
                <meta name="description" content={details.description} />
            </Head>
            <section className={classes.card2}>
                <h1>{details.name}</h1>
                <h5>{details.date}</h5>
                <div className='card m-2 p-2' style={{ "width": "16rem", "textAlign": "center" }}>
                    <p>{details.description}</p>
                </div>
                <button className='btn btn-large' onClick={handleChange}>More Holidays</button>
            </section>
        </>
    )
}
