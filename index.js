const { Client } = require("pg");

async function getClient() {
    const client = new Client("postgres://lodywfiy:r1tBNPVxw9_TJBnyboC1XAycdRp40tto@kashin.db.elephantsql.com/lodywfiy");
    await client.connect();
    console.log("Client connected");
    return client;


}

async function createTable() {

    const query = `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
    );


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

async function insertUser() {
    const client = await getClient();
    const query = `INSERT INTO users (name, email) VALUES ($1, $2)`;
    const values = ["Muhammad saad","saady789@gmail.com"];
    await client.query(query, values);
    console.log("User inserted");
}

async function insertTodo() {
    const client = await getClient();
    const query = `INSERT INTO todos (title, description, done, user_id) VALUES ($1, $2, $3, $4)`;
    const values = ["Learn SQL", "Learn SQL for beginners", false, 1];
    await client.query(query, values);
    console.log("Todo inserted");

}
insertTodo();
// insertUser();
// createTable();

