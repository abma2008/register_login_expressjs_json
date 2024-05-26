import express from "express"
import bcrypt from "bcrypt"
import router from "./routes/router.js"

// importing dotenv:
import config from "dotenv/config"
// initializing our app:
const app = express()

// defining the express.json():
app.use(express.json())
// using bodyparse as well:
app.use(express.urlencoded({ extended: false }))
// defining our port:
const port = process.env.PORT || 5000


// using router:
app.use('/', router)
// defining the listening port:
app.listen(port, () => console.log(`The server is running on port ${port}`))

