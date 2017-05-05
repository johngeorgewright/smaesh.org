const fs = require('fs')
const pathHelper = require('path')
const {capitalizeAll} = require('humanize-plus')

const capitalize = str => capitalizeAll(str.split('-').join(' '))

const viewPath = pathHelper.resolve(__dirname, '..', 'views')

const getBasename = f => pathHelper.basename(f, pathHelper.extname(f))

const routes = fs
  .readdirSync(viewPath)
  .map(filename => {
    const basename = getBasename(filename)
    return {
      basename,
      filename,
      path: basename === 'home' ? '/' : `/${basename}`,
      label: capitalize(basename)
    }
  })

exports.all = () => routes.slice()

exports.nav = () => routes.filter(({basename}) => basename !== 'home')
