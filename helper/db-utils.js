import { MongoClient, ObjectId } from "mongodb";

export async function connectionToDatabase() {


    const url2 = process.env.DB_MONGO_CONNECT
    const client = await MongoClient.connect(url2, { useNewUrlParser: true })

    return client

}

export async function federalHolidays(client, collectionName) {

    const db = client.db()

    const findHoliday = db.collection(collectionName)

    const result = await findHoliday.find({ provinces: "Federal" }).toArray()

    return result
}

export async function provHolidays(client, collectionName) {

    const db = client.db()

    const findHoliday = db.collection(collectionName)

    const result = await findHoliday.find({ "provinces": { $ne: "Federal" } }).toArray()

    return result
}


export async function findId(client, collectionName) {
    const db = client.db()
    const finding = db.collection(collectionName)
    const result = await finding.find({}, { _id: 1 }).toArray()

    return result
}

export async function wholeDoc(client, collectionName, id) {
    const db = client.db()
    const docs = db.collection(collectionName)
    const result = await docs.findOne({ _id: ObjectId(id) })
    return result
}