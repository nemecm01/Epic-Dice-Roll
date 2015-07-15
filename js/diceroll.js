
minimumvalue = 1; // The minimum value that can be rolled by a die is set here

function rand(num) {
	return Math.ceil(Math.random*num);
};

function docreset() {
	document.form1.reset();
	document.form1.runningtotal.value = "          NOTES\n-------------------------\nThis field records your latest roll at its top.\n\nModified results that would produce a number less than one display as one."
}
function imgCreate(src, alt, title) {
    var img= IEWIN? new Image() : document.createElement('img');
    img.src= src;
    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}

function rolld4() {
       
   d4rolls = parseInt(document.form1.d4n.value);  
   d4mod = parseInt(document.form1.d4mo.value);  
   dtotal = "";
   d4res = 0;
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d4m[i].checked) {
		d4pm = i }
	}

	if (d4pm == 0) {
        dtotal = dtotal + "Roll(" + d4rolls.toString() + "d4" + ")+" +  d4mod.toString() + ":\n" 
	}	

	if (d4pm == 1) {
        dtotal = dtotal +  "Roll(" + d4rolls.toString() + "d4" + ")-" +  d4mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d4rolls; r++) {
       var d4 = Math.floor((Math.random() * 4) + 1);	
       d4res = d4res + d4;	
	   dtotal = dtotal + d4.toString() + ","	
  	}

	if (d4pm == 0) {
       d4res = d4res + d4mod;	
	   dtotal = dtotal + "+" + d4mod + "\n" + "Total:" + d4res	
	}	
 
	if (d4pm == 1) {
       d4res = d4res - d4mod;
	   if (d4res <= minimumvalue) {
	      d4res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d4mod + "\n" + "Total:" + d4res	
	}	  
   document.form1.d4r.value = d4res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	

}

