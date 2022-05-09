const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myfuction = async () => {
//     const token = jwt.sign({ _id: '12345' }, 'mynameishristo', { expiresIn: '7 days'})
//     console.log('token', token)

//     const payload = jwt.verify(token, 'mynameishristo')
//     console.log('payload', payload)
// }

// myfuction()