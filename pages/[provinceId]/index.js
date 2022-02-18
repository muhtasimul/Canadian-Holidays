import ProvinceDetails from "../../components/mainComponents/ProvinceDetails"
import { connectionToDatabase, findId, wholeDoc } from "../../helper/db-utils"

export default function ProvincialDetails(props) {
    return (
        <>
            <ProvinceDetails details={props.data} />
        </>
    )
}


export async function getStaticPaths() {
    const collection = process.env.COLLECTIONS
    let client
    let result

    try {
        client = await connectionToDatabase()
    } catch (err) {
        console.log("Connection Error")
        return
    }

    try {
        result = await findId(client, collection)
        client.close()
    } catch (err) {
        console.log("Result Error")
        return
    }

    const paths = result.map(place => ({
        params: {
            provinceId: place._id.toString()
        }
    }))


    return {
        fallback: "blocking",
        paths
    }

}


export async function getStaticProps(context) {

    const id = context.params.provinceId
    const collection = process.env.COLLECTIONS
    let client
    let result

    try {
        client = await connectionToDatabase()
    } catch (err) {
        console.log("Connection Error")
        return
    }

    try {
        result = await wholeDoc(client, collection, id)
        client.close()
    } catch (err) {
        console.log('Result Error')
        return
    }


    return {
        props: {
            data: {
                id: result._id.toString(),
                name: result.name,
                date: result.date,
                description: result.description
            }
        }
    }
}