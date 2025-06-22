const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

function generatePassword(length, upper, lower, number, symbol) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let chars = '';
    if (upper) chars += upperCase;
    if (lower) chars += lowerCase;
    if (number) chars += numbers;
    if (symbol) chars += symbols;

    if (!chars) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
}

app.post('/generate-password', (req, res) => {
    const { length, upper, lower, number, symbol } = req.body;
    const password = generatePassword(length, upper, lower, number, symbol);
    res.json({ password });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});