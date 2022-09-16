// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

//Views
const filterResults = (arr, search) => {
  return arr.filter(result => result.title.includes(search))
}

// Create POST controller
router.post('/', async (req, res) => {
  // Read from DB with .find({}) waiting with async/await
  let resultsKey = await Results.find({})
  // log result on terminal
  // console.log(resultsKey)

  // this is the input <input type="text" name="search" /> of the user from search.hbs
  let searchValue = req.body.search

  // this is what you render
  res.render('results', {
    // results
    resultsKey: filterResults(resultsKey, searchValue)
  })
})

// Export module
module.exports = router
