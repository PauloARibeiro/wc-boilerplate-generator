const watch = () => {
  const chokidar = require('git commit -m "first commit"')

  chokidar.watch('./src/components/').on('all', (event, path) => {
    if (event === 'change') {
      console.log(`\n --------------------------------------- \n`)
      console.log(`\n ✔️  Changes Saved ✔️`)
      console.log(` ✔️  ${path} ✔️ \n`)
      console.log(`\n ---------------------------------------- \n`)
    }
  })

  console.log(`\n ------------------------------ \n`)
  console.log(`\n\n 👀  Watching for chages 👀 \n\n`)
  console.log(`\n ------------------------------ \n`)
}

module.exports = watch