function rolld6() {
   d6rolls = parseInt(document.form1.d6n.value);  
   d6mod = parseInt(document.form1.d6mo.value);  
   dtotal = ""
   d6res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d6m[i].checked) {
		d6pm = i }
	}

	if (d6pm == 0) {
        dtotal = dtotal + "Roll(" + d6rolls.toString() + "d6" + ")+" +  d6mod.toString() + ":\n" 
	}	

	if (d6pm == 1) {
        dtotal = dtotal +  "Roll(" + d6rolls.toString() + "d6" + ")-" +  d6mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d6rolls; r++) {
       var d6 = Math.floor((Math.random() * 6) + 1);	
       d6res = d6res + d6;	
	   dtotal = dtotal + d6.toString() + ","	
  	}

	if (d6pm == 0) {
       d6res = d6res + d6mod;	
	   dtotal = dtotal + "+" + d6mod + "\n" + "Total:" + d6res	
	}	
 
	if (d6pm == 1) {
       d6res = d6res - d6mod;
	   if (d6res <= minimumvalue) {
	      d6res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d6mod + "\n" + "Total:" + d6res	
	}	

   document.form1.d6r.value = d6res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolld8() {
   d8rolls = parseInt(document.form1.d8n.value);  
   d8mod = parseInt(document.form1.d8mo.value);  
   dtotal = ""
   d8res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d8m[i].checked) {
		d8pm = i }
	}

	if (d8pm == 0) {
        dtotal = dtotal + "Roll(" + d8rolls.toString() + "d8" + ")+" +  d8mod.toString() + ":\n" 
	}	

	if (d8pm == 1) {
        dtotal = dtotal +  "Roll(" + d8rolls.toString() + "d8" + ")-" +  d8mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d8rolls; r++) {
       var d8 = Math.floor((Math.random() * 8) + 1);	
       d8res = d8res + d8;	
	   dtotal = dtotal + d8.toString() + ","	
  	}

	if (d8pm == 0) {
       d8res = d8res + d8mod;	
	   dtotal = dtotal + "+" + d8mod + "\n" + "Total:" + d8res	
	}	
 
	if (d8pm == 1) {
       d8res = d8res - d8mod;
	   if (d8res <= minimumvalue) {
	      d8res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d8mod + "\n" + "Total:" + d8res	
	}	

   document.form1.d8r.value = d8res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolld10() {
   d10rolls = parseInt(document.form1.d10n.value);  
   d10mod = parseInt(document.form1.d10mo.value);  
   dtotal = ""
   d10res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d10m[i].checked) {
		d10pm = i }
	}

	if (d10pm == 0) {
        dtotal = dtotal + "Roll(" + d10rolls.toString() + "d10" + ")+" +  d10mod.toString() + ":\n" 
	}	

	if (d10pm == 1) {
        dtotal = dtotal +  "Roll(" + d10rolls.toString() + "d10" + ")-" +  d10mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d10rolls; r++) {
       var d10 = Math.floor((Math.random() * 10) + 1);	
       d10res = d10res + d10;	
	   dtotal = dtotal + d10.toString() + ","	
  	}

	if (d10pm == 0) {
       d10res = d10res + d10mod;	
	   dtotal = dtotal + "+" + d10mod + "\n" + "Total:" + d10res	
	}	
 
	if (d10pm == 1) {
       d10res = d10res - d10mod;
	   if (d10res <= minimumvalue) {
	      d10res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d10mod + "\n" + "Total:" + d10res	
	}	

   document.form1.d10r.value = d10res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolld12() {
   d12rolls = parseInt(document.form1.d12n.value);  
   d12mod = parseInt(document.form1.d12mo.value);  
   dtotal = ""
   d12res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d12m[i].checked) {
		d12pm = i }
	}

	if (d12pm == 0) {
        dtotal = dtotal + "Roll(" + d12rolls.toString() + "d12" + ")+" +  d12mod.toString() + ":\n" 
	}	

	if (d12pm == 1) {
        dtotal = dtotal +  "Roll(" + d12rolls.toString() + "d12" + ")-" +  d12mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d12rolls; r++) {
       var d12 = Math.floor((Math.random() * 12) + 1);	
       d12res = d12res + d12;	
	   dtotal = dtotal + d12.toString() + ","	
  	}

	if (d12pm == 0) {
       d12res = d12res + d12mod;	
	   dtotal = dtotal + "+" + d12mod + "\n" + "Total:" + d12res	
	}	
 
	if (d12pm == 1) {
       d12res = d12res - d12mod;
	   if (d12res <= minimumvalue) {
	      d12res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d12mod + "\n" + "Total:" + d12res	
	}	

   document.form1.d12r.value = d12res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolld20() {
   d20rolls = parseInt(document.form1.d20n.value);  
   d20mod = parseInt(document.form1.d20mo.value);  
   dtotal = ""
   d20res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d20m[i].checked) {
		d20pm = i }
	}

	if (d20pm == 0) {
        dtotal = dtotal + "Roll(" + d20rolls.toString() + "d20" + ")+" +  d20mod.toString() + ":\n" 
	}	

	if (d20pm == 1) {
        dtotal = dtotal +  "Roll(" + d20rolls.toString() + "d20" + ")-" +  d20mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d20rolls; r++) {
       var d20 = Math.floor((Math.random() * 20) + 1);	
       d20res = d20res + d20;	
	   dtotal = dtotal + d20.toString() + ","	
  	}

	if (d20pm == 0) {
       d20res = d20res + d20mod;	
	   dtotal = dtotal + "+" + d20mod + "\n" + "Total:" + d20res	
	}	
 
	if (d20pm == 1) {
       d20res = d20res - d20mod;
	   if (d20res <= minimumvalue) {
	      d20res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d20mod + "\n" + "Total:" + d20res	
	}	

   document.form1.d20r.value = d20res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolld100() {
   d100rolls = parseInt(document.form1.d100n.value);  
   d100mod = parseInt(document.form1.d100mo.value);  
   dtotal = ""
   d100res = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.d100m[i].checked) {
		d100pm = i }
	}

	if (d100pm == 0) {
        dtotal = dtotal + "Roll(" + d100rolls.toString() + "d100" + ")+" +  d100mod.toString() + ":\n" 
	}	

	if (d100pm == 1) {
        dtotal = dtotal +  "Roll(" + d100rolls.toString() + "d100" + ")-" +  d100mod.toString() + ":\n" 
	}	
	
	for (r=0; r<d100rolls; r++) {
       var d100 = Math.floor((Math.random() * 100) + 1);	
       d100res = d100res + d100;	
	   dtotal = dtotal + d100.toString() + ","	
  	}

	if (d100pm == 0) {
       d100res = d100res + d100mod;	
	   dtotal = dtotal + "+" + d100mod + "\n" + "Total:" + d100res	
	}	
 
	if (d100pm == 1) {
       d100res = d100res - d100mod;
	   if (d100res <= minimumvalue) {
	      d100res = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + d100mod + "\n" + "Total:" + d100res	
	}	

   document.form1.d100r.value = d100res;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function rolldX() {
   dXrolls = parseInt(document.form1.dXn.value);  
   dXmod = parseInt(document.form1.dXmo.value);  
   dXsides = parseInt(document.form1.dXs.value);     
   dtotal = ""
   dXres = 0
   rtotal = document.form1.runningtotal.value; 
  
	for (i=0; i<2; i++) {
		if (document.form1.dXm[i].checked) {
		dXpm = i }
	}

	if (dXpm == 0) {
        dtotal = dtotal + "Roll(" + dXrolls.toString() + "d" + dXsides + ")+" +  dXmod.toString() + ":\n" 
	}	

	if (dXpm == 1) {
        dtotal = dtotal +  "Roll(" + dXrolls.toString() + "d" + dXsides + ")-" +  dXmod.toString() + ":\n" 
	}	
	
	for (r=0; r<dXrolls; r++) {
       var dX = Math.floor((Math.random() * dXsides) + 1);	
       dXres = dXres + dX;	
	   dtotal = dtotal + dX.toString() + ","	
  	}

	if (dXpm == 0) {
       dXres = dXres + dXmod;	
	   dtotal = dtotal + "+" + dXmod + "\n" + "Total:" + dXres	
	}	
 
	if (dXpm == 1) {
       dXres = dXres - dXmod;
	   if (dXres <= minimumvalue) {
	      dXres = minimumvalue;
		  }	
	   dtotal = dtotal + "-" + dXmod + "\n" + "Total:" + dXres	
	}	

   document.form1.dXr.value = dXres;	
   rtotal = dtotal + "\n\n" + rtotal;  
   document.form1.runningtotal.value = rtotal;	
}

function MM_swapImgRestore() { //v2.0
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_preloadImages() { //v2.0
  if (document.images) {
    var imgFiles = MM_preloadImages.arguments;
    if (document.preloadArray==null) document.preloadArray = new Array();
    var i = document.preloadArray.length;
    with (document) for (var j=0; j<imgFiles.length; j++) if (imgFiles[j].charAt(0)!="#"){
      preloadArray[i] = new Image;
      preloadArray[i++].src = imgFiles[j];
  } }
}

function MM_swapImage() { //v2.0
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}

