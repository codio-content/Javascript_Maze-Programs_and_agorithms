
$(document).ready(function() {

  window.addEventListener('codio-button-custom', function (ev) {

    if (codio) {
      codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking');

      var jqxhr = $.get(window.location.origin + ':9500/tests/' + ev.cmd, function(data) {
        
        console.log(data);

        // Success     
        if(data.success) {
          codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, data.msg);
        }
        // Failed Test
        if(!data.success) {
          codio.setButtonValue(ev.id, codio.BUTTON_STATE.FAILURE, data.msg);
        }

        // System Error
        if(data.sysError) {
          codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, data.msg);        
        }
        
      });

      jqxhr.fail(function() {
        codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Server error'); 
      });    

    }
  });
  
});

