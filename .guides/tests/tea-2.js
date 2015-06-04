
var actions = [];

function action(val) {
  return actions.indexOf(val) > -1;
}

function wrongOrder() {
  window.testComplete = true;
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, "You can't make tea in that order!");
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
     codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, window.message || 'Mmm a warm cup of tea :)');
  } 
}
 
$.getScript(window.location.origin + '/public/content/blockly/' + window.testEnv.cmd + '/blockly-gen.js')
.done(function (script, status) {      
  console.log('done: test_static.js');
  if(!window.testComplete) {
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Making and enjoying a cup of tea requires more steps than that!');
  }
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});
