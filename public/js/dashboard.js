$(window).load(function(){
        $('.modal').modal('show');
});

$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();
});


/***********************************************
* Conveyor belt slideshow script- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Please keep this notice intact
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/
var animate = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000/60)
};

var canvas = document.createElement('canvas');
//Specify the slider's width (in pixels)
var sliderwidth="1056"
//Specify the slider's height
var sliderheight="200px"
window.onload = function(){
	document.getElementById('images').appendChild(canvas);
		animate(step);
};
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=2
//configure background color:
slidebgcolor="#EAEAEA"

//Specify the slider's images
var leftrightslide=new Array()
var finalslide=''
leftrightslide[0]='<img src="app/templates/src/client/public/img/12.jpg" border=1 height="200" width="250">'
leftrightslide[1]='<img src="app/templates/src/client/public/img/13.jpg" border=1 height="200" width="250">'
leftrightslide[2]='<img src="app/templates/src/client/public/img/3.jpg" border=1 height="200" width="250">'
leftrightslide[3]='<img src="app/templates/src/client/public/img/4.jpg" border=1 height="200" width="250">'
leftrightslide[4]='<img src="app/templates/src/client/public/img/6.jpg" border=1 height="200" width="250">'
leftrightslide[5]='<img src="app/templates/src/client/public/img/1.jpg" border=1 height="200" width="250">'
leftrightslide[6]='<img src="app/templates/src/client/public/img/8.jpg" border=1 height="200" width="250">'
leftrightslide[7]='<img src="app/templates/src/client/public/img/14.jpg" border=1 height="200" width="250">'
leftrightslide[8]='<img src="app/templates/src/client/public/img/11.jpg" border=1 height="200" width="250">'
leftrightslide[9]='<img src="app/templates/src/client/public/img/2.jpg" border=1 height="200" width="250">'
leftrightslide[10]='<img src="app/templates/src/client/public/img/10.jpg" border=1 height="200" width="250">'
leftrightslide[11]='<img src="app/templates/src/client/public/img/7.jpg" border=1 height="200" width="250">'
leftrightslide[12]='<img src="app/templates/src/client/public/img/15.png" border=1 height="200" width="250">'
leftrightslide[13]='<img src="app/templates/src/client/public/img/5.jpg" border=1 height="200" width="250">'
leftrightslide[14]='<img src="app/templates/src/client/public/img/9.jpg" border=1 height="200" width="250">'

//Specify gap between each image (use HTML):
var imagegap=" "

//Specify pixels gap between each slideshow rotation (use integer):
var slideshowgap=5


////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide

function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+slideshowgap+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+slideshowgap
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup

function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px"

if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px"

}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed
else
ns_slide.left=ns_slide2.left+actualwidth+slideshowgap

if (ns_slide2.left>(actualwidth*(-1)+8))
ns_slide2.left-=copyspeed
else
ns_slide2.left=ns_slide.left+actualwidth+slideshowgap
}
}


if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0"><td>')
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>')
}
}