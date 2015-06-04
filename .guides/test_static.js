
$(document).ready(function() {
  window.addEventListener('codio-button-custom', function (env) {
    window.testEnv = env;
    codio.setButtonValue(env.id, codio.BUTTON_STATE.PROGRESS, 'Checking');
    
    $.getScript(window.location.origin + '/.guides/tests/' + env.cmd + '.js')
    .done(function (script, status) {      
      console.log('done: test_static.js');
    })
    .fail(function (jqxhr, settings, exception) {
      console.log(exception);
      codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
    }); 
  });
});
