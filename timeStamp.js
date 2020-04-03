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
        if (!isNaN(dateString)){
            date = new Date(parseInt(dateString))
        }
        else{
            date = new Date(dateString)
        }
        }
    if (date.toString() === "Invalid Date") {
        res.json({error : date.toString()})
    }
    else {
        res.json({unix: date.getTime(), utc : date.toUTCString()}) 
    }
  })
module.exports = app;