import HolidayProvincial from "../../components/mainComponents/HolidayProvincial";
import { connectionToDatabase, provHolidays } from "../../helper/db-utils";
import Head from "next/head";


export default function ProvincialHolidays(props) {

    return (
        <>
            <Head>
                <title>
                    Provincial Holidays
                </title>
                <meta name="description" content="List of holidays in Canadian Provinces" />
            </Head>
            <HolidayProvincial province={props.data} />
        </>
    )

}


export async function getStaticProps() {


    let client;
    let result;
    let collect = process.env.COLLECTIONS

    try {
        client = await connectionToDatabase()
    } catch (err) {
        console.log("Connection Error")
        return
    }

    try {
        result = await provHolidays(client, collect)
        client.close()
    } catch (err) {
        console.log("Result Error")
        return
    }


    return {
        props: {
            data: result.map(holiday => ({
                id: holiday._id.toString(),
                name: holiday.name,
                provinces: holiday.provinces,
                date: holiday.date,
                description: holiday.description
            }))
        }


    }
}