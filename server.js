'use strict'

const express = require('express')
const app = express()
const port = 3000
const DataStreamService = require('./DataStreamService')

/* Static content folder */
app.use(express.static('public'))

/* Remove X-Powered-By response header */
app.disable('x-powered-by')

/* Proxy just in case we want to add/remove headers to response */
app.use((req, res, next) => {
    //res.append('Access-Control-Allow-Origin', ['*'])
    //res.removeHeader("X-Powered-By")
    next();
});

/**
 * Root endpoint
 */
app.get('/', (req, res) => {
  res.status(404).json({statusCode: 404, message: "What are you doing here? :)"})
})

/**
 * DataStream Aggregated Data endpoint
 */
app.get('/ds', (req, res) => {
  DataStreamService( (content) => {
    let jsonContent = {"data": []}
    if (content) {
      jsonContent = JSON.parse(content)
      if ("metadata" in jsonContent) {
        delete jsonContent.metadata
      }
    }
    res.json(jsonContent)
  })
})

/* Start server */
app.listen(port, () =>
  console.log('\x1b[33m%s\x1b[0m', `Report console App listening on port ${port}!`)
)
