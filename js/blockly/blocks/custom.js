define("customBlocks", [
  "blocklylib"
  ,"./blockly/msg"
  ,"./blockly/constants"
  ,"./blockly/context-menus"
  ,"./blockly/io"
  ,"./blockly/colors"
  ,"./blockly/block-utils"
],function(BlocklyLib, msg, constants, contextMenus, io, colors, blockUtils){

var blockDefs = BlocklyLib.Blocks;
var commandScreen =  'bot120'; // Global variable to save the actual motor type of GENERIC MOTORS Block

blockDefs['picaxe_motors_BOT120'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField("BOT120 Microbot");
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"));
    this.appendDummyInput()
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"))
        .appendField(msg.get("MOTORS_SET_SPEED"))
        .appendField(new BlocklyLib.FieldDropdown([
          [msg.get("MOTORS_NO_CHANGE"), "\t; No speed change;"],
          [msg.get("MOTORS_FAST"), "\tinput C.5 ; fast"],
          [msg.get("MOTORS_SLOW"), "\toutput C.5 ; slow"]
          ]), "SPEED");
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  }
};

blockDefs['picaxe_motors_AXE120'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField("AXE120");
    this.appendValueInput("LEFT")
        .setCheck(constants.TYPES.VAL)
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"))
        .appendField(msg.get("MOTORS_LEFT"));
     this.appendValueInput("RIGHT")
        .setCheck(constants.TYPES.VAL)
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"))
        .appendField(msg.get("MOTORS_RIGHT"));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  }
};

blockDefs['picaxe_motors_KMR01'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField("K-MR-01");
    this.appendValueInput("LEFT")
        .setCheck(constants.TYPES.VAL)
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"))
        .appendField(msg.get("MOTORS_LEFT"));
     this.appendValueInput("RIGHT")
        .setCheck(constants.TYPES.VAL)
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"))
        .appendField(msg.get("MOTORS_RIGHT"));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  }
};

blockDefs['picaxe_motors_CHI035'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField("CHI035");
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"))
        .appendField("AXE020");
    this.appendDummyInput()
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  }
};

blockDefs['picaxe_motors_AXE023'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField("AXE023");
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"));
    this.appendDummyInput()
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  }
};

