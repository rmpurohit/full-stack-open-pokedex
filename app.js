/* eslint-env node */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// eslint-disable-next-line no-console
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
