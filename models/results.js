const mongoose = require('mongoose')

// Create the results moodel
let Results = mongoose.model('results', {
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: true
  },
  links: [{ title: String, url: String }]
})

// Export module
module.exports = Results
