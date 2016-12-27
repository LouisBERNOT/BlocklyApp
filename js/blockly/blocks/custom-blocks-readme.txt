The custom.js Blockly files are used for PICAXE staff to develop new blocks.

To use:

1) Uncomment these lines in index.html

  <!--
  <script src="js/blockly/generators/picaxebasic/custom.js"></script>
  <script src="js/blockly/generators/javascript/custom.js"></script>
  <script src="js/blockly/blocks/custom.js"></script>
  -->

2) Edit the 3 files as required to define the new block

3) Add the new block in /xml/toolbox.xml via uncommenting and editing these lines

  <!--
  <category id="cat12" name="Custom" colour="#b18e35">
    <block type="picaxe_custom_outputon" />
  </category>
  -->