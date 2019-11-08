const eg = require('./EdgeGrid')
const dotenv = require('dotenv').config()
const moment = require('moment')

// Aggregated DataStream ID
const STREAM_ID = process.env.STREAM_AGG_ID

// TODO: Simple example for testing pusposes. Getting only 1st page
const PAGE = 1
const SIZE = 100
const DT_PATTERN = 'YYYY-MM-DDTHH:mm:ss[Z]'
const WINDOW_HOURS = 8

module.exports = (callback) => {
  // Calculate Last WINDOW_HOURS hours
  const now = moment()
  const END = now.format(DT_PATTERN)
  const START = now.subtract(WINDOW_HOURS, 'hours').format(DT_PATTERN)

  //const api_endpoint = `/datastream-pull-api/v1/streams/${STREAM_ID}/raw-logs?start=${START}&end=${END}`
  const api_endpoint = `/datastream-pull-api/v1/streams/${STREAM_ID}/aggregate-logs?start=${START}&end=${END}`

  eg.auth({
    path: api_endpoint,
    method: 'GET',
    headers: {
      'Content-Type': "application/json"
    },
    body: ''
  })

  eg.send( (error, response, body) => {
    // TODO: Error handling
    callback(body)
  })

}
