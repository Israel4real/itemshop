const mongoose = require('mongoose');
const config = require('../config/database');

var Schema = mongoose.Schema;

//ItemSchema
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true
  }
});


const Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.getItemById = function(id, callback){
  Item.findById(id, callback);
}

module.exports.deleteItemById = function(id, callback){
  Item.findByIdAndRemove(id, callback);
}

module.exports.getItemByItemName = function(itemName, callback){
  const query = {name: itemName}
  Item.findOne(query, callback);
}

module.exports.addItem = function(newItem, callback){
  newItem.save(callback);
}


