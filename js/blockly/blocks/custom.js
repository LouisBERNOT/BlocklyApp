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


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------\\LOUPIOT_ROBOT//---------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PICTURE: Loupiot
blockDefs['picaxe_picture_loupiot'] = {
  init: function() {
    
    function image(name){
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 150, 150, "*")
    };
    
    this.appendDummyInput()
        .appendField(image("Loupiot_Picture"));
    this.setColour("#F44336");
    blockUtils.newBlock(this);
  }
};

//MOTOR SPEED : Loupiot
blockDefs['picaxe_motors_speed_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("MOTORS_SPEED_LOUPIOT")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("MOTORS_SPEED_SELEC_LOUPIOT")[0], "LR"],
            [msg.get("MOTORS_SPEED_SELEC_LOUPIOT")[1], "R"],
            [msg.get("MOTORS_SPEED_SELEC_LOUPIOT")[2], "L"]
            ]), "mot_choice")
        .appendField(msg.get("MOTORS_SPEED_LOUPIOT")[1]);
    this.appendValueInput("Loupiot_speed_value");
    
    /* this.onchange = function() {
      var test = false ;
      var blocStart = this ;
      var block = blocStart ; 
      while (block){
        if (block.type == "picaxe_motors_dir_loupiot"){
          test = true ; break;
        }
        block = block.getNextBlock();
      }
      if (!test){
        block = blocStart ;
        while (block){
          if (block.type == "picaxe_motors_dir_loupiot"){
          test = true ; break;
          }
          block = block.getParent();
        }
      }
      if (test){
        this.setWarningText(null);
      }else{
        this.setWarningText(msg.get("MOTORS_WARNING_LOUPIOT"));
      }
    } */
    
    this.setCommentText("Speed motor need to be between 0 and 400 to work good ");
    this.setInputsInline(true);
    this.setColour(colors.OUTPUT);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.padIcons = true;
    blockUtils.newBlock(this);
  }
};

//MOTOR DIR : Loupiot
blockDefs['picaxe_motors_dir_loupiot'] = {
  init: function() {
    
    var thisObj = this;
    
    function image(name){
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 16, 16, "*", function() {
        thisObj.setFieldValue(name.toUpperCase(),'COMMAND_MOTORS_LOUPIOT');
      })
    };
    this.appendDummyInput()
        .appendField(image("fl"))
        .appendField(image("f"))
        .appendField(image("fr"))
        .appendField(msg.get("MOTORS_DIRECTION_LOUPIOT"));
    this.appendDummyInput()
        .appendField(image("l"))
        .appendField(image("stop"))
        .appendField(image("r"))
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
          ]), "COMMAND_MOTORS_LOUPIOT") ;
    this.appendDummyInput()
        .appendField(image("bl"))
        .appendField(image("b"))
        .appendField(image("br"));
        
    /* this.onchange = function() {
      var test = false ;
      var blocStart = this ;
      var block = blocStart ; 
      while (block){
        if (block.type == "picaxe_motors_speed_loupiot"){
          test = true ; break;
        }
        block = block.getNextBlock();
      }
      if (!test){
        block = blocStart ;
        while (block){
          if (block.type == "picaxe_motors_speed_loupiot"){
          test = true ; break;
          }
          block = block.getParent();
        }
      }
      if (test){
        this.setWarningText(null);
      }else{
        this.setWarningText(msg.get("MOTORS_WARNING_LOUPIOT"));
      }
    } */
    
    this.setColour(colors.OUTPUT);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setInputsInline(false);
    this.padIcons = true;
    blockUtils.newBlock(this);
  }
};

//LINE SENSSOR IF : Loupiot
blockDefs['picaxe_line_senssor_if_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("INPUT_IF_GENERIC")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[0], "IR_R"],
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[1], "IR_C"],
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[2], "IR_L"]
            ]), "IR_Senssor")
        .appendField(msg.get("INPUT_IF_GENERIC")[1])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "IR_Senssor_State");
    this.appendStatementInput("DO_IF")
        .appendField(msg.get("INPUT_IF_GENERIC")[2]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    blockUtils.newBlock(this);
  }
};

