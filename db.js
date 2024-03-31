var pool = require("pg");

var client = new pool.Client({
    user: "food_rnc7_user",
    password: "WFamRhy1jFgGMVD49aZkURC6MeXvjnw6",
    database: "food_rnc7",
    port: 5432,
    host: "dpg-co4jdccf7o1s738svflg-a.singapore-postgres.render.com",
    ssl: true
});



client.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

<<<<<<< HEAD
module.exports = client;
=======
module.exports = client;
>>>>>>> 8cb19326f8a45663099305e0933949715d9d2a7e
