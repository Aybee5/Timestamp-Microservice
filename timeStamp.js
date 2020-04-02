let express = require('express')
let app = express()


//Solution to the challenge
app.get("/api/timestamp/:date_string", (req, res) =>{
    let dateString = req.params.date_string
    let date
    if (!dateString) {
        date = new Date()
    }
    else {
        date = new Date(dateString)
        let isValid = date.getTime()
        if (date) {
            res.status(201).json({unix: date.getTime(), utc : date.toUTCString()})
        }
        else{
            res.json({unix: null, utc : "Invalid Date" })
        }
    }
  })