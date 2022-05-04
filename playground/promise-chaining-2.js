require('../src/db/mongoose')
const Task = require('../src/models/task');

// Promise chaining example
// Task.findOneAndRemove('626a396b4b0d4c792dbfe12e').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((count) => {
//     console.log('incomplete tasks count: ', count)
// }).catch(err => console.log('err', err));

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    
    return count
} 

deleteTaskAndCount('626fead71ededa9f34b715c1')
    .then(count => console.log('Incompleted tasks count: ', count))
    .catch(err => console.log('err', err));