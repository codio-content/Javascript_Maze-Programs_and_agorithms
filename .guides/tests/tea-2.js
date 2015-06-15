
var actions = [];

var thumbsDownMessage = "Nice try, but you can't make a cup of tea in that order. You need to put the building blocks together in the same order in which they appear in the previous page. Check that page to remind you, then try again.";

function action(val) {
  return actions.indexOf(val) > -1;
}

function wrongOrder() {
  window.testComplete = true;
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, thumbsDownMessage);
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

    wrongOrder();
  }

  actions.push('tea_get_cup');
}

function tea_get_tea_bag() {
  console.log('tea_get_tea_bag')

  if(!action('tea_get_cup')) {
    wrongOrder();
  }

  actions.push('tea_get_tea_bag');
}

function tea_add_sugar() {
  console.log('tea_add_sugar')

  if(!action('tea_get_cup')) {
    wrongOrder();
  }

  actions.push('tea_add_sugar');
}

function tea_pour_water() {
  console.log('tea_pour_water')

  if(!action('tea_get_cup') && !action('tea_boil_water')) {
    wrongOrder();
  }

  actions.push('tea_pour_water');
}

function tea_milk() {
  console.log('tea_milk')

  if(!action('tea_get_cup')) {
    wrongOrder();
  }

  actions.push('tea_milk');
}

function tea_drink() {
  if(window.testComplete) return;
  
  if(action('tea_boil_water') && 
     action('tea_get_cup') && 
     action('tea_get_tea_bag') &&
     action('tea_pour_water')) {

     window.testComplete = true;
     codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, window.message || 'Well done: you have made a hot cup of tea.');
  } 
}
 
$.getScript(window.location.origin + '/public/content/blockly/' + window.testEnv.cmd + '/blockly-gen.js')
.done(function (script, status) {      
  console.log('done: test_static.js');
  if(!window.testComplete) {
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, thumbsDownMessage);
  }
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, "exception: " + exception.message); 
});
