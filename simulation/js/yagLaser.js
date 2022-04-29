var drawingCanvas = document.getElementById('diagram');
var drawingCanvas1 = document.getElementById('diagram1');
var drawingCanvas2 = document.getElementById('diagram2');
var drawingCanvas3 = document.getElementById('diagram3');

var context = drawingCanvas.getContext('2d');	
var context1 = drawingCanvas1.getContext('2d');
var context2 = drawingCanvas2.getContext('2d');
var context3 = drawingCanvas3.getContext('2d');

var X_increament = 250;
var Y_increament = 48;
var x_spots = 20;
var x_spots1 = 20;
var x_value = 20;
var y_value = 15;;
var beamRay = 155;
var t;
var startFlag = 0;
var plotFlag = 0;
var mode;
var maxDepth;
var maxWidth;
var interactionTime;
var maxDepth1;
var maxWidth1;
var spotSize;
var counter = 0;
var counter1 = 0;
var powervsdepthArr = new Array();
var powervswidthArr = new Array();
var spotsizevsdepthArr = new Array();
var spotsizevswidthArr = new Array();
var powerArr = new Array();
var widthArr = new Array();
var depthArr = new Array();
var spotArr = new Array();
var widthArr1 = new Array();
var depthArr1 = new Array();
var formula = "";
$(document).ready(function() {
	$('button[title]').qtip({
		content: {
			attr: 'title' // Use the ALT attribute of the area map for the content
		},
		style: {
			classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
		}
	});
		$("#state").chosen();
			$("#power").chosen();
			$("#spotsize").chosen();
			$("#power1").chosen();
				$("#diagramcontainer").append("<div style='left: 325px;position: absolute;top: 73px;width: 45px;'><img src='images/led.jpg'></div>");
				$("#diagramcontainer").append("<div style='  left: 161px;position: absolute;top: 264px;width: 45px;'><img src='images/lens.png'></div>");
				$('#state').attr('disabled',true);
				$('#axis').attr('disabled',true);
				//$('#Plot').attr('disabled',true);
				$('#power').attr('disabled',true);
				$('#spotsize').attr('disabled',true);
				$("#powerVsWidth").hide();
				$("#powerVsDepth").hide();
				$("#spotVsDepth").hide();
				$("#spotVsWidth").hide();
				$("#Plot").hide();
				$("#Plot1").hide();
				$("#MicroStructures").attr('disabled',true);
				formula ="y=a(x*x)+bx+c";
				drawDiagram();
				h();
				
				$("#outputnew").hide();
				$("#power12").hide();
				
						
		});
		
		var image = function  () {
	//alert(1);
  
  swfobject.embedSWF("css/images/exp3.swf", "myContent", "527", "339", "9.0.0");
}
var startAnimation = function() {

if(startFlag == 0){
drawLineInXdirection(context, 250, 48, X_increament, 48);
startFlag=1;

$("#startbtn").val("Stop");
}
else{
startFlag=0;
counter = 0;
counter1 = 0;
window.location.reload();
$("#state").val("");
$("#axis").val("");
$("#power").val("");
$("#spotsize").val("");
	}

}
var h4 = function(){
	
	a = a+2;
e = e+2;
l = l-2;
d = d-2;
c = c+2;
f =f+2;
g = g-2;

	
	context3.clearRect(a-5,b,c-5,d-5);
context3.clearRect(a,d,e,l);
	
	context3.clearRect(a,g,c,g);
	context3.clearRect(a-2,b,4,5);
	context3.clearRect(e,l,f,l);
	
	context3.clearRect(0,0,b,b);
	
	context3.clearRect(c,b-5,5,g);
	t = setTimeout("h4()", 2000);
	h();
	
	
/*	b = b - 2;
	m = m - 2;
	d = d-2;
	g = g-2;
	l = l-2;
	
	context3.clearRect(a,b,c,5);
	
	context3.clearRect(a,g,c,g);
	context3.clearRect(a-2,b,4,5);
	context3.clearRect(e,l,f,l);
	
	context3.clearRect(0,0,b,b);
	
	context3.clearRect(c,b-5,5,g);
	t = setTimeout("h4()", 2000);
	h();*/
	
}
var selectedMode = function (){

var opt=$("#state").val();
$('#axis').attr('disabled',false);
switch(opt){
		case "Continuous" :
		$('#axis').attr('disabled',false);
		$("#power").attr('disabled',true);
		$("#spotsize").attr('disabled',true);
		drawLineXContinuousMode();
				
				h1();
				alert("Select Pulsed mode to perform all the operations..!!!!");
		//drawLineXContinuousMode();
		
		mode = "Continuous";
		break;
		
		case "Pulsed" :
		drawSpotsInXdirection1();
				$("#power").attr('disabled',false);
				$("#spotsize").attr('disabled',false);
				h1();
		//drawSpotsInXdirection1();
		mode = "Pulsed";
		break;
	}
}

