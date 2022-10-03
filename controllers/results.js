// Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

// Render filtered results
router.get('/', async (req, res) => {
  try {

		// 1. Get Data
		let results = await Results.find({
			title: { $regex: req.query.search, $options: 'i' }
		})
		// 2. Respond
		console.log('it worked');
		res.send(results)

  } catch (err) {
    res.send(err)
  }
})

// Export
module.exports = router

// let search = 'java'//req.query.searchInputForm
// // DB filter
// let sc = { $regex: search, $options: 'i' }
// let exactMatch = async search => {
//   let resultsURL = await Results.find({})
//   return resultsURL
// }
// // render page
// res.send({
//   results: await exactMatch(search),
//   resultsCountStr: 'abc',
//   searchText: 'searchTerm'
// })
