const todoRoutes = require('./todoRoutes.tsx');
module.exports = function(app, db) {
    todoRoutes(app, db);
    // Тут, позже, будут и другие обработчики маршрутов
};