var selectedAxis = function(){
	
	var opt=$("#axis").val();
	$('#power').attr('disabled',false);

	$('#spotsize').attr('disabled',false);
	
	switch(opt){
		case "x-axis" :
			if(mode == "Continuous")
			{
				drawLineXContinuousMode();
				$("#power").attr('disabled',true);
				$("#spotsize").attr('disabled',true);
				h1();
				alert("Select Pulsed mode to perform all the operations..!!!!");
			}
			else if(mode == "Pulsed")
			{
				drawSpotsInXdirection1();
				$("#power").attr('disabled',false);
				$("#spotsize").attr('disabled',false);
				h1();
			}
			break;
		case "y-axis" :
			if(mode == "Continuous")
			{
				drawLineYContinuousMode1();
				alert("Select Pulsed mode to perform all the operations..!!!!");
				h4();
			}
			else if(mode == "Pulsed")
			{
				drawSpotsInYdirection1();
				h4();
			}
			break;	
	}
	
}
var h5 = function(){
	
	//b = b - 2;
	//m = m - 2;
	//d = d-2;
	g = g-5;
	l = l-5;
	d = d-5;
	a = a+5;
	e = e+5;
	c= c+5;
	
	f= f+5;
	
	
context3.clearRect(a,b,c,10);
	
	context3.clearRect(a,g,c,g);
	context3.clearRect(a-2,b,4,5);
	context3.clearRect(e,l,f,l);
	
	context3.clearRect(0,0,b,b);
	
	context3.clearRect(c,b-5,5,g);
	t = setTimeout("h4()", 2000);
	h();
	
}
var a = 15 ;
var b =63;
var c = 40;
var d = 25;
var e = 30;
var f = 55;
var g = 25
var l = 10;
var m =48;
var h = function(){
	
	context3.beginPath();
	context3.fillStyle   = 'silver';
	context3.strokeStyle = 'black';
	context3.lineWidth   = 2;
	//Made Rectangle using Lines
	context3.moveTo(a,b);		
	context3.lineTo(c,b);	
	context3.moveTo(a,g);
	context3.lineTo(c,g);	
	context3.moveTo(a,d);
	context3.lineTo(a,b);	
	context3.moveTo(c,g);
	context3.lineTo(c,b);
	
	//Overlaping Rectangle using Lines
	context3.moveTo(e,l);
	context3.lineTo(f,l);	
	
	context3.moveTo(f,l);
	context3.lineTo(f,m);
	
	context3.moveTo(a,d);
	context3.lineTo(e,l);	
	
	context3.moveTo(c,d);
	context3.lineTo(f,l);
	context3.moveTo(c,b);
	context3.lineTo(f,m);
	
	
	context3.stroke();
}
var h1 = function(){

	a = a + 2;
	c = c+2;
	e=e+2;
	f = f +2;
	
	
	context3.clearRect(0,0,a,b);
	context3.clearRect(0,0,c,b);
	context3.clearRect(0,0,e,f);
	context3.clearRect(0,0,f,f);
	t = setTimeout("h1()", 2000);
	
	h();

}
var checkPlotValue = function(){
	
	if(plotFlag == 0){
		if(counter>=3){
			//$('#Plot').attr('disabled',false);
			drawgraph_PowervsDepth();
			$("#Plot").hide();
		}
		else{
			alert("You Must select atleast 3 readings to Plot the Graph");
		}
	
	}
	else{
	if(counter1>=3){
			//$('#Plot').attr('disabled',false);
			drawgraph_SpotSizevsDepth();
		}
		else{
			alert("You Must select atleast 3 readings to Plot the Graph");
		}
	
	
	}
}

