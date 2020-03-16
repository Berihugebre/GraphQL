const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
// allow cross-origin request
app.use(cors())

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql: true
}))

const uri = `mongodb+srv://berihu:Heniberi04@cluster0-zc25i.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err));


app.listen(4000, ()=>{
    console.log(`now listening for requests on port 4000`)
})