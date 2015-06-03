
var fs = require('fs');
var express = require('express');
var router = express.Router();


// 5
router.get('/tea-2', function(req, res) {
  
  var actions = [];
  
  function action(val) {
    return actions.indexOf(val) > -1;
  }
  
  function wrongOrder() {
    res.send({
      success: false,
      msg: "You can't make tea in that order!"
    });    
  }
  
  function tea_boil_water() {  
    console.log('tea_boil_water')
    actions.push('tea_boil_water');
  }
  
  function tea_get_cup() {
    console.log('tea_get_cup')

    if(action('tea_add_sugar') ||
       action('tea_milk') ||
       action('tea_pour_water')) {
    
      return wrongOrder();
    }
      
    actions.push('tea_get_cup');
  }
  
  function tea_get_tea_bag() {
    console.log('tea_get_tea_bag')

    if(!action('tea_get_cup')) {
      return wrongOrder();
    }
    
    actions.push('tea_get_tea_bag');
  }
  
  function tea_add_sugar() {
    console.log('tea_add_sugar')

    if(!action('tea_get_cup')) {
      return wrongOrder();
    }
    
    actions.push('tea_add_sugar');
  }
  
  function tea_pour_water() {
    console.log('tea_pour_water')

    if(!action('tea_get_cup') && !action('tea_boil_water')) {
      return wrongOrder();
    }
    
    actions.push('tea_pour_water');
  }
  
  function tea_milk() {
    console.log('tea_milk')

    if(!action('tea_get_cup')) {
      return wrongOrder();
    }
    
    actions.push('tea_milk');
  }
  
  function tea_drink() {
    if(action('tea_boil_water') && 
       action('tea_get_cup') && 
       action('tea_get_tea_bag') &&
       action('tea_pour_water')) {
     
      return res.send({
        success: true,
        msg: 'Mmm a warm cup of tea :)'
      });
    } 
  }
  
  try {
    eval(fs.readFileSync('./public/content/blockly/tea-2/blockly-gen.js') + '');
        
    return res.send({
      success: false,
      msg: 'Making and enjoying a cup of tea requires more steps than that!'
    });
  }
  catch(e) {
    console.log(e);
    return res.send({
      sysError: true,
      msg: 'System Error'
    });
  }
  
});


module.exports = router;
