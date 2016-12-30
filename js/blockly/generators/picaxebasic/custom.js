define("customPicaxeBasic", [
"./blockly/generators/picaxebasic"
],function(generators){

//-----------------------------------------------------------------------\\LOUPIOT_ROBOT//---------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//MOTOR SPEED : Loupiot
generators['picaxe_motors_speed_loupiot'] = function(block) {
  var speed = generators.valueToCode(block, 'Loupiot_speed_value', generators.ORDER_ATOMIC) || 0;
  var motorDir = {
    'LR':'\tpwmout B.1,100,' + speed + '\n\tpwmout C.3,100,' + speed,
    'R':'\tpwmout B.1,100,' + speed,
    'L':'\tpwmout C.3,100,' + speed,};
  var code = motorDir[block.getFieldValue('mot_choice')] + '\n\tpause 10\n';
  return generators.wrapOutput(block, code);
};

//MOTOR DIR : Loupiot
generators['picaxe_motors_dir_loupiot'] = function(block) {
  var commandMotor = {
    "FL"   : "low B.3,B.2,C.2 : high C.1",
    "F"    : "low B.3,C.2 : high C.1,B.2",
    "B"    : "low C.1,B.2 : high B.3,C.2",
    "BL"   : "low B.3,B.2,C.1 : high C.2",
    "FR"   : "low B.3,C.2,C.1 : high B.2",
    "L"    : "low B.2,C.2 : high C.1,B.3",
    "STOP" : "high C.1,B.3,B.2,C.2",
    "R"    : "low C.1,B.3 : high B.2,C.2",
    "BR"   : "low B.2,C.2,C.1 : high B.3",};
  var code = '\t' + commandMotor[block.getFieldValue('COMMAND_MOTORS_LOUPIOT')] + '\n';
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
        codeElse = "\telse \n" + generators.statementToCode(block, 'DO_ELSE')|| "Error : block(s) needed \n";
    }
    
    code = "\tif pin" 
      + IRSenssor[block.getFieldValue('IR_Senssor')] 
      + " = " 
      + IRSenssorState[block.getFieldValue('IR_Senssor_State')] 
      + " then\n" 
      + codeIf + codeElse
      + "\tendif";
    return code + "\n" ; 
};

//BLUETOOTH RX: Loupiot
generators['picaxe_blth_rx_loupiot'] = function(block) {
    generators.definitions_['define_blth'] = 'hsersetup B9600_4, %00 \n';
    var varBTLH = generators.valueToCode(block, 'varBTLH', generators.ORDER_ATOMIC) || "variable needed ";
    var code = "\thserin " + varBTLH + "\n";
    return generators.wrapOutput(block, code);
};

//BLUETOOTH TX: Loupiot
generators['picaxe_blth_tx_loupiot'] = function(block) {
    generators.definitions_['define_blth'] = 'hsersetup B9600_4, %00 \n';
    var varBTLH = generators.valueToCode(block, 'varBTLH', generators.ORDER_ATOMIC) || "variable needed";
    var code = "\thserout 0,(" + varBTLH + ")\n";
    return generators.wrapOutput(block, code);
};

//BLINKER : Loupiot
generators['picaxe_blinker_loupiot'] = function(block) {
    var BlinkerState = {
        "HIGH"  :   "high",
        "LOW"   :   "low",};
    var BlinkerSide = {
        "R"  :   " B.0",
        "L"   :   " C.7",
        "RL"   :   " B.0,C.7",};
    var code = "\t" + BlinkerState[block.getFieldValue('STATE_LED_LOUPIOT')] + BlinkerSide[block.getFieldValue('LED_LOUPIOT')] + "\n";
    return generators.wrapOutput(block, code);
};

//READ VOLTAGE : Loupiot
generators['picaxe_voltage_loupiot'] = function(block) {
    var volts = generators.valueToCode(block, 'loupiot_voltage', generators.ORDER_ATOMIC);
    var code = "readadc B.5, " + volts + "\n" ;
    code += "\tlet " + volts + " = " + volts + " * 255 / 174 \n";
    return generators.wrapOutput(block, code);
};

//READ ULTRASON : Loupiot
generators['picaxe_ultrason_loupiot'] = function(block) {
    var ultra = generators.valueToCode(block, 'loupiot_ultrason', generators.ORDER_ATOMIC);
    var code = "\tultra B.7, " + ultra + "\n";
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
    var DIR = {
      "Open"     : "high B.7 : low B.6",
      "Closed"   : "low B.7 : high B.6",
      "Stop"     : "low B.7,B.6"};
    var code = "\t" + DIR[block.getFieldValue('DIR_Portal')] + "\n";
    return generators.wrapOutput(block, code);
};

//SENSSOR IF : Portal
generators['picaxe_senssor_if_portal'] = function(block) {
    var code = generators['picaxe_senssor_general'](block) ;
    return generators.wrapOutput(block, code);
};

//SENSSOR IF / ELSE: Portal
generators['picaxe_fdc_if_else_portal'] = function(block) {
    var code = generators['picaxe_senssor_general'](block) ;
    return generators.wrapOutput(block, code);
};

//SENSSOR IF AND ELSE GENERAL : portal
generators['picaxe_senssor_general'] = function(block) {
    var Senssor = {
        "Open"    :   "C.1",
        "Closed"  :   "C.2",
        "IR"      :   "C.5"};
    var SenssorState = {
        "HIGH"  :   "1",
        "LOW"   :   "0",};
    var codeIf = generators.statementToCode(block, 'DO_IF') || "Error : block(s) needed \n" ;
    var codeElse = "";
    var code ; 
    
    if (block.getInput('DO_ELSE')){
        codeElse = "\telse \n" + generators.statementToCode(block, 'DO_ELSE')|| "Error : block(s) needed \n";
    }
    
    code = "\tif pin" 
      + Senssor[block.getFieldValue('Senssor')] 
      + " = " 
      + SenssorState[block.getFieldValue('Senssor_State')] 
      + " then\n" 
      + codeIf + codeElse
      + "\tendif";
    return code + "\n" ; 
};

//SENSSOR WAITING : Portal
generators['picaxe_senssor_waiting_portal'] = function(block) {
    var Senssor = {
        "Open"    :   "C.1",
        "Closed"  :   "C.2",
        "IR"      :   "C.5"};
    var SenssorState = {
        "HIGH"  :   "1",
        "LOW"   :   "0",};
    var code = "\tdo \n\tpause 10 \n\tloop until pin"
          + Senssor[block.getFieldValue('Senssor')]  +" = "
          + SenssorState[block.getFieldValue('Senssor_State')] +"\n";
    return generators.wrapOutput(block, code);
};

//LED CONTROL: portal
generators['picaxe_led_portal'] = function(block) {
    var code = "" ;
    return generators.wrapOutput(block, code);
};

//BLUETOOTH RX: Portail
generators['picaxe_blth_rx_portail'] = function(block) {
    generators.definitions_['define_blth'] = 'hsersetup B9600_8, %001\n';
    var varBLTH = generators.valueToCode(block, 'varBTLH', generators.ORDER_ATOMIC) || "Error : block(s) needed \n";
    var code = "\tif hserflag = 1 then\n\t\tdo\n\t\t\tlet " 
          + varBLTH + " = @ptrinc\n\t\tloop while ptr <> hserptr\n\t\tlet hserflag = 0\n\telse\n\t\tlet " 
          + varBLTH + " = 0\n\tend if\n";
    return generators.wrapOutput(block, code);
};

//BLUETOOTH TX: Portail
generators['picaxe_blth_tx_portail'] = function(block) {
    generators.definitions_['define_blth'] = 'hsersetup B9600_8, %001 \n';
    var varBLTH = generators.valueToCode(block, 'varBTLH', generators.ORDER_ATOMIC) || 0 ;
    var code = "\thserout 0,(" + varBLTH + ")\n" ;
    return generators.wrapOutput(block, code);
};

//LED CONTROL: portal
generators['picaxe_led_portal'] = function(block) {
    var ledState = {
        "HIGH"  :   "high",
        "LOW"   :   "low",};
    var code = "\t" + ledState[block.getFieldValue('LED_State')] + " B.0 \n";
    return generators.wrapOutput(block, code);
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\END PORTAL_C AUTOPROG  //----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------\\  MINI ROBOT  //-------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

  if (block.getFieldValue('checkboxKMR01') == 'TRUE'){
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
    code += "\tlow B.5,B.4 \n\t" + dirMotSelec[0] + " B.6 : " + dirMotSelec[1] + " B.7 ";
  } else if (checked("F"))
  {
    code += "\t" + dirMotSelec[0] + " B.4,B.6 : " + dirMotSelec[1] + " B.5,B.7";
  } else if (checked("FR"))
  {
    code += "\tlow B.6,B.7 \n\t" + dirMotSelec[0] + " B.4 : " + dirMotSelec[1] + " B.5 ";
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
    code += "\tlow B.5,B.4 \n\t" + dirMotSelec[0] + " B.7 : " + dirMotSelec[1] + " B.6 ";
  } else if (checked("B"))
  {
    code += "\t" + dirMotSelec[0] + " B.5,B.7 : " + dirMotSelec[1] + " B.4,B.6";
  } else if (checked("BR"))
  {
    code += "\tlow B.7,B.6 \n\t" + dirMotSelec[0] + " B.5 : " + dirMotSelec[1] + " B.4 ";
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
