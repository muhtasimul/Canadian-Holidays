import React from 'react'
import Link from "next/link"
import classes from "./NavigationComponent.module.css"

export default function NavigationComponent() {
    return (
        <header className={`${classes.layout}`}>
            <nav className='navbar navbar-expand-lg navbar-light bg-danger' >
                <div className='container-fluid d-flex justify-content-space-between'>
                    <p className={`navbar-brand text-light fw-bold h1 h-100 ${classes.brandColor}`}>Canadian Holidays</p>

                    <div className="navbar" >
                        <ul className='navbar-nav'>
                            <li className='nav-item p-2'>
                                <Link className="nav-link" href="/">Federal Holidays</Link>
                            </li>
                            <li className='nav-item p-2'>
                                <Link className="nav-link" href="/provincialHolidays">Provincial Holidays</Link>
                            </li>
                        </ul>
                    </div>

                </div>



            </nav>
        </header>
    )
}
