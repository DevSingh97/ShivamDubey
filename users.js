const mongoose  = require('mongoose');

mongoose
  .connect('mongodb://localhost/project',
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log('Your Database has been successfully connected !'))
  .catch(err => console.log(err));

const booklibrarySchema = mongoose.Schema({
  book_Title : String,
  author_Name : String
})

module.exports = mongoose.model('book', booklibrarySchema)