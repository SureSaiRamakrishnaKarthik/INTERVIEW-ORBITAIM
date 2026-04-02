const express = require('express');

const app = express();

const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');

app.use(logger);
app.use(express.json())

app.use((req,res,next)=>{
    res.status(500).json({error: 'Internal Server Error'})
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


