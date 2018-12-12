

module.exports = function(app, db) {
    app.post('/todos', (req, res) => {
        const todo = { todoText: req.body.todoText };
        db.collection('todos').insert(todo, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};

