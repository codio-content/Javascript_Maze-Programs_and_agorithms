
var cmdCtr=0

document.addEventListener('DOMContentLoaded', function() {
  
  //
  // Get cup
  //
  Blockly.Blocks['get_cup'] = {
    init: function() {
      this.setColour(20);
      this.appendDummyInput()
          .appendField("Get a cup");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('');
    }
  };
  Blockly.JavaScript['get_cup'] = function(block) {
    var code = 'var getCup = ' + cmdCtr;
    return code;
  };
  
  //
  // Boil Water
  //
  Blockly.Blocks['boil_water'] = {
    init: function() {
      this.setColour(20);
      this.appendDummyInput()
          .appendField("Boil the water");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('');
    }
  };
  Blockly.JavaScript['boil_water'] = function(block) {
    var code = 'var boilWater = ' + cmdCtr;
    return code;
  };  

  //
  // Add tea bag
  //
  Blockly.Blocks['tea_bag'] = {
    init: function() {
      this.setColour(20);
      this.appendDummyInput()
          .appendField("Add tea bag");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('');
    }
  };
  Blockly.JavaScript['tea_bag'] = function(block) {
    var code = 'var tea_bag = ' + cmdCtr;
    return code;
  };  
  
  
});
