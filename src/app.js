const express = require("express");
import Routes from './routes'

const app = express();



app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});
app.use('/api', Routes);


export default app;