var openNeWindow = function(){
	window.open("./images.html","_blank");
	//alert("Soon We are going to upload Images");
}

var reset = function(){
				
				counter = 0;
				counter1 = 0;
				powervsdepthArr = new Array();
				powervswidthArr = new Array();
				spotsizevsdepthArr = new Array();
				spotsizevswidthArr = new Array();
				$("#powerVsWidth").hide();
				$("#powerVsDepth").hide();
				$("#spotVsDepth").hide();
				$("#spotVsWidth").hide();	
				$("#MicroStructures").attr('disabled',true);
				//$("#Plot").attr('disabled',true);
				$('#power').attr('disabled',false);
				$('#spotsize').attr('disabled',false);
				$('#power').val("");
				$('#spotsize').val("");
				$('#maxDepth').html("");
				$('#container').html("");
				$('#constants').html("");
				$('#interactionTime').html("");
				
				
}
/*This function is for taking the values of power from dropdown List nad stuffing those values in the array*/
var selectedPower = function(){
	$("#Plot").show();
	var opt=$("#power").val();
	var power = parseInt(opt);
	$('#spotsize').attr('disabled',true);
	$('#constants').html("At constant beam spotsize : <label>1.166 mm</label>");
	plotFlag = 0;
	counter++;
	switch(opt){
			case "795" :
				maxDepth = 115.66;
				maxWidth = 701.59;
				interactionTime = 9.0;
			break;
		
			case "816" :
				maxDepth = 94.92;
				maxWidth = 447.78;
				interactionTime = 10.0;
			break;
			
			case "858" :
				maxDepth = 169.21;
				maxWidth = 827.46;
				interactionTime = 12.0;
			break;
	
			case "877" :
				maxDepth = 274.44;
				maxWidth = 1025.55;
				interactionTime = 13.0;
			break;
			
			case "905" :
				maxDepth = 272.38;
				maxWidth = 1013.17;
				interactionTime = 14.0;
			break;
			
			case "928" :
				maxDepth = 303.97;
				maxWidth = 905.87;
				interactionTime = 15.0;
			break;
			
			case "950" :
				maxDepth = 239.36;
				maxWidth = 874.92;
				interactionTime = 16.0;
			break;
			
			case "973" :
				maxDepth = 272.38;
				maxWidth = 965.71;
				interactionTime = 17.0;
			break;
			
			case "1000" :
				maxDepth = 282.7;
				maxWidth = 938.89;
				interactionTime = 18.0;
			break;
	}
	/*$('#maxDepth').append("MaxDepth (&#956;m) : " +"<font color='red'>"+ maxDepth +"</font> &nbsp;" +"MaxWidth (&#956;m) : "+"<font color='red'>"+maxWidth+"</font><br>");*/
	$("#maxDepth > ul").fadeTo('slow', 0.5);
	$("#maxDepth").prepend("<ul><li class = 'odd' >MaxDepth (&#956;m) :  " +maxDepth+ "</li><li class='even'>MaxWidth (&#956;m):" +maxWidth+ "</li></ul>");
	$("#interactionTime").html("Interaction Time is : <label>"+interactionTime+" msec </label>")
	//powerX.push(power);
	//depthY.push(maxDepth);
	powervsdepthArr.push([power,maxDepth]);
	powervswidthArr.push([power,maxWidth]);
	powerArr.push(power);
	widthArr.push(maxWidth);
	depthArr.push(maxDepth);
	$("#plot1").show();
	//alert(powerArr.length);
	/*if(counter>=5){
	$('#Plot').attr('disabled',false);
	}
	else{
	alert("You Must select atleast 5 readings to Plot the Graph");
	}*/
}

