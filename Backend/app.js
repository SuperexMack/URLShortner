const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000
const user = require("./user/user")
app.use(express.json())
app.use(cors())
app.use("/v1", user)

app.listen(PORT, (req, res) => {
    console.log(`server is running at the port number ${PORT}`)
})
