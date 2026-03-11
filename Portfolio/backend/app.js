const express = require('express');
const app = express();

app.use(express.json());

// Тестовый endpoint
app.get('/api/v1/test', (req, res) => {
    res.json({
        success: true,
        message: "API работает!"
    });
});

// Создание портфолио
app.post('/api/v1/portfolios', (req, res) => {

    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            success: false,
            error: "Title обязателен"
        });
    }

    res.status(201).json({
        success: true,
        data: {
            id: 1,
            title: title,
            isPublic: false
        }
    });
});

// Получение портфолио пользователя
app.get('/api/v1/users/:userId/portfolios', (req, res) => {

    res.json({
        success: true,
        data: [
            {
                id: 1,
                title: "Пример портфолио"
            }
        ]
    });
});

// Публикация портфолио
app.put('/api/v1/portfolios/:id/publish', (req, res) => {

    res.json({
        success: true,
        message: "Портфолио опубликовано"
    });
});

// Добавление проекта
app.post('/api/v1/projects', (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name обязателен"
        });
    }

    res.status(201).json({
        success: true,
        data: {
            id: 1,
            name: name
        }
    });
});

// Удаление проекта
app.delete('/api/v1/projects/:id', (req, res) => {

    res.json({
        success: true,
        message: "Проект удалён"
    });
});

// GET /api/v1/projects - список всех проектов
app.get('/api/v1/projects', (req, res) => {
    // Здесь должна быть логика получения из БД, пока вернём массив
    res.json({
        success: true,
        data: []  // пустой массив, можно позже заполнить
    });
});

// GET /api/v1/projects/:id - получить конкретный проект
app.get('/api/v1/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Заглушка: если id = 1, вернём тестовый проект
    if (id === 1) {
        res.json({
            success: true,
            data: {
                id: 1,
                name: "Пример проекта"
            }
        });
    } else {
        res.status(404).json({
            success: false,
            error: "Проект не найден"
        });
    }
});

// PUT /api/v1/projects/:id - обновить проект
app.put('/api/v1/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name обязателен"
        });
    }
    // Заглушка: всегда успех
    res.json({
        success: true,
        data: {
            id: id,
            name: name
        }
    });
});





app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000");
});