/*This function is for showing graph that is power vs case Depth where spot size is constant*/
var drawgraph_PowervsDepth = function(){
	if(powerArr.length < 3){
		alert("You Must select atleast 3 readings to Plot the Graph")
	}else{
	//$("#powerVsDepth").fadeTo('slow', 0.8);
var d = graphCalculation(powerArr, depthArr);
$("#MicroStructures").attr('disabled',false);
var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'graph'
				},
				title:{
				text : 'At Constant Beam Spot Size'
				},
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
				 credits: {
        			enabled: false
    			},
				xAxis: {
						title: {
						text: 'Power (Watts)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'CaseDepth (Microns)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			    series: [ 
				{
					type: 'line',
					data: d,
					name: 'Theoretical  Curve'
				}]
			});
		$("#power").val("");
		$("#powerVsWidth").show();
		$("#powerVsDepth").show();

}			
}
/*This function is for showing graph that is power vs case Width where spot size is constant*/	
var drawgraph_PowervsWidth = function(){
	$("#Plot").hide();
	//$("#powerVsWidth").fadeTo('slow', 0.8);
	
var d = graphCalculation(powerArr, widthArr);
var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'graph'
				},
				title:{
				text : 'At Constant Beam Spot Size'
				},
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
				 credits: {
        			enabled: false
    			},
    			
				xAxis: {
						title: {
						text: 'Power (Watts)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'SpotWidth (Microns)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				 tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			    series: [ {
					type: 'line',
					data: d,
					name: 'Theoretical  Curve'
				}]
			});

}

var graphCalculation = function(powerArr,depthArr) {

		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		var mainCurve = [];
		volumaArraypart = depthArr;
		//volumaArraypart.sort();
		e = powerArr;
		//e.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = sx + e[i];
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);

		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		//alert(powerArr[0]+"  .. "+powerArr[length-1]);
		for(var i =795 ; i < 1000; i++) {
			var output = (a * i * i) + (b * i) + c;
			mainCurve.push([i, output]);
		}//alert(mainCurve);
		return mainCurve;
}
var ch = function(){
	$("#output").hide();
	$("#outputnew").show();
	$("#power").hide();
	$("#power12").show();
	//$('#power12').attr('disabled',true);
	
	
}
var ch2 = function(){
		$('#axis').attr('disabled',true);
	
}
var pl = function(){
	$("#Plot1").hide();
	$("#spotVsDepth").show();
			$("#spotVsWidth").show();
}
/*This function is for taking the values of spotsize from dropdown List and stuffing those values in the array*/
var selectedSpotSize  = function(){//alert(1);
	$("#Plot1").show();
	var opt=$("#spotsize").val();
	$('#power').attr('disabled',true);
	$('#constants').html("At constant power : <label>918 Watt</label>");
	plotFlag = 1;
	counter1++;
	switch(opt){
		case "1.032-1" :
				spotSize  = 1.032;
				maxDepth1 = 369.3;
				maxWidth1 = 1328.73;
			break;
			
		case "1.032-2" :
				spotSize  = 1.032;
				maxDepth1 = 375.56;
				maxWidth1 = 1147.3;
			break;
		
		case "1.082-1" :
				spotSize  = 1.082;
				maxDepth1 = 335.54;
				maxWidth1 = 1137.3;
			break;
		
		case "1.082-2" :
				spotSize  = 1.082;
				maxDepth1 = 349.69;
				maxWidth1 = 987.55;
			break;
		
		case "1.166-1" :
				spotSize  = 1.166;
				maxDepth1 = 360.39;
				maxWidth1 = 1283.33;
			break;
			
		case "1.166-2" :
				spotSize  = 1.166;
				maxDepth1 = 377.62;
				maxWidth1 = 1258.73;
			break;
				
	
	}
	
	/*$('#maxDepth').append("MaxDepth (&#956;m) : " +"<font color='red'>"+ maxDepth1 +"</font> &nbsp;" +"MaxWidth (&#956;m) : "+"<font color='red'>"+maxWidth1+"</font><br>");*/
	$("#maxDepth > ul").fadeTo('slow', 0.5);
	$("#maxDepth").prepend("<ul><li class = 'odd' >MaxDepth (&#956;m) :  " +maxDepth1+ "</li><li class='even'>MaxWidth (&#956;m):" +maxWidth1+ "</li></ul>");

	spotsizevsdepthArr.push([spotSize,maxDepth1]);
	spotsizevswidthArr.push([spotSize,maxWidth1]);
	spotArr.push(spotSize);
	widthArr1.push(maxWidth1);
	depthArr1.push(maxDepth1);
	/*if(counter1>=5){
	$('#Plot').attr('disabled',false);
	}
	else{
	alert("You Must select atleast 5 readings to Plot the Graph");
	}*/

}

