const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors)
app.use(express.json())

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.send("This API is working Fine")
})

