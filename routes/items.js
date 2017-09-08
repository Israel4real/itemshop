const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Item = require('../models/item');

//Add items
router.post('/create', function(req, res, next){
  let newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category
  });

  Item.addItem(newItem, function(err, item){
    if (err) {
      res.json({success: false, msg: 'Failed to add item! -- ' + err});
    } else {
      res.json({success: true, msg: newItem.name + ' added!'})
    }
  })
});

//Retrieve list of items
router.get('/list', function(req, res, next){
  Item.find({}, function(err, items){
    res.json(items);
  });
});

//Delete item
router.delete('/remove', function(req, res, next){
  Item.findByIdAndRemove(id, function(err, item){
    if (err) {
      res.json({success: false, msg: 'Failed to delete item!'});
    } else {
      res.json({success: true, msg: item.name + ' deleted!'})
    }
  }) 
 });


module.exports = router;
