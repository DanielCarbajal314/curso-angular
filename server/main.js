const express = require('express')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')
const app = express()
const port = 3400;
app.use(express.json());
app.use(cors());

let tasks = [{ id: uuidv4(), description: 'Mi Primera Tarea', date: new Date() }];

app.post('/tasks', (req, res) => {
    const { description, date } = req.body;
    const  id = uuidv4();
    const task = { id, description, date };
    tasks.push(task);
    res.json(task);
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.delete('/tasks/:taskId', function (req, res) {
    tasks = tasks.filter(x => x.id !== req.params.taskId );
    res.json({});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})