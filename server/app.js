const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin request
app.use(cors());

// connect to database
const uri = "mongodb://localhost:27017/graphql";
mongoose.connect(uri);
mongoose.connection.once('open', () => {
    console.log('Connected to Database!');
})


// single end point for graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(4000, () =>{
    console.log('Server listening at port 4000...');
})