//LINE SENSSOR IF / ELSE: Loupiot
blockDefs['picaxe_line_senssor_if_else_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("INPUT_IF_GENERIC")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[0], "IR_R"],
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[1], "IR_C"],
            [msg.get("INPUT_IR_SENSSOR_LOUPIOT")[2], "IR_L"]
            ]), "IR_Senssor")
        .appendField(msg.get("INPUT_IF_GENERIC")[1])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "IR_Senssor_State");
    this.appendStatementInput("DO_IF")
        .appendField(msg.get("INPUT_IF_GENERIC")[2]);
    this.appendStatementInput("DO_ELSE")
        .appendField(msg.get("INPUT_IF_GENERIC")[3]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    blockUtils.newBlock(this);
  }
};

//BLUETOOTH RX: Loupiot
blockDefs['picaxe_blth_rx_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_RX_ALL"));
    this.appendValueInput("varBTLH");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.LOOPS);
    blockUtils.newBlock(this);
  }
};

//BLUETOOTH TX: Loupiot
blockDefs['picaxe_blth_tx_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_TX_ALL")[0]);
    this.appendValueInput("varBTLH");
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_TX_ALL")[1]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.LOOPS);
    blockUtils.newBlock(this);
  }
};

//BLINKER : Loupiot
blockDefs['picaxe_blinker_loupiot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("OUTPUT_BLINKER_LOUPIOT"))
        .appendField(new Blockly.FieldDropdown([
          [msg.get("OUTPUT_BLINKER_SIDE_LOUPIOT")[0], "R"],
          [msg.get("OUTPUT_BLINKER_SIDE_LOUPIOT")[1], "L"],
          [msg.get("OUTPUT_BLINKER_SIDE_LOUPIOT")[2], "RL"]
          ]), "LED_LOUPIOT")
        .appendField("")
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "STATE_LED_LOUPIOT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.OUTPUT);
    blockUtils.newBlock(this);
  }
};

//READ VOLTAGE : Loupiot
blockDefs['picaxe_voltage_loupiot'] = {
  init: function() {
    this.appendValueInput("loupiot_voltage")
        .appendField(msg.get("INPUT_VOLTAGE_LOUPIOT"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    this.setCommentText("0 for 0 Volts and 255 for 4.5 Volts. Warning at 200 ! ");
    blockUtils.newBlock(this);
  }
};

//READ ULTRASON : Loupiot
blockDefs['picaxe_ultrason_loupiot'] = {
  init: function() {
    this.appendValueInput("loupiot_ultrason")
        .appendField(msg.get("INPUT_ULTRASON_LOUPIOT"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    blockUtils.newBlock(this);
  }
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\END ROBOT LOUPIOT //---------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------\\PORTAL_C AUTOPROG //--------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PICTURE: portal
blockDefs['picaxe_picture_portal'] = {
  init: function() {
    
    function image(name){
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 300, 200, "*") 
    };
    
    this.appendDummyInput()
        .appendField(image("portail_c"));
    this.setColour("#FFAB40");
    blockUtils.newBlock(this);
  }
};

//WIRING: portal
blockDefs['picaxe_wiring_portal'] = {
  init: function() {
    var wiringPortal = false ; 
    var thisObj = this; 
    
    function image(name,x,y,test){
      if (test){
        return new BlocklyLib.FieldImage("assets/" + name + ".png", x, y, "*",function() {
        wiringPortalOnOff();})
      }else{
        return new BlocklyLib.FieldImage("assets/" + name + ".png", x, y, "*")}
    };
    
    function wiringPortalOnOff(){
      if (!wiringPortal){
        wiringPortal = true ; 
        thisObj.setFieldValue("assets/f.png","listOnOff");
        for (var i = 1; i <= (msg.get("PORTAL_WIRING_VALUE")).length - 1 ; i++) {
          thisObj.appendDummyInput('Wiring' + i )
              .appendField(image("r",16,16,0))
              .appendField(msg.get("PORTAL_WIRING_VALUE")[i][0]);
          for (var j = 1; j <= (msg.get("PORTAL_WIRING_VALUE")[i]).length - 1 ; j++) {
              thisObj.appendDummyInput('Wiring2' + j)
                 .appendField("          ")
                 .appendField(image("br",16,16,0))
                 .appendField(msg.get("PORTAL_WIRING_VALUE")[i][j]);
          }
        }
      }else{
        wiringPortal = false ; 
        thisObj.setFieldValue("assets/b.png","listOnOff");
        for (var i = 0; i <= (msg.get("PORTAL_WIRING_VALUE")).length - 1 ; i++) {
          thisObj.removeInput('Wiring' + i);
          for (var j = 1; j <= (msg.get("PORTAL_WIRING_VALUE")[i]).length - 1 ; j++) {
            thisObj.removeInput('Wiring2' + j);
          }
        }
      }
    }
    
    this.appendDummyInput()
        .appendField(msg.get("PORTAL_WIRING_VALUE")[0])
        .appendField(image("b",20,20,1),"listOnOff");
    this.setColour("#FFAB40");
    blockUtils.newBlock(this);
  }
};

//MOTOR CONTROL: portal
blockDefs['picaxe_motor_portal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("MOTORS_DIRECTION_PORTAL")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("MOTORS_DIRECTION_PORTAL")[1], "Open"],
            [msg.get("MOTORS_DIRECTION_PORTAL")[2], "Closed"],
            [msg.get("MOTORS_DIRECTION_PORTAL")[3], "Stop"]
            ]), "DIR_Portal");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.OUTPUT);
    blockUtils.newBlock(this);
  }
};

