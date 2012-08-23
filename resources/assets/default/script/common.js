// JavaScript Document


function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}


//llapsible panel


function toggleTxt(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "restore";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "collapse";
	}
}

function toggleImg(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
		imageEle.innerHTML = '<img src="/wp-includes/images/plus.png">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="/wp-includes/images/minus.png">';
        }
} 

 