blockDefs['picaxe_motors_servo'] = {
  init: function() {

    var thisObj = this;

    function image(name) {
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*");
    }

    function changed(newState) {
      if (newState == "FALSE") return;

      thisObj.inputList.forEach(function(input){
        input.fieldRow.forEach(function(field){
          if (field instanceof BlocklyLib.FieldCheckbox && field != thisObj)
          {
            field.setValue("FALSE");
          }
        });
      });

    }

    function checkbox(defaultTrue) {
      return new BlocklyLib.FieldCheckbox(defaultTrue ? "TRUE" : "FALSE", changed);
    }

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(checkbox(), "FL")
        .appendField(checkbox(), "F")
        .appendField(checkbox(), "FR")
        .appendField(image("fr"))
        .appendField(msg.get("MOTORS_SERVO_MOTOR"));
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(checkbox(), "L")
        .appendField(checkbox(true), "STOP")
        .appendField(checkbox(), "R")
        .appendField(image("r"));
    this.appendDummyInput()
        .appendField(image("bl"))
        .appendField(checkbox(), "BL")
        .appendField(checkbox(), "B")
        .appendField(checkbox(), "BR")
        .appendField(image("br"));
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  },
  onchange: function() {
    if (!blockUtils.canSetWarning(this)) return;
    var warning;
    var found = BlocklyLib.mainWorkspace.getAllBlocks().some(function(block){
      return block.type == "picaxe_motors_servo_setup";
    });
    if (!found) warning = msg.get("MISSING_SERVO_SETUP");
    this.setWarningText(warning);
  }
};

    
// MOTOR : Generic
blockDefs['picaxe_motors_generic'] = {
  
 init: function() {
    
    var thisObj = this;
    var speedIsVisible = false;
		var checkboxKMR01Visible = false; 
    var speedBot120IsVisible = false;
    
    function image(name){
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*", function() {
        thisObj.setFieldValue(name.toUpperCase(),'COMMAND_MOTORS');
      })
    };
    
	function showKMR01Checkbox(visible) {
		if (visible){
			thisObj.appendDummyInput("INPUT_KMR01")
			.appendField(new Blockly.FieldCheckbox("FALSE"), "checkboxKMR01")
			.appendField("Invert the motor polarity"); //msg.get
			checkboxKMR01Visible = true; 
		} else {
			thisObj.removeInput("INPUT_KMR01");
			checkboxKMR01Visible = false; 
		}
	}
	
    function showSpeed(visible) {
      if (visible){
        thisObj.appendValueInput("LEFT")
          .setAlign(Blockly.ALIGN_RIGHT)
          .setCheck(constants.TYPES.VAL)
          .appendField(msg.get("MOTORS_LEFT"));         
        thisObj.appendValueInput("RIGHT")
          .setAlign(Blockly.ALIGN_RIGHT)
          .setCheck(constants.TYPES.VAL)
          .appendField(msg.get("MOTORS_RIGHT"));
        speedIsVisible = true;
      } else {
        thisObj.removeInput("LEFT");
        thisObj.removeInput("RIGHT");
        speedIsVisible = false;
      }
    }
    
    function showSpeedBot120(visible) {
      if (visible){
        thisObj.appendDummyInput("SPEED")
          .appendField(msg.get("MOTORS_SET_SPEED"))
          .appendField(new BlocklyLib.FieldDropdown([
            [msg.get("MOTORS_NO_CHANGE"), "\t; No speed change;"],
            [msg.get("MOTORS_FAST"), "\tinput C.5 ; fast"],
            [msg.get("MOTORS_SLOW"), "\toutput C.5 ; slow"]
            ]), "SPEED");
        speedBot120IsVisible = true;
      } else {
        thisObj.removeInput("SPEED");       
        speedBot120IsVisible = false;
      }
    }    

    this.setHelpUrl(constants.HELP_URL+"/../commands/stop");
    this.setColour(colors.MOTORS);
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(image("f"))
        .appendField(image("fr"))
        .appendField(new BlocklyLib.FieldDropdown([
          ["AXE020","axe020"],
          ["AXE023","axe023"],
          ["AXE120","axe120"],
          ["AXE120" + "+" + msg.get("MOTORS_GENERIC_SPEED"),"axe120s"],
          ["BOT120 Microbot","bot120"],
          ["BOT120 Microbot" + "+" + msg.get("MOTORS_GENERIC_SPEED"),"bot120s"],
          ["CHI035","chi035"],
          [msg.get("MOTORS_KMR01"),"kmr01"],
          [msg.get("MOTORS_KMR01") + "+" + msg.get("MOTORS_GENERIC_SPEED"),"kmr01s"],
          [msg.get("MOTORS_SERVO_MOTOR"),"servo"],
          ]), "MOTORS_TYPE");
       
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(image("stop"))
        .appendField(image("r"));
          
    this.appendDummyInput("dropdown")
        .appendField(image("bl"))
        .appendField(image("b"))
        .appendField(image("br"))
        .appendField(new BlocklyLib.FieldDropdown([
          [msg.get("MOTORS_DIRECTION_FORWARD_LEFT"),"FL"],
          [msg.get("MOTORS_DIRECTION_FORWARD"),"F"],
          [msg.get("MOTORS_DIRECTION_FORWARD_RIGHT"),"FR"],
          [msg.get("MOTORS_DIRECTION_LEFT"),"L"],
          [msg.get("MOTORS_DIRECTION_STOP"),"STOP"],
          [msg.get("MOTORS_DIRECTION_RIGHT"),"R"],
          [msg.get("MOTORS_DIRECTION_BACKWARD_LEFT"),"BL"],
          [msg.get("MOTORS_DIRECTION_BACKWARD"),"B"],
          [msg.get("MOTORS_DIRECTION_BACKWARD_RIGHT"),"BR"],
          ]), "COMMAND_MOTORS") ;
   
    showSpeed(true); //By showing now we reserve toolbox height for later
    showKMR01Checkbox(true);
		
    this.onchange = function(){
      commandScreen = this.getFieldValue('MOTORS_TYPE');
	  
		if (commandScreen=='kmr01' || commandScreen=='kmr01s'){
			if (!checkboxKMR01Visible) showKMR01Checkbox(true);
		}else{
			if (checkboxKMR01Visible) showKMR01Checkbox(false);
		}
		
		if (commandScreen=='axe120s' || commandScreen=='kmr01s'){
				if (speedBot120IsVisible) showSpeedBot120(false);
				if (!speedIsVisible) showSpeed(true);
		} else if (commandScreen=='bot120s') {
				if (speedIsVisible) showSpeed(false);
				if (!speedBot120IsVisible) showSpeedBot120(true);
		} else {
				if (speedIsVisible) showSpeed(false);
				if (speedBot120IsVisible) showSpeedBot120(false);
		}
      
		if (commandScreen=='servo'){
			if (!blockUtils.canSetWarning(this)) return;
			var warning;
			var found = BlocklyLib.mainWorkspace.getAllBlocks().some(function(block){
			return block.type == "picaxe_motors_servo_setup";
			});
			if (!found) warning = msg.get("MISSING_SERVO_SETUP");
				this.setWarningText(warning);
		} else {
			this.setWarningText(null);
		}
	}
    
    //Make the toolbox default be the last used motor type
    if (this.isInFlyout){
      this.setFieldValue(commandScreen,'MOTORS_TYPE');
    }
    
    this.setTooltip('');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.padIcons = true;
    this.customContextMenu = contextMenus.customContextMenu;
    blockUtils.newBlock(this);
  } 
};