/*This function is for showing graph that is spotsize vs case Depth where spot size is constant*/	
 var drawgraph_SpotSizevsDepth = function(){
 	//alert(1);
 //	$("#spotVsDepth").fadeTo('slow', 0.8);
 $("#MicroStructures").attr('disabled',false);
 var d = graphCalculationforSpot(spotArr,depthArr1);
 var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'graph'
				},
				title:{
				text : 'At Constant Power'
				},
				 credits: {
        			enabled: false
    			},
				xAxis: {
						title: {
						text: 'SpotSize (mm)'
					},
					labels: {
			            formatter: function() {
			               return this.value;
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'CaseDepth (Microns)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
				tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x.toFixed(4) +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			    series: [ {
					type: 'line',
					data: d,
					name: 'Theoretical  Curve'
				}]
			});
			
			$("#spotsize").val("");
				$("#spotVsDepth").show();
				$("#spotVsWidth").show();
 }

 /*This function is for showing graph that is spotsize vs case Width where spot size is constant*/	
 var drawgraph_SpotSizevsWidth = function(){
 	$("#spotVsWidth").fadeTo('slow', 0.8);
 var d = graphCalculationforSpot(spotArr,widthArr1);
 var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'graph'
				},
				title:{
				text : 'At Constant Power'
				},
				 credits: {
        			enabled: false
    			},
				xAxis: {
						title: {
						text: 'SpotSize (mm)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'CaseWidth (Microns)'
					},
					labels: {
			            formatter: function() {
			               return this.value ;
			            }
			         }
					
				},
				 plotOptions: {
			        series: {
			            marker: {
			                enabled: false
			            }
			        }
			    },
				tooltip: {
			 	 formatter: function(){
			 	 	 return '<b>'+ this.series.name +': X = '+
               this.x.toFixed(4) +' , Y =  '+ this.y.toFixed(4) ;
			 	 }
			 
			 },
			    series: [ {
					type: 'line',
					data: d,
					name: 'Theoretical  Curve'
				}]
			});

 }

 var graphCalculationforSpot = function(spotArr,depthArr1) {

		var volumaArraypart = new Array();
		var e = new Array();
		var r = new Array();
		var mainCurve = [];
		volumaArraypart = depthArr1;
		//volumaArraypart.sort();
		e = spotArr;
		//e.sort();
		var sy = 0, sx = 0, ssx = 0, sxy = 0, sxxx = 0, sxxy = 0, sxxx = 0, sxx = 0, sxxxx = 0, n = e.length;
		for(var i = 0; i < e.length; i++) {
			sy = sy + volumaArraypart[i];
			sxx = sxx + e[i] * e[i];
			sx = sx + e[i];
			sxy = sxy + e[i] * volumaArraypart[i];
			sxxx = sxxx + e[i] * e[i] * e[i];
			sxxy = sxxy + e[i] * e[i] * volumaArraypart[i];
			sxxxx = sxxxx + e[i] * e[i] * e[i] * e[i];
		}
		var d = (sxx * (sxx * sxx - sx * sxxx )) - (sx * (sxxx * sxx - sx * sxxxx )) + (n * (sxxx * sxxx - sxx * sxxxx));
		var d1 = sy * (sxx * sxx - sx * sxxx) - sx * (sxy * sxx - sx * sxxy) + n * (sxy * sxxx - sxx * sxxy);
		var d2 = sxx * (sxy * sxx - sx * sxxy) - sy * (sxxx * sxx - sx * sxxxx) + n * (sxxx * sxxy - sxy * sxxxx);
		var d3 = sxx * (sxx * sxxy - sxy * sxxx) - sx * (sxxx * sxxy - sxy * sxxxx) + sy * (sxxx * sxxx - sxx * sxxxx);

		var a = d1 / d;
		var b = d2 / d;
		var c = d3 / d;
		
		for(var i =1.032 ; i <= 1.166 ;) {
			var output = (a * i * i) + (b * i) + c;
			mainCurve.push([i, output]);
			i = i+0.0002;
		}
		return mainCurve;
}
	
