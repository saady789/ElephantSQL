const { Client } = require("pg");

async function getClient() {
    const client = new Client("postgres://lodywfiy:r1tBNPVxw9_TJBnyboC1XAycdRp40tto@kashin.db.elephantsql.com/lodywfiy");
    await client.connect();
    console.log("Client connected");
    return client;


}

async function createTable() {

    const query = `



CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    done BOOLEAN,
    user_id INTEGER REFERENCES users(id)
);

`;
    const client = await getClient();
    await client.query(query)
}

createTable();

