import React from 'react'
import classes from "./Holiday.module.css"
import { findProvince, provincialHolidays } from '../../helper/app-utils'

export default function HolidayProvincial({ province }) {

    let allCanadianProvince = ["Quebec", "All Province", "Newfoundland"]

    allCanadianProvince = allCanadianProvince.sort()

    const array = allCanadianProvince.map(place => {
        const newProvince = findProvince(province, place)
        return provincialHolidays(newProvince)
    })

    // const quebec = findProvince(province, "Quebec")
    // const ontario = findProvince(province, "Ontario")
    // const alberta = findProvince(province, "Alberta")
    // const saskatchewan = findProvince(province, "Saskatchewan")
    // const manitoba = findProvince(province, "Manitoba")
    // const newfoundland = findProvince(province, "Newfoundland")
    // const novaScotia = findProvince(province, "Nova Scotia")
    // const newBrunswick = findProvince(province, "New Brunswick")
    // const britishColumbia = findProvince(province, "British Columbia")
    // const nunavut = findProvince(province, "Nunavut")
    // const northWestTerritories = findProvince(province, "NorthWest Territories")
    // const yukon = findProvince(province, "Yukon")

    // const allProvince = findProvince(province, "All Province")




    return (
        <>
            {array}
        </>
    )
}