function drawDiagram() {

	/*context.beginPath();
	context.stroke();
	context.fill();*/
	
	context.fillStyle   = 'white';
	context.strokeStyle = 'black';
	context.lineWidth   = 2;

	//Drawing Traiangle
	// Start from the top-left point.

	context.moveTo(145, 40); // give the (x,y) coordinates
	context.lineTo(170, 40);
	context.lineTo(145, 60);
	context.lineTo(145, 40);
	context.stroke();
	context.fill();
	/*context.moveTo(145, 20); // give the (x,y) coordinates
	context.lineTo(170, 20);
	context.lineTo(145, 40);
	context.lineTo(145, 20);
	context.stroke();
	context.fill();
	*/
	
	/*context.beginPath();
	line from led to the mirror
	context.strokeStyle = 'green';
	context.lineWidth   = 2;
	
	
	context.stroke();*/

	
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth   = 2;

	
	// left rectangle
	context.fillRect(85, 70, 5, 25);
	context.strokeRect(85, 70, 5, 25);
	context.clearRect (80, 95,  15, 35);
	context.strokeRect(80, 95,  15, 35);
	context.fillRect(85, 130, 5, 80);
	context.strokeRect(85, 130, 5, 80);
	context.fill();
	
	//right rectangle
	context.fillRect(220, 70, 5, 25);
	context.strokeRect(220, 70, 5, 25);
	context.clearRect (215, 95,  15, 35);
	context.strokeRect(215, 95,  15, 35);
	context.fillRect(220, 130, 5, 80);
	context.strokeRect(220, 130, 5, 80);
	context.fill();
	
	//bottom rectangle
	context.fillRect(75, 210, 158, 25);
	context.strokeRect(75, 210, 158, 25);
	context.fill();
	
	//middile rect top,bottom part
	context.fillRect(152, 85, 6, 10);
	context.strokeRect(152, 85, 6, 10);
	context.fillRect(152, 141, 6, 10);
	context.strokeRect(152, 141, 6, 10);
	context.fill();
	
	
	

	//two horizhontal rectangles between two pillars.
	
	context.fillRect(95, 107, 45, 10);
	context.strokeRect(95, 107, 45, 10);
	context.fillRect(170, 107, 45, 10);
	context.strokeRect(170, 107, 45, 10);
	context.fill();
	
	
	// left border for Middile rectangle
	context.moveTo(145, 100);
	context.lineTo(140, 100);
	context.moveTo(140, 100);
	context.lineTo(140, 135);
	context.moveTo(140, 135);
	context.lineTo(145, 135);
	//right border for Middile rectangle
	context.moveTo(164, 100);
	context.lineTo(170, 100);
	context.moveTo(170, 100);
	context.lineTo(170, 135);
	context.moveTo(170, 135);
	context.lineTo(164, 135);
	context.stroke();
	
	context.closePath();   

	
	context1.beginPath();
	context1.fillStyle   = 'silver';
	context1.strokeStyle = 'black';
	context1.lineWidth   = 2;
	
	context1.clearRect(4, 1,  45, 40);
	context1.strokeRect(4, 1,  45, 40);
	context1.fillRect(4, 1,  45, 40);
	context1.closePath();   
	
	//Drawing on new canvas for moving rectangle and object upon it.
	context2.beginPath();
	context2.fillStyle   = 'silver';
	context2.strokeStyle = 'black';
	context2.lineWidth   = 2;
	
	context2.clearRect(1, 55,  48, 45);
	context2.strokeRect(1, 55,  48, 45);
	context2.fillRect(1, 55,  48, 45);
	
	//Made Rectangle using Lines
	//context2.moveTo(5,53);
	//context2.lineTo(30,53);	
	//context2.moveTo(5,15);
	//context2.lineTo(30,15);	
	//context2.moveTo(5,15);
	//context2.lineTo(5,53);	
	//context2.moveTo(30,15);
	//context2.lineTo(30,53);
	
	//Overlaping Rectangle using Lines
	//context2.moveTo(20,0);
	//context2.lineTo(45,0);	
	//context2.moveTo(20,38);
	//context2.lineTo(45,38);	
	//context2.moveTo(20,0);
	//context2.lineTo(20,38);	
//	context2.moveTo(45,0);
//	context2.lineTo(45,38);
	
//	context2.moveTo(5,15);
//	context2.lineTo(20,0);	
	//context2.moveTo(5,53);
	//context2.lineTo(20,38);
//	context2.moveTo(30,15);
//	context2.lineTo(45,0);
//	context2.moveTo(30,53);
//	context2.lineTo(45,38);
	
	
	context2.stroke();
	
	/*context2.beginPath();
    context2.arc(10, 18, 1.3, 0, 2 * Math.PI, false);
	context2.arc(13, 14, 1.3, 0, 2 * Math.PI, false);
	context2.arc(17, 9, 1.3, 0, 2 * Math.PI, false);
	context2.arc(20, 4, 1.3, 0, 2 * Math.PI, false);
	
	
	
	context2.arc(23, 14, 1.3, 0, 2 * Math.PI, false);
	context2.arc(26, 9, 1.3, 0, 2 * Math.PI, false);
	context2.arc(29, 4, 1.3, 0, 2 * Math.PI, false);
	
	context2.beginPath();
	
	context2.arc(15, 10, 1.3, 0, 2 * Math.PI, false);
	context2.arc(20, 10, 1.3, 0, 2 * Math.PI, false);
	context2.arc(25, 10, 1.3, 0, 2 * Math.PI, false);
	context2.arc(30, 10, 1.3, 0, 2 * Math.PI, false);
	
	context2.fillStyle = "red";
    context2.fill();
    context2.lineWidth = 1;
    context2.strokeStyle = "black";
	context2.closePath();   */
	
    
	
	/*context2.clearRect(10, 14, 20, 10);
	context2.strokeRect(10, 14 ,20 ,10);	
	context2.fillRect(10, 14 ,20 ,10);
	context2.clearRect(25, 7, 20, 10);
	context2.strokeRect(25, 7 ,20 ,10);*/

	
	
	context2.closePath();   
		
}
//This function is to show Line Coming  X direction
var drawLineInXdirection =function (context, startx, starty, endx, endy) {
	X_increament-= 13;
	if(X_increament >= 134){
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth   = 2;
  context.moveTo(startx, starty);
  context.lineTo(endx, endy);
  context.stroke();
  context.closePath();
  
  t = setTimeout("drawLineInXdirection(context, 250, 48, X_increament-3, 48)", 200);
 
  
  
  }else{
		clearTimeout(t);
		drawLineInYdirection(context, 155, 48, 155, Y_increament);
}		
 
}
//This function is to show Line Coming  Y direction
var drawLineInYdirection = function (context, startx, starty, endx, endy) {
	Y_increament += 4;
	if(Y_increament <= 90){
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth   = 2;
  context.moveTo(startx, starty);
  context.lineTo(endx, endy);
  
  context.closePath();
  context.stroke();
  t = setTimeout("drawLineInYdirection(context, 155, 48, 155, Y_increament)", 200);
  }else{
		clearTimeout(t);
		//$('#state').attr('disabled',false);
		drawLineInThroughBeam(context, 155, 143, 155, beamRay);
	}		
}

