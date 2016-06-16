var express = require('express');
var router = express.Router();

// Models
var Appointment = require('../models/appointment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '||   Schedule-Er   ||' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: '||   Schedule-Er   ||' });
})
// POST appointments  route
router.post('/appointment', function(req, res, next) {
  console.log(req.body.fullName);
  console.log("Hitting the post route")
  var appointment = new Appointment({
                        fullName: req.body.fullName,
                        email: req.body.email,
                        message: req.body.message,
                        time: req.body.time  });
      appointment.save(appointment, function(error) {
        if (error) {
          res.send(error);
        } else {
          res.json(appointment);
        }
      });
});

module.exports = router;

// POST cart items route
// router.post('/cart-items', function(req, res, next) {
//   console.log(req);
//   var cartItem = new CartItem({ userId: req.user._id,
//                                 title: req.body.product.title,
//                                 ASIN: req.body.product.ASIN,
//                                 price: req.body.product.price,
//                                 image: req.body.product.image });
//   cartItem.save(cartItem, function(error) {
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(cartItem);
//     }
//   });
// });
