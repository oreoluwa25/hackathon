const express = require('express')
const LoggerMiddleware = require("./middleware/middleware")
const connect = require('./config/mongodb')
const {logs, logger} = require('./config/logger')
const {json} = require('express')
const routes = require('./routes/routes')
const EventEmittersss = require("./config/Emitter")


connect()
const app = express()
const port = 3000

logs()



app.use(json())
app.use(LoggerMiddleware);
app.use('/api', routes)


app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});