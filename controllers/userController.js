const bcrypt = require('bcryptjs');

const users = [
    {
        id: 1,
        name: 'Dito',
        username: 'dito',
        password: bcrypt.hashSync('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: 'Prasetyo',
        username: 'prasetyo',
        password: bcrypt.hashSync('qwerty123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

const getUsers = (req, res) => {
    const usersWithoutPasswords = users.map(({ password, ...rest }) => rest);

    res.json(usersWithoutPasswords);
};

module.exports = { getUsers };