import React from 'react'
import NavigationComponent from './NavigationComponent'
import classes from "./Layout.module.css"

export default function Layout(props) {
    return (

        <div className={classes.content}>
            <NavigationComponent />
            <div className='p-1'>
                {props.children}
            </div>
            <footer className='d-flex justify-content-center bg-danger '>
                <p className='text-light'>Canadian Holidays</p>
            </footer>
        </div>
    )
}
