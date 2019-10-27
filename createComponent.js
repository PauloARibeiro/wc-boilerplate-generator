const skeleton = require('./skeleton')

const createComponent = name => {
  this.fs = require('fs')
  this.name = name.toLowerCase()
  this.path = `${__dirname}/src/components/${this.name}`

  // CHECK IF COMPONENT DIRECTORY EXISTS
  this.checkIfComponentExists = async () => this.fs.existsSync(this.path)

  // CREATE COMPONENT FOLDER
  this.createComponent = async () => {
    const nameWithNoSpecialChars = this.name.replace(/[^a-zA-Z0-9]/g, '')

    // CREATE FOLDER AND FILES
    await Promise.all([
      this.fs.mkdirSync(this.path, error => (error ? this.error(error) : '')),
      this.createFile('.js', skeleton.js(nameWithNoSpecialChars, this.name)),
      this.createFile('.html', skeleton.html(this.name)),
      this.createFile('.scss', skeleton.scss())
    ])
      .then(() => this.success(`Component ${this.name} was created!`))
      .catch(err => this.error(`Something went wrong ${err}`))
  }

  // CREATE FILE
  this.createFile = async (extention, template) => {
    const path = `${this.path}/${this.name}${extention}`

    return this.fs.writeFile(path, template, error => (error ? this.error(error) : ''))
  }

  // LOG ERROR
  this.error = error => console.log(`\n\n ❌  ${error} ❌ \n\n`)

  // LOG SUCCESS
  this.success = message => console.log(`\n\n ✔️  ${message} ✔️ \n\n`)

  // INIT EVERYTHING
  this.init = () => {
    // if (!this.checkCommand()) return this.error('Invalid Command')

    this.checkIfComponentExists()
      .then(() => this.createComponent())
      .catch(error => this.error(error))
  }

  // INTI
  this.init()
}

module.exports = createComponent
