import Holiday from "../components/mainComponents/Holiday";
import { connectionToDatabase, federalHolidays } from "../helper/db-utils"
import Head from "next/head";

export default function HomePage(props) {

    return (
        <>
            <Head>
                <title>Federal Holidays</title>
                <meta name="description" content="List of federal holiday in Canada" />
            </Head>
            <Holiday holidays={props.data} />
        </>

    )
}

export async function getStaticProps() {
    let client;
    let result;
    let collection = process.env.COLLECTIONS

    try {
        client = await connectionToDatabase()
    } catch (err) {
        console.log("Connection Error")
        return
    }

    try {
        result = await federalHolidays(client, collection)
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
                date: holiday.date
            }))
        }
    }
}