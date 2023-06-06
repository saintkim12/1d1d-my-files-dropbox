import { Dropbox } from 'dropbox'

const MY_TOKEN = ''
var dbx = new Dropbox({ accessToken: MY_TOKEN })

// console.log('dbx', dbx)
dbx
  .filesListFolder({ path: '' })
  .then(function (response) {
    if (response?.result?.entries) {
      const list = response?.result?.entries
      console.log('list', JSON.stringify(list))
    } else {
      console.warn('no result?.entries')
    }
  })
  .catch(function (error) {
    console.log(error)
  })
