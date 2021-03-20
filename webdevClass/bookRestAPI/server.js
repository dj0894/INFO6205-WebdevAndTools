
import express from 'express';
const app = express();
const PORT = 3000;
import db from './db/db.js';
import bodyParser from 'body-parser';


app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.post('/api/v1/todos', (req, res) => {

    console.log(req.body);
    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    } else if (!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    db.push(todo);
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    })
});



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));



