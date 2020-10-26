var express = require('express');
var router = express.Router();
var data = require('../data.js');


/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(data.Players);
  res.render('index', { title: 'Express', players: data.Players, opers: data.Opers });
});

router.post('/gettemplateoper', function (req, res, next) {
  var dataoper = data.Opers.find(x => x.id == req.body.idoper);
  res.render('operslot.pug', { data: dataoper });
})

router.post('/resetplayersdata', (req, res) => {
  data.Players = []
  for (let index = 0; index < 5; index++) {
    var player = {
      name: '',
      attackopers: [
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
      ],
      defenceopers: [
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
        {
          id: -1
        },
      ]

    }
    data.Players.push(player);
  }
  res.send();
})



module.exports = router;
