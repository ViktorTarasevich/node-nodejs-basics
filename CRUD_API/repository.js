const fs = require('fs')
class Repository {
    constructor(filename) {
        if(!filename) {
            throw new Error(
                'Filename is required to create a datastore!')
        }
        this.filename = filename
        try {
            fs.accessSync(this.filename)
        } catch(err) {
            fs.writeFileSync(this.filename, '[]')
        }
    }
    async getAll() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                encoding : 'utf8'
            })
        )
    }

    async create(attrs){
        const records = await this.getAll()
        records.push(attrs)
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(records, null, 2)
        )
        return attrs
    }

    async findById(userId){
        const jsonRecords = await
            fs.promises.readFile(this.filename, {
                encoding : 'utf8'
            })
        const objRecord = JSON.parse(jsonRecords)
        const requiredRecord = objRecord.find(record => record.userId === userId)
        return requiredRecord
    }

    async update(userId, attrs) {
        const jsonRecords = await
            fs.promises.readFile(this.filename, {
                encoding: 'utf8'
            })
        const records = JSON.parse(jsonRecords)
        const record = records.find(
            eachRecord => eachRecord.userId === userId)
        if (!record) {
            throw new Error(`Id '${userId}' not found`)
        }
        Object.assign(record, attrs)
        await fs.promises.writeFile(
            this.filename,
            JSON.stringify(records, null, 2)
        )
        return record
    }
}

module.exports = new Repository('datastore.json')