var drawLineInThroughBeam = function (context, startx, starty, endx, endy) {
	beamRay += 3;
	if(beamRay <= 180){
  context.beginPath();
  context.strokeStyle = 'green';
  context.lineWidth   = 2.2;
  context.moveTo(155,153);
  context.lineTo(155,beamRay);
  context.closePath();
  context.stroke();
  t = setTimeout("drawLineInThroughBeam(context, 155, 143, 155, beamRay)", 200);
  }else{
		clearTimeout(t);
		$('#state').attr('disabled',false);
		//drawSpotsInYdirection();
	}		
}


//This function is to show spots coming in X direction for pulsed Mode
var drawSpotsInXdirection1 = function (){
	
	x_spots += 5;
	if(x_spots<=35){
	context2.beginPath();
	context2.arc(x_spots, 6, 1.3, 0, 2 * Math.PI, true);
   contextDetails(context2);  
	 t = setTimeout("drawSpotsInXdirection1()", 2000);
	  context2.beginPath();
  context2.strokeStyle = '#E6E6BA';
  context2.lineWidth   = 2;
  context2.moveTo(23,5);
  context2.lineTo(24,10);
   context2.stroke();
  context2.closePath();
	}
	else{
	
		clearTimeout(t);
		//x_spots = 15;
		//drawSpotsInXdirection2();
	}	
	
}