//SENSSOR IF : Portal
blockDefs['picaxe_senssor_if_portal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("INPUT_IF_GENERIC")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_SENSSOR_PORTAL")[0], "Open"],
            [msg.get("INPUT_SENSSOR_PORTAL")[1], "Closed"],
            [msg.get("INPUT_SENSSOR_PORTAL")[2], "IR"]
            ]), "Senssor")
        .appendField(msg.get("INPUT_IF_GENERIC")[1])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "Senssor_State");
    this.appendStatementInput("DO_IF")
        .appendField(msg.get("INPUT_IF_GENERIC")[2]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    blockUtils.newBlock(this);
  }
};

//SENSSOR IF / ELSE: Portal
blockDefs['picaxe_senssor_if_else_portal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("INPUT_IF_GENERIC")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_SENSSOR_PORTAL")[0], "Open"],
            [msg.get("INPUT_SENSSOR_PORTAL")[1], "Closed"],
            [msg.get("INPUT_SENSSOR_PORTAL")[2], "IR"]
            ]), "Senssor")
        .appendField(msg.get("INPUT_IF_GENERIC")[1])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "Senssor_State");
    this.appendStatementInput("DO_IF")
        .appendField(msg.get("INPUT_IF_GENERIC")[2]);
    this.appendStatementInput("DO_ELSE")
        .appendField(msg.get("INPUT_IF_GENERIC")[3]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.INPUT);
    blockUtils.newBlock(this);
  }
};

//SENSSOR WAITING : Portal
blockDefs['picaxe_senssor_waiting_portal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("INPUT_FDC_WAITING_PORTAL")[0])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_SENSSOR_PORTAL")[0], "Open"],
            [msg.get("INPUT_SENSSOR_PORTAL")[1], "Closed"],
            [msg.get("INPUT_SENSSOR_PORTAL")[2], "IR"]
            ]), "Senssor")
        .appendField(msg.get("INPUT_FDC_WAITING_PORTAL")[1])
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "Senssor_State");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.DELAYS);
    blockUtils.newBlock(this);
  }
};

//LED CONTROL: portal
blockDefs['picaxe_led_portal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gyrophare ")
        .appendField(new Blockly.FieldDropdown([
            [msg.get("INPUT_ON_STATE"), "HIGH"],
            [msg.get("INPUT_OFF_STATE"), "LOW"]
            ]), "LED_State");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.OUTPUT);
    blockUtils.newBlock(this);
  }
};

//BLUETOOTH RX: Portail
blockDefs['picaxe_blth_rx_portail'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_RX_ALL"));
    this.appendValueInput("varBTLH")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.LOOPS);
    blockUtils.newBlock(this);
  }
};

//BLUETOOTH TX: Portail
blockDefs['picaxe_blth_tx_portail'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_TX_ALL")[0]);
    this.appendValueInput("varBTLH");
    this.appendDummyInput()
        .appendField(msg.get("SERIAL_TX_ALL")[1]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.LOOPS);
    blockUtils.newBlock(this);
  }
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\END PORTAL_C AUTOPROG  //----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\  MINI ROBOT  //-------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PICTURE: portal
blockDefs['picaxe_picture_kmr'] = {
  init: function() {
    
    function image(name){
      return new BlocklyLib.FieldImage("assets/" + name + ".png", 225, 175, "*") 
    };
    
    this.appendDummyInput()
        .appendField(image("kmr"));
    this.setColour("#5BA5A5");
    blockUtils.newBlock(this);
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
});
