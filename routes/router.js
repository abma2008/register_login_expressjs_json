import express from "express"
import bcrypt from "bcrypt"

const router = express.Router()

// definig our in-memory users list:
let users = new Array(); // we can instead type: [] and it should give the same results.

// defining our route for register here:
router.post('/register', async (req, res) => {
    // collecting the email and password from the json object:
    const { email, password } = req.body
    try {
        const checkUser = users.find((user) => email === user.email)
        if (checkUser) {
            return res.status(400).json({ msg: 'The email is already registered...' })
        }
        // hashing password:
        const hashedPassword = await bcrypt.hash(password, 10)
        users.push({
            id: Date.now(),
            email: email,
            password: hashedPassword
        })
        console.log(`================ Showing Users======== Total: ${users.length}`)
        console.table(users)
        console.log("============================================================")
        return res.status(201).json({ msg: 'The Registration has completed successfully' })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})

// defining our route for login here:
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        // Checking if the user email exists or not:
        const checkEmail = users.find((user) => email === user.email)
        const checkUser = users.filter((user) => email === user.email)
        if (!checkEmail) {
            return res.status(400).json({ msg: 'The User Email is not registered...' })
        }
        // Checking the hashed password:
        const isMatched = await bcrypt.compare(password, checkEmail.password)
        if (isMatched) {
            return res.status(200).json({ msg: `Welcome ${checkEmail.email}.... you are logged in` })
        }
        else {
            return res.status(400).json({ msg: " Your Password is not correct...." })
        }
    } catch (err) {
        return res.status(400).json({ msg: err.message })
    }
})

// viewing users router:
router.get('/view', (req, res) => {
    if (users.length > 0) {
        return res.status(200).json(users)
    }
    else {
        return res.status(400).json({ msg: "The users are empty.... please add users." })
    }
})

export default router