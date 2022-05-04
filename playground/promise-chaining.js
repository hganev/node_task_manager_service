require('../src/db/mongoose')
const User = require('../src/models/user');

// Promise chaining example
// User.findByIdAndUpdate('62684f3cc0c289b212fc69f6', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((count) => {
//     console.log('count: ', count)
// }).catch(err => console.log('err', err));

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('62684f3cc0c289b212fc69f6', 2).then(count => console.log('count: ', count)).catch(err => console.log('err: ', err ))