define("customPicaxeBasic", [
"./blockly/generators/picaxebasic"
],function(generators){

generators['picaxe_motors_BOT120'] = function(block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var code = block.getFieldValue('SPEED');
  if (!code) { 
    code = "";
  } else {
    code += "\n";      
  }

  if (checked("FL"))
  {
    code += "\tlow B.4,B.5,B.7 : high B.6";
  } else if (checked("F"))
  {
    code += "\tlow B.5,B.7 : high B.4,B.6";
  } else if (checked("FR"))
  {
    code += "\tlow B.5,B.6,B.7 : high B.4";
  } else if (checked("L"))
  {
    code += "\tlow B.4,B.7 : high B.5,B.6";
  } else if (checked("STOP"))
  {
    code += "\tlow B.4,B.5,B.6,B.7";
  } else if (checked("R"))
  {
    code += "\tlow B.5,B.6 : high B.4,B.7";
  } else if (checked("BR"))
  {
    code += "\tlow B.4,B.6,B.7 : high B.5";
  } else if (checked("B"))
  {
    code += "\tlow B.4,B.6 : high B.5,B.7";
  } else if (checked("BL"))
  {
    code += "\tlow B.4,B.5,B.6 : high B.7";
  }

  code += "\n";

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_CHI035'] = function(block) {

  var code = "";

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  if (checked("FL"))
  {
    code += "\tlow B.4,B.5,B.7 : high B.6";
  } else if (checked("F"))
  {
    code += "\tlow B.5,B.7 : high B.4,B.6";
  } else if (checked("FR"))
  {
    code += "\tlow B.5,B.6,B.7 : high B.4";
  } else if (checked("L"))
  {
    code += "\tlow B.4,B.7 : high B.5,B.6";
  } else if (checked("STOP"))
  {
    code += "\tlow B.4,B.5,B.6,B.7";
  } else if (checked("R"))
  {
    code += "\tlow B.5,B.6 : high B.4,B.7";
  } else if (checked("BR"))
  {
    code += "\tlow B.4,B.6,B.7 : high B.5";
  } else if (checked("B"))
  {
    code += "\tlow B.4,B.6 : high B.5,B.7";
  } else if (checked("BL"))
  {
    code += "\tlow B.4,B.5,B.6 : high B.7";
  }

  code += "\n";

  return generators.wrapOutput(block, code);
};


generators['picaxe_motors_AXE120'] = function(block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
      return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
      return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var code = "";
  var left = generators.valueToCode(block, 'LEFT', generators.ORDER_ATOMIC);
  var right = generators.valueToCode(block, 'RIGHT', generators.ORDER_ATOMIC);

  if (left || right) {
    code += "\tlet dirsB = %11110000\n";
    code += "\tlet pinsB = %00000000\n";
    code += "\tpause 10\n";
  }
  if (left) {
    code += "\tlet pinsB = %00110000; left speed\n";
    code += "\tpulsout B.6, " + left + "\n";
    code += "\tpause 10\n";
  }
  if (right) {
    code += "\tlet pinsB = %11000000; right speed\n";
    code += "\tpulsout B.4, " + right + "\n";
    code += "\tpause 10\n";
  }
  if (left || right) {
    code += "\tlet pinsB = %00000000\n";
  }

  if (checked("FL"))
  {
    code += "\tlow B.4,B.5,B.7 : high B.6";
  } else if (checked("F"))
  {
    code += "\tlow B.5,B.7 : high B.4,B.6";
  } else if (checked("FR"))
  {
    code += "\tlow B.5,B.6,B.7 : high B.4";
  } else if (checked("L"))
  {
    code += "\tlow B.4,B.7 : high B.5,B.6";
  } else if (checked("STOP"))
  {
    code += "\tlow B.4,B.5,B.6,B.7";
  } else if (checked("R"))
  {
    code += "\tlow B.5,B.6 : high B.4,B.7";
  } else if (checked("BR"))
  {
    code += "\tlow B.4,B.6,B.7 : high B.5";
  } else if (checked("B"))
  {
    code += "\tlow B.4,B.6 : high B.5,B.7";
  } else if (checked("BL"))
  {
    code += "\tlow B.4,B.5,B.6 : high B.7";
  }

  code += "\n";

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_KMR01'] = function(block) {

  function checked(name) {
    if (!block.getFieldValue(name)) {
    return block.getFieldValue('COMMAND_MOTORS') == name;
    } else {
    return block.getFieldValue(name) == 'TRUE';      
    }
  }

  var code = "";
  var left = generators.valueToCode(block, 'LEFT', generators.ORDER_ATOMIC);
  var right = generators.valueToCode(block, 'RIGHT', generators.ORDER_ATOMIC);
	var checkboxKMR01 = block.getFieldValue('checkboxKMR01') == 'TRUE';
	
	if (checkboxKMR01){
			var dirMotSelec = ["high" , "low"];
	}else{
			var dirMotSelec = ["low" , "high"];
	}
	
  if (left || right) {
    code += "\tlet dirsB = %11110000\n";
    code += "\tlet pinsB = %00000000\n";
    code += "\tpause 10\n";
  }
  if (left) {
    code += "\tlet pinsB = %00110000; left speed\n";
    code += "\tpulsout B.6, " + left + "\n";
    code += "\tpause 10\n";
  }
  if (right) {
    code += "\tlet pinsB = %11000000; right speed\n";
    code += "\tpulsout B.4, " + right + "\n";
    code += "\tpause 10\n";
  }
  if (left || right) {
    code += "\tlet pinsB = %00000000\n";
   }

  if (checked("FL"))
  {
    code += "\t" + dirMotSelec[0] + " B.5,B.6,B.7 : " + dirMotSelec[1] + " B.4";
  } else if (checked("F"))
  {
    code += "\tlow B.4,B.6 : high B.5,B.7";
  } else if (checked("FR"))
  {
    code += "\tB.6,B.7 \t" + dirMotSelec[0] + " B.4 : " + dirMotSelec[1] + " B.5 'FR";
  } else if (checked("L"))
  {
    code += "\t" + dirMotSelec[0] + " B.5,B.6 : " + dirMotSelec[1] + " B.4,B.7";
  } else if (checked("STOP"))
  {
    code += "\tlow B.4,B.5,B.6,B.7";
  } else if (checked("R"))
  {
    code += "\t" + dirMotSelec[0] + " B.4,B.7 : " + dirMotSelec[1] + " B.5,B.6";
  } else if (checked("BL"))
  {
    code += "\t" + dirMotSelec[0] + " B.4,B.6,B.7 : " + dirMotSelec[1] + " B.5";
  } else if (checked("B"))
  {
    code += "\tlow B.5,B.7 : high B.4,B.6";
  } else if (checked("BR"))
  {
    code += "\t" + dirMotSelec[0] + " B.4,B.5,B.6 : " + dirMotSelec[1] + " B.7";
  }

  code += "\n";

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

  var code = "";
  if (checked("FL"))
  {
    code += "\tlow C.0,C.1,C.4 : high C.2";
  } else if (checked("F"))
  {
    code += "\tlow C.1,C.4 : high C.0,C.2";
  } else if (checked("FR"))
  {
    code += "\tlow C.1,C.2,C.4 : high C.0";
  } else if (checked("L"))
  {
    code += "\tlow C.0,C.4 : high C.1,C.2";
  } else if (checked("STOP"))
  {
    code += "\tlow C.0,C.1,C.2,C.4";
  } else if (checked("R"))
  {
    code += "\tlow C.1,C.2 : high C.0,C.4";
  } else if (checked("BR"))
  {
    code += "\tlow C.0,C.2,C.4 : high C.1";
  } else if (checked("B"))
  {
    code += "\tlow C.0,C.2 : high C.1,C.4";
  } else if (checked("BL"))
  {
    code +=  "\tlow C.0,C.1,C.2 : high C.4";
  }

  code += "\n";

  return generators.wrapOutput(block, code);
};

generators['picaxe_motors_servo'] = function(block) {

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
    code += "\tservopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_forward";
  } else if (checked("F"))
  {
    code += "\tservopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_forward";
  } else if (checked("FR"))
  {
    code += "\tservopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_stop";
  } else if (checked("L"))
  {
    code += "\tservopos SMA_pin, SMA_back : servopos SMB_pin, SMB_forward";
  } else if (checked("STOP"))
  {
    code += "\tservopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_stop";
  } else if (checked("R"))
  {
    code += "\tservopos SMA_pin, SMA_forward : servopos SMB_pin, SMB_back";
  } else if (checked("BL"))
  {
    code += "\servopos SMA_pin, SMA_back : servopos SMB_pin, SMB_stop";
  } else if (checked("B"))
  {
    code += "\tservopos SMA_pin, SMA_back : servopos SMB_pin, SMB_back";
  } else if (checked("BR"))
  {
    code += "\servopos SMA_pin, SMA_stop : servopos SMB_pin, SMB_back";
  }

  code += "\n";

  return generators.wrapOutput(block, code);
};


// MOTORS : GENERIC

generators['picaxe_motors_generic'] = function(block) {

  var motorsType = block.getFieldValue('MOTORS_TYPE');
  var code = "";
  
  if (motorsType=="axe020")  {
    code += generators['picaxe_motors_CHI035'](block);
  } else if (motorsType=="axe023") {
    code += generators['picaxe_motors_AXE023'](block);
  } else if (motorsType=="axe120" || motorsType=="axe120s") {
    code += generators['picaxe_motors_AXE120'](block);
  } else if (motorsType=="kmr01" || motorsType=="kmr01s") {
    code += generators['picaxe_motors_KMR01'](block);
  } else if (motorsType=="chi035") {
    code += generators['picaxe_motors_CHI035'](block);
  } else if (motorsType=="bot120"|| motorsType=="bot120s") {
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
  var stopA = generators.valueToCode(block, 'STOPA', generators.ORDER_ATOMIC);
  var offsetA = generators.valueToCode(block, 'OFFSETA', generators.ORDER_ATOMIC);
  var stopB = generators.valueToCode(block, 'STOPB', generators.ORDER_ATOMIC);
  var offsetB = generators.valueToCode(block, 'OFFSETB', generators.ORDER_ATOMIC);

  var code = "";
  code += "#IFNDEF servo_motors_defined\n"
  code += "#DEFINE servo_motors_defined\n"
  code += "\tsymbol SMA_pin = " + pinA + "\n"
  code += "\tsymbol SMA_stop = " + stopA + "\n"
  code += "\tsymbol SMA_speed = " + offsetA + "\n"
  code += "\tsymbol SMA_forward = SMA_stop - SMA_speed\n"
  code += "\tsymbol SMA_back = SMA_stop + SMA_speed\n"
  code += "\tsymbol SMB_pin = " + pinB + "\n"
  code += "\tsymbol SMB_stop = " + stopB + "\n"
  code += "\tsymbol SMB_speed = " + offsetB + "\n"
  code += "\tsymbol SMB_forward = SMB_stop + SMB_speed\n"
  code += "\tsymbol SMB_back = SMB_stop - SMB_speed\n"
  code += "\tservo SMA_pin, SMA_stop\n"
  code += "\tservo SMB_pin, SMB_stop\n"
  code += "#ENDIF\n"

  return generators.wrapOutput(block, code);
};

});
