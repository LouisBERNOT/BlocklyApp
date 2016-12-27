define("customJavascript", [
  "./blockly/generators/javascript"
],function(generators){
    
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

  if (checked("FL"))
  {
    lows = "\"B.5\",\"B.6\",\"B.7\"";
    highs = "\"B.4\"";
  } else if (checked("F"))
  {
    lows = "\"B.4\",\"B.6\"";
    highs = "\"B.5\",\"B.7\"";
  } else if (checked("FR"))
  {
    lows = "\"B.4\",\"B.5\",\"B.7\"";
    highs = "\"B.6\"";
  } else if (checked("R"))
  {
    lows = "\"B.4\",\"B.7\"";
    highs = "\"B.5\",\"B.6\"";
  } else if (checked("STOP"))
  {
    lows = "\"B.4\",\"B.5\",\"B.6\",\"B.7\"";
  } else if (checked("L"))
  {
    lows = "\"B.5\",\"B.6\"";
    highs = "\"B.4\",\"B.7\"";
  } else if (checked("BL"))
  {
    lows = "\"B.4\",\"B.6\",\"B.7\"";
    highs = "\"B.5\"";
  } else if (checked("B"))
  {
    lows = "\"B.5\",\"B.7\"";
    highs = "\"B.4\",\"B.6\"";
  } else if (checked("BR"))
  {
    lows = "\"B.4\",\"B.5\",\"B.6\"";
    highs = "\"B.7\"";
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

generators['picaxe_portal_output'] = function(block) {

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