// MOTOR : SERVO SETUP

blockDefs['picaxe_motors_servo_setup'] = {
  init: function() {
    this.setHelpUrl(constants.HELP_URL+"/../commands/servo");
    this.setColour(colors.OUTPUT);
    this.appendDummyInput()
        .appendField(msg.get("MOTORS_SERVO_A"))
        .appendField(new BlocklyLib.FieldDropdown(io.makeServoPinList()), "PIN");
    this.appendValueInput("STOPA")
        .setCheck(constants.TYPES.VAL)
        .setAlign(BlocklyLib.ALIGN_RIGHT)
        .appendField(msg.get("MOTORS_STOP_A"));
    this.appendValueInput("OFFSETA")
        .setCheck(constants.TYPES.VAL)
        .setAlign(BlocklyLib.ALIGN_RIGHT)
        .appendField(msg.get("MOTORS_OFFSET_A"));
    this.appendDummyInput()
        .appendField(msg.get("MOTORS_SERVO_B"))
        .appendField(new BlocklyLib.FieldDropdown(io.makeServoPinList()), "PIN2");
    this.appendValueInput("STOPB")
        .setCheck(constants.TYPES.VAL)
        .setAlign(BlocklyLib.ALIGN_RIGHT)
        .appendField(msg.get("MOTORS_STOP_B"));
    this.appendValueInput("OFFSETB")
        .setCheck(constants.TYPES.VAL)
        .setAlign(BlocklyLib.ALIGN_RIGHT)
        .appendField(msg.get("MOTORS_OFFSET_B"));
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.customContextMenu = contextMenus.customContextMenu;
    this.onchange = blockUtils.checkInputs;
    blockUtils.newBlock(this);
  },
  servoPins: ["PIN", "PIN2"]
};


});
