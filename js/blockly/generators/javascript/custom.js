define("customJavascript", [
  "./blockly/generators/javascript"
],function(generators){

//-----------------------------------------------------------------------\\LOUPIOT_ROBOT//---------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//MOTOR SPEED : Loupiot
generators['picaxe_motors_speed_loupiot'] = function(block) {
  var speed = generators.valueToCode(block, 'Loupiot_speed_value', generators.ORDER_ATOMIC) || 0;
  var motorDir = {
    'LR':"picaxe.pwm.setup(\"B.1\",100," + speed + ");\npicaxe.pwm.setup(\"C.3\",100," + speed + ");",
    'R':"picaxe.pwm.setup(\"B.1\",100," + speed + ");",
    'L':"picaxe.pwm.setup(\"C.3\",100," + speed + ");",};
  var code = motorDir[block.getFieldValue('mot_choice')]+ '\n';;
  return generators.wrapOutput(block, code);
};

//MOTOR DIR : Loupiot
generators['picaxe_motors_dir_loupiot'] = function(block) {
  var commandMotor = {
    "FL"   : "picaxe.pin.write([\"B.3\",\"B.2\",\"C.2\"],0);\npicaxe.pin.write([\"C.1\"],1);",
    "F"    : "picaxe.pin.write([\"B.3\",\"C.2\"],0);\npicaxe.pin.write([\"B.2\",\"C.1\"],1);",
    "B"    : "picaxe.pin.write([\"B.2\",\"C.1\"],0);\npicaxe.pin.write([\"B.3\",\"C.2\"],1);",
    "BL"   : "picaxe.pin.write([\"B.3\",\"B.2\",\"C.1\"],0);\npicaxe.pin.write([\"C.2\"],1);",
    "FR"   : "picaxe.pin.write([\"B.3\",\"C.2\",\"C.1\"],0);\npicaxe.pin.write([\"B.2\"],1);",
    "L"    : "picaxe.pin.write([\"B.2\",\"C.2\"],0);\npicaxe.pin.write([\"B.3\",\"C.1\"],1);",
    "STOP" : "picaxe.pin.write([\"B.3\",\"C.1\",\"B.2\",\"C.2\"],1);",
    "R"    : "picaxe.pin.write([\"B.3\",\"C.1\"],0);\npicaxe.pin.write([\"B.2\",\"C.2\"],1);",
    "BR"   : "picaxe.pin.write([\"B.2\",\"C.2\",\"C.1\"],0);\npicaxe.pin.write([\"B.3\"],1);",};
  var code = commandMotor[block.getFieldValue('COMMAND_MOTORS_LOUPIOT')] + '\n';
  return generators.wrapOutput(block, code);
};

//LINE SENSSOR IF: Loupiot
generators['picaxe_line_senssor_if_loupiot'] = function(block) {
    var code = generators['picaxe_line_senssor_general'](block) ;
    return generators.wrapOutput(block, code);
};

//LINE SENSSOR IF / ELSE: Loupiot
generators['picaxe_line_senssor_if_else_loupiot'] = function(block) {
    var code = generators['picaxe_line_senssor_general'](block) ;
    return generators.wrapOutput(block, code);
};

//LINE SENSSOR IF AND ELSE GENERAL : Loupiot
generators['picaxe_line_senssor_general'] = function(block) {
    var IRSenssor = {
        "IR_R"  :   "C.4",
        "IR_C"  :   "C.5",
        "IR_L"  :   "C.6",};
    var IRSenssorState = {
        "HIGH"  :   "1",
        "LOW"   :   "0",};
    var codeIf = generators.statementToCode(block, 'DO_IF') || "Error : block(s) needed \n" ;
    var codeElse = "";
    var code ; 
    
    if (block.getInput('DO_ELSE')){
    codeElse = "}else{\n" + generators.statementToCode(block, 'DO_ELSE')|| "Error : block(s) needed \n";
    }
    
    code = "if (picaxe.pin.read(\"" 
      + IRSenssor[block.getFieldValue('IR_Senssor')] 
      + "\" == " 
      + IRSenssorState[block.getFieldValue('IR_Senssor_State')] 
      + " ){\n" 
      + codeIf + codeElse  ; 
    return code + "}\n" ; 
};

//BLUETOOTH RX: Loupiot
generators['picaxe_blth_rx_loupiot'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//BLUETOOTH TX: Loupiot
generators['picaxe_blth_tx_loupiot'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//BLINKER : Loupiot
generators['picaxe_blinker_loupiot'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//READ VOLTAGE : Loupiot
generators['picaxe_voltage_loupiot'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//READ ULTRASON : Loupiot
generators['picaxe_ultrason_loupiot'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\END ROBOT LOUPIOT //---------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------\\PORTAL_C AUTOPROG //--------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//MOTOR CONTROL: portal
generators['picaxe_motor_portal'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//SENSSOR IF : Portal
generators['picaxe_senssor_if_portal'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//SENSSOR IF / ELSE: Portal
generators['picaxe_senssor_if_else_portal'] = function(block) {
    var code = "";
    return generators.wrapOutput(block, code);
};

//SENSSOR WAITING : Portal
generators['picaxe_senssor_waiting_portal'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//LED CONTROL: portal
generators['picaxe_led_portal'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//BLUETOOTH RX: Portail
generators['picaxe_blth_rx_portail'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//BLUETOOTH TX: Portail
generators['picaxe_blth_tx_portail'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//LED CONTROL: portal
generators['picaxe_led_portal'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\  END PORTAL_C AUTOPROG  //--------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\  MINI ROBOT  //-------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



generators.getMotorListCode = function(lows, highs) {
  var code = "";
  if (lows.length > 0) code +="picaxe.pin.write([" + lows.split(",") + "],0);\n";
  if (highs.length > 0) code +="picaxe.pin.write([" + highs.split(",") + "],1);\n";
  return code.slice(0,-1);
}

generators.getMotor120Code = function (block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
        return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var lows = "", highs = "";

  if (checked("FL"))
  {
    lows = "\"B.4\",\"B.5\",\"B.7\"";
    highs = "\"B.6\"";
  } else if (checked("F"))
  {
    lows = "\"B.5\",\"B.7\"";
    highs = "\"B.4\",\"B.6\"";
  } else if (checked("FR"))
  {
    lows = "\"B.5\",\"B.6\",\"B.7\"";
    highs = "\"B.4\"";
  } else if (checked("L"))
  {
    lows = "\"B.4\",\"B.7\"";
    highs = "\"B.5\",\"B.6\"";
  } else if (checked("STOP"))
  {
    lows = "\"B.4\",\"B.5\",\"B.6\",\"B.7\"";
  } else if (checked("R"))
  {
    lows = "\"B.5\",\"B.6\"";
    highs = "\"B.4\",\"B.7\"";
  } else if (checked("BR"))
  {
    lows = "\"B.4\",\"B.6\",\"B.7\"";
    highs = "\"B.5\"";
  } else if (checked("B"))
  {
    lows = "\"B.4\",\"B.6\"";
    highs = "\"B.5\",\"B.7\"";
  } else if (checked("BL"))
  {
    lows = "\"B.4\",\"B.5\",\"B.6\"";
    highs = "\"B.7\"";
  }

  var code = generators.getMotorListCode(lows, highs);

  return code;
}

generators.getMotorKMR01Code = function (block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var lows = "", highs = "";
  var dirMotSelec = block.getFieldValue('checkboxKMR01') == 'TRUE' ;

  if (checked("FL"))
  {
    lows = (dirMotSelec ? "\"B.5\",\"B.6\",\"B.4\"" : "\"B.5\",\"B.7\",\"B.4\"");
    highs = (dirMotSelec ? "\"B.7\"" : "\"B.6\"") ;
  } else if (checked("F"))
  {
    lows = (dirMotSelec ? "\"B.4\",\"B.6\"" : "\"B.5\",\"B.7\"");
    highs = (dirMotSelec ? "\"B.5\",\"B.7\"" : "\"B.4\",\"B.6\"") ;
  } else if (checked("FR"))
  {
    lows = (dirMotSelec ? "\"B.7\",\"B.6\",\"B.4\"" : "\"B.5\",\"B.7\",\"B.6\"");
    highs = (dirMotSelec ? "\"B.5\"" : "\"B.4\"") ;
  } else if (checked("R"))
  {
    lows = (dirMotSelec ? "\"B.4\",\"B.7\"" : "\"B.5\",\"B.6\"");
    highs = (dirMotSelec ? "\"B.5\",\"B.6\"" : "\"B.4\",\"B.7\"") ;
  } else if (checked("STOP"))
  {
    lows = "\"B.4\",\"B.5\",\"B.6\",\"B.7\"";
  } else if (checked("L"))
  {
    lows = (dirMotSelec ? "\"B.5\",\"B.6\"" : "\"B.4\",\"B.7\"");
    highs = (dirMotSelec ? "\"B.4\",\"B.7\"" : "\"B.5\",\"B.6\"") ;
  } else if (checked("BL"))
  {
    lows = (dirMotSelec ? "\"B.7\",\"B.5\",\"B.4\"" : "\"B.5\",\"B.4\",\"B.6\"");
    highs = (dirMotSelec ? "\"B.6\"" : "\"B.7\"") ;
  } else if (checked("B"))
  {
    lows = (dirMotSelec ? "\"B.5\",\"B.7\"" : "\"B.4\",\"B.6\"");
    highs = (dirMotSelec ? "\"B.4\",\"B.6\"" : "\"B.5\",\"B.7\"") ;
  } else if (checked("BR"))
  {
    lows = (dirMotSelec ? "\"B.7\",\"B.5\",\"B.6\"" : "\"B.7\",\"B.4\",\"B.6\"");
    highs = (dirMotSelec ? "\"B.4\"" : "\"B.5\"") ;
  }

  var code = generators.getMotorListCode(lows, highs);

  return code;
}


generators['picaxe_motors_BOT120'] = function(block) {

  var code = block.getFieldValue('SPEED');

  if (code) {
    if (code.indexOf("input") != -1) {
      code = "picaxe.pin.input(\"C.5\", 0);\n";
    } else if (code.indexOf("output") != -1) {
      code = "picaxe.pin.output(\"C.5\", 1);\n";
    } else {
      code = "";
    }
  } else {
    code = "";  
  }
  code += generators.getMotor120Code(block);

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_CHI035'] = function(block) {

  var code = generators.getMotor120Code(block);

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_AXE120'] = function(block) {

  var code = "";

  var left = generators.valueToCode(block, 'LEFT', generators.ORDER_ATOMIC);
  var right = generators.valueToCode(block, 'RIGHT', generators.ORDER_ATOMIC);

  if (left || right) {
    code += "picaxe.port.DDR.write(\"B\",240);\n";
    code += "picaxe.port.write(\"B\",0);\n";
    code += "picaxe.pause(10);\n";
  }
  if (left) {
    code += "picaxe.port.write(\"B\",48);\n";
    code += "picaxe.pin.pulse.write(\"B.6\", " + left + ");\n";
    code += "picaxe.pause(10);\n";
  }
  if (right) {
    code += "picaxe.port.write(\"B\",192);\n";
    code += "picaxe.pin.pulse.write(\"B.4\", " + right + ");\n";
    code += "picaxe.pause(10);\n";
  }
  if (left || right) {
    code += "picaxe.port.write(\"B\",0);\n";
  }

  code += generators.getMotor120Code(block);
  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_KMR01'] = function(block) {

  var code = "";

  var left = generators.valueToCode(block, 'LEFT', generators.ORDER_ATOMIC);
  var right = generators.valueToCode(block, 'RIGHT', generators.ORDER_ATOMIC);

  if (left || right) {
    code += "picaxe.port.DDR.write(\"B\",240);\n";
    code += "picaxe.port.write(\"B\",0);\n";
    code += "picaxe.pause(10);\n";
  }
  if (left) {
    code += "picaxe.port.write(\"B\",48);\n";
    code += "picaxe.pin.pulse.write(\"B.6\", " + left + ");\n";
    code += "picaxe.pause(10);\n";
  }
  if (right) {
    code += "picaxe.port.write(\"B\",192);\n";
    code += "picaxe.pin.pulse.write(\"B.4\", " + right + ");\n";
    code += "picaxe.pause(10);\n";
  }
  if (left || right) {
    code += "picaxe.port.write(\"B\",0);\n";
  }

  code += generators.getMotorKMR01Code(block);
  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_AXE023'] = function(block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var lows = "", highs = "";
  if (checked("FL"))
  {
    lows = "\"C.0\",\"C.1\",\"C.4\"";
    highs = "\"C.2\"";
  } else if (checked("F"))
  {
    lows = "\"C.1\",\"C.4\"";
    highs = "\"C.0\",\"C.2\"";
  } else if (checked("FR"))
  {
    lows = "\"C.1\",\"C.2\",\"C.4\"";
    highs = "\"C.0\"";
  } else if (checked("L"))
  {
    lows = "\"C.0\",\"C.4\"";
    highs = "\"C.1\",\"C.2\"";
  } else if (checked("STOP"))
  {
    lows = "\"C.0\",\"C.1\",\"C.2\",\"C.4\"";
  } else if (checked("R"))
  {
    lows = "\"C.1\",\"C.2\"";
    highs = "\"C.0\",\"C.4\"";
  } else if (checked("BR"))
  {
    lows = "\"C.0\",\"C.2\",\"C.4\"";
    highs = "\"C.1\"";
  } else if (checked("B"))
  {
    lows = "\"C.0\",\"C.2\"";
    highs = "\"C.1\",\"C.4\"";
  } else if (checked("BL"))
  {
    lows = "\"C.0\",\"C.1\",\"C.2\"";
    highs = "\"C.4\"";
  }

  var code = generators.getMotorListCode(lows, highs);

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_servo'] = function(block) {

  /*
  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var code = "";
  code += "#IFNDEF servo_motors_defined\n"
  code += "#ERROR You must use a 'servo motor setup' command first!\n"
  code += "#ENDIF\n"

  if (checked("FL"))
  {
    code += "servopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_forward";
  } else if (checked("F"))
  {
    code += "servopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_forward";
  } else if (checked("FR"))
  {
    code += "servopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_stop";
  } else if (checked("L"))
  {
    code += "servopos SMA_pin, SMA_back : servopos SMB_pin, SMB_forward";
  } else if (checked("STOP"))
  {
    code += "servopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_stop";
  } else if (checked("R"))
  {
    code += "servopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_back";
  } else if (checked("BL"))
  {
    code += "\servopos SMA_pin, SMA_back : servopos SMB_pin, SMB_stop";
  } else if (checked("B"))
  {
    code += "servopos SMA_pin, SMA_back : servopos SMB_pin, SMB_back";
  } else if (checked("BR"))
  {
    code += "\servopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_back";
  }

  code += "\n";*/

  var code = "//picaxe_motors_servo;";

  return generators.wrapOutput(block, code);
};


//GENERIC MOTOR COMMAND

generators['picaxe_motors_generic'] = function(block) {

  var motorsType = block.getFieldValue('MOTORS_TYPE');
  var code = "";

  if (motorsType=="axe023") {
    code += generators['picaxe_motors_AXE023'](block);
  } else if (motorsType=="axe120"|| motorsType=="axe120s") {
    code += generators['picaxe_motors_AXE120'](block);
  } else if (motorsType=="kmr01" || motorsType=="kmr01s") {
    code += generators['picaxe_motors_KMR01'](block);
  } else  if (motorsType=="chi035") {
    code += generators['picaxe_motors_CHI035'](block); 
  } else  if (motorsType=="axe020") {
    code += generators['picaxe_motors_CHI035'](block); 
  } else  if (motorsType=="bot120" || motorsType=="bot120s") {
    code += generators['picaxe_motors_BOT120'](block); 
  } else if (motorsType=="servo") {    
    code += generators['picaxe_motors_servo'](block);    
  }      
  return code;
};  

// OUTPUT : SET SERVO [PIN] TO [CV]

generators['picaxe_motors_servo_setup'] = function(block) {
  var pinA = generators.getPinName(block);
  var pinB = generators.getPinName2(block);
  /*
  var stopA = generators.valueToCode(block, 'STOPA', generators.ORDER_ATOMIC);
  var offsetA = generators.valueToCode(block, 'OFFSETB', generators.ORDER_ATOMIC);
  var stopB = generators.valueToCode(block, 'STOPB', generators.ORDER_ATOMIC);
  var offsetB = generators.valueToCode(block, 'OFFSETB', generators.ORDER_ATOMIC);

  var code = "";
  code += "#IFNDEF servo_motors_defined\n"
  code += "#DEFINE servo_motors_defined\n"
  code += "symbol SMA_pin = " + pinA + "\n"
  code += "symbol SMA_stop = " + stopA + "\n"
  code += "symbol SMA_speed = " + offsetA + "\n"
  code += "symbol SMA_forward = SMA_stop - SMA_speed\n"
  code += "symbol SMA_back = SMA_stop + SMA_speed\n"
  code += "symbol SMB_pin = " + pinB + "\n"
  code += "symbol SMB_stop = " + stopB + "\n"
  code += "symbol SMB_speed = " + offsetB + "\n"
  code += "symbol SMB_forward = SMB_stop + SMB_speed\n"
  code += "symbol SMB_back = SMB_stop - SMB_speed\n"
  code += "servo SMA_pin, SMA_stop\n"
  code += "servo SMB_pin, SMB_stop\n"
  code += "#ENDIF\n"*/


  var code = "picaxe.pin.servo.write(" + pinA + ", 150);\n";
  code += "picaxe.pin.servo.write(" + pinB + ", 150);";

  return generators.wrapOutput(block, code);
};

});