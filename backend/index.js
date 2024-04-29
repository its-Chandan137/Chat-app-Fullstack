const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "3ebe0280-e81c-4446-bfc5-90fdf1617f84" } }
        )
        return res.status(r.status).json(r.data)
    } catch (err) {
        return res.status(err.response.status).json(err.response.data);
    }
});

app.listen(3001);
