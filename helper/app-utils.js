import { useRouter } from "next/router"
import classes from "../components/mainComponents/Holiday.module.css"

export function findProvince(provinceProps, province) {
    const result = provinceProps.filter(day => day.provinces === province)
    return result
}

export function provincialHolidays(array) {

    const router = useRouter()

    const handleChange = (id) => {
        router.push(`${id}`)
    }

    const result = array.map(day => (
        <div
            className={classes.card}
            key={day.key}>
            <h1>{day.name}</h1>
            <h5><em>{day.date}</em></h5>
            <p><u>{day.provinces}</u></p>
            <button className="btn btn-lg" onClick={() => handleChange(day.id)}>Details</button>
        </div>
    ))

    return result
}

