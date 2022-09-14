// Import Packages
const express = require('express')
const router = express.Router()

//Data
let results = [
  {
    title: 'videos',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'pictures',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]

//Views
// Create GET controller
// router.get('/results', (req, res) => {
//   res.render('results', {
//     resultsKey: results
//   })
// })

const filterResults = (arr, search) => {
  return arr.filter(result => result.title.includes(search))
}

// Create POST controller
router.post('/', (req, res) => {
  // log result on terminal
  // console.log(req.body)

  // this is the input <input type="text" name="search" /> of the user from search.hbs
  let searchValue = req.body.search

  // this is what you render
  res.render('results', {
    resultsKey: filterResults(results, searchValue)
  })
})

// Export module
module.exports = router
