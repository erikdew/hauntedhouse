const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const controller = require('./controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

//endpoints
app.get('/creatures', controller.read)
app.post('/creatures', controller.create)
app.delete('/creatures/id', controller.delete)


app.listen(3005, () => {
    console.log('listening on 3005')
})