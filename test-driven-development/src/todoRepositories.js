const loki = require('lokijs')

class TodoRepository {
    constructor() {
        const db = new loki('todo', { })
        this.schedule = db.addCollection('schedule')
    }

    list() {
        return this.schedule.find()
    }

    create() {
        return this.schedule.insertOne(data)
    }
}

const c = new TodoRepository()
c.create({ name: 'xuxadasilva', age: 90 })
c.create({ name: 'jonaszinho', age: 44})

console.log('list', c.list())

module.exports = TodoRepository