var drawSpotsInXdirection2 = function (){
	
	x_spots += 5;
	if(x_spots<=35){
	context2.beginPath();
	context2.arc(x_spots, 3, 1.3, 0, 2 * Math.PI, true);
    contextDetails(context2);
	 t = setTimeout("drawSpotsInXdirection2()", 2000);
	 
	}
	else{
	
		clearTimeout(t);
		x_spots = 10;
	}	
	
}

//This function is to show Line coming in X direction for pulsed Mode

var drawLineXContinuousMode = function(){
	x_spots1 += 5;
	if(x_spots1<=35){
		context2.beginPath();
		context2.strokeStyle = 'red';
		context2.lineWidth = 3;
		context2.moveTo(23,4);
		context2.lineTo(x_spots1,4);
		context2.stroke();
		context2.closePath();
		t = setTimeout("drawLineXContinuousMode()", 2000);
		 context2.beginPath();
  context2.strokeStyle = '#E6E6BA';
  context2.lineWidth   = 2;
  context2.moveTo(23,5);
  context2.lineTo(24,10);
   context2.stroke();
  context2.closePath();
	}
	
	else{
	clearTimeout(t);
	x_spots = 10;
	}
	
	
	
}


//This function is to show spots coming in Y direction for pulsed Mode

var drawSpotsInYdirection1 = function(){

	x_value += 3;
	y_value -= 5;
	if(x_value<=30 || y_value>=4){
		context2.beginPath();
		context2.arc(x_value, y_value, 1.3, 0, 2 * Math.PI, false);
		contextDetails(context2);
		t = setTimeout("drawSpotsInYdirection1()", 2000);
	}
	else{
	clearTimeout(t);
	//y_value = 19;
	//drawSpotsInYdirection2();
	}
}

var drawSpotsInYdirection2 = function(){

	x_value += 3;
	y_value -= 5;
	if(x_value<=29 || y_value>=4){
	context2.beginPath();
		context2.arc(x_value, y_value, 1.3, 0, 2 * Math.PI, false);
		contextDetails(context2);
		t = setTimeout("drawSpotsInYdirection2()", 1000);
	}
	else{
	clearTimeout(t);
	x_value = 10;
	y_value = 19;
	}
}

//This function is to show line coming in Y direction for Continuous Mode
var drawLineYContinuousMode1 = function(){
	x_value += 3;
	y_value -= 5;
	if(x_value<=35 || y_value>=2){
		context2.beginPath();
		context2.strokeStyle = 'red';
		context2.lineWidth = 1;
		context2.moveTo(23,14);
		context2.lineTo(x_value+3,y_value);
		context2.stroke();
		context2.closePath();
		t = setTimeout("drawLineYContinuousMode1()", 1000);
	}
	else{
	clearTimeout(t);
	//x_value = 20;
	//y_value = 19;
	//drawLineYContinuousMode2();
	}
}

var drawLineYContinuousMode2 = function(){
	x_value += 3;
	y_value -= 5;
	if(x_value<=35 || y_value>=2){
		//context2.beginPath();
		context2.strokeStyle = 'red';
		context2.lineWidth = 1;
		context2.moveTo(20,14);
		context2.lineTo(x_value,y_value);
		context2.stroke();
		context2.closePath();
		t = setTimeout("drawLineYContinuousMode2()", 1000);
	}
	else{
	clearTimeout(t);
	x_value = 10;
	y_value = 19;
	}
}

var contextDetails = function(context2){
	context2.fillStyle = "red";
    context2.fill();
    context2.lineWidth = 1;
    context2.strokeStyle = "black"
	context2.closePath();  
}
