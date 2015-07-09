// ==UserScript==
// @name         MasterOakley's Stream button
// @namespace    N/A
// @version      0.1
// @description Just for wtfosaurous i think thats his name
// @author       MasterOakley
// @match        http*://agar.io/
// @grant        none
// ==/UserScript==


 jQuery('#settings').prepend('<button type="button" id="opnBrowser" onclick="connect(\'ws://192.169.198.191:666\',\'\');" style="position:relative;top:-8px;width:100%" class="btn btn-success"> WTFOSAURUS Server</button><br>');jQuery('#settings').show(); 


