const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.post('/todos', (req, res) => {
        const todo = {todoText: req.body.todoText};
        db.collection('todos').insert(todo, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.get('/todos/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('todos').findOne(details, (err, item) => {
            console.log(item.ops);
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.delete('/todos/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('todos').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item.todoText + ' deleted');
            }
        });
    });

    app.put('/todos/:id', (req, res) => {
        const todo = {todoText: req.body.todoText};
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('todos').update(details, todo, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(todo);
            }
        });
    });
};


