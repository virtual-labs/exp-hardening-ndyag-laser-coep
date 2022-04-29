Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};
//TAKING OUT UNIQUE OBJECT FROM ARRAY
Array.prototype.unique = function() {
	var a = [], l = this.length;
	for(var i = 0; i < l; i++) {
		for(var j = i + 1; j < l; j++)
		if(this[i] === this[j])
			j = ++i;
		a.push(this[i]);
	}
	return a;
}
var materialStore = [{
	"Name" : "Almunium",
	"color" : "#C0C0C0",
	"Tm" : 933, /*K*/
	"t2" : 2000, /*K*/
	"tv" : 2519, /*K*/
	"Cp" : 0.938, /*kJ/KgK*/
	"Cpl" : 0.303, /*kJ/KgK*/
	//"L":212, /*kJ/Kg*/
	"Lm" : 321, /*kJ/Kg*/
	"Lv" : 10530, /*kJ/Kg*/
	"den" : 2700 /*Kg/m3*/
}, {
	"Name" : "Copper",
	"color" : "#B87333",
	"Tm" : 1356.4,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.234,
	"Cpl" : 0.303,
	//"L":212,
	"Lm" : 176,
	"Lv" : 4730,
	"den" : 8940
}, {
	"Name" : "Mild Steel",
	"color" : "#B0C4DE",
	"Tm" : 1772,
	"t2" : 2000,
	"tv" : 2870,
	"Cp" : 0.49,
	"Cpl" : 0.7,
	//"L":212,
	"Lm" : 247,
	"Lv" : 6090,
	"den" : 7850
}, {
	"Name" : "Tungsten",
	"color" : "#43464B",
	"Tm" : 1357.77,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.234,
	"Cpl" : 0.303,
	"L" : 212,
	"Lm" : 176,
	"Lv" : 5065,
	"den" : 8940
}, {
	"Name" : "Cobalt",
	"color" : "#43464B",
	"Tm" : 1357.77,
	"t2" : 2000,
	"tv" : 2840.15,
	"Cp" : 0.42,
	"Cpl" : 0.303,
	"L" : 212,
	"Lm" : 176,
	"Lv" : 5065,
	"den" : 8900
}, {
	"Name" : "SS",
	"color" : "#e6e6e6",
	"Cp" : 0.5,
	"den" : 8030
}];

function solidStateProcessing() {
	this.material
	this.state
	this.energy
	this.jsonObjectContain
	this.setMaterial = function(material) {
		this.jsonObjectContain = jQuery.parseJSON(JSON.stringify(materialStore[material]));
		console.log(this.jsonObjectContain);
	};
	this.getMaterial = function() {
		console.log(this.jsonObjectContain);
		return this.jsonObjectContain;
	}
};

function graphView() {
	this.volumeArray = [];
	this.energyArray = [];
	this.radiusArray = [];
	this.outputArray = [];
	this.energyPoint = [];
	this.mainCurve = [];
	this.pointValue = [];
	this.graphCalculation = function(){
		 this.energyArray = this.energyArray.unique();
		 this.volumeArray = this.volumeArray.unique();
		 this.radiusArray = this.radiusArray.unique();
		 this.volumeArray.sort();
		 this.energyArray.sort();
		 this.radiusArray.sort();
		 var sy=0,sx=0,ssx=0,sxy=0,sxxx=0,sxxy=0,sxxx=0,sxx=0,sxxxx=0,n= this.energyArray.length;
		 for(var i = 0; i < this.energyArray.length; i++)
		 {
			sy = sy + this.volumeArray[i];
			sxx = sxx + this.energyArray[i]*this.energyArray[i];
			sx = sx + this.energyArray[i];
			sxy = sxy + this.energyArray[i]*this.volumeArray[i];
			sxxx = sxxx + this.energyArray[i]*this.energyArray[i]*this.energyArray[i];
			sxxy = sxxy + this.energyArray[i]*this.energyArray[i]*this.volumeArray[i];
			sxxxx = sxxxx + this.energyArray[i]*this.energyArray[i]*this.energyArray[i]*this.energyArray[i];
		}
		var d = ( sxx * ( sxx * sxx - sx * sxxx ))- ( sx * ( sxxx * sxx - sx * sxxxx )) + ( n * ( sxxx * sxxx - sxx * sxxxx));
		var d1 = sy*(sxx*sxx-sx*sxxx)-sx*(sxy*sxx-sx*sxxy)+n*(sxy*sxxx-sxx*sxxy);
		var d2 = sxx*(sxy*sxx-sx*sxxy)-sy*(sxxx*sxx-sx*sxxxx)+n*(sxxx*sxxy-sxy*sxxxx);
		var d3 = sxx*(sxx*sxxy-sxy*sxxx)-sx*(sxxx*sxxy-sxy*sxxxx)+sy*(sxxx*sxxx-sxx*sxxxx);
		var a = d1/d;
		var b = d2/d;
		var c = d3/d;
		//alert(a + " " + b + " " + c);
		for(var i = 0; i < 50; i++ ){
			var output = (a * i * i) + (b * i) + c;
			
			this.mainCurve.push([i,output * 10e-3]);
		}
		alert(this.mainCurve);
		return this.mainCurve;
	}
	
	this.pointOfGraph = function(){
		this.x = this.energyArray.unique();
		this.y = this.volumeArray.unique();
		
		for(var i = 0; i < this.x.length; i++){
			var x = this.x[i];
			var y = this.y[i];
			this.pointValue.push([x,y * 10e-3])	
		}
		return this.pointValue;
	}

	this.plotenergy = function() {
			var d = this.graphCalculation();
			var pointvlaue = this.pointOfGraph();
			alert(pointvlaue);
			var chart = new Highcharts.Chart({
				chart: {
						renderTo: 'container'
				},
				 credits: {
        			enabled: false
    			},
				xAxis: {
						title: {
						text: 'Energy'
					},
					labels: {
			            formatter: function() {
			               return this.value +'J';
			            }
			         }
				},
				yAxis: {
					title: {
						text: 'Volume'
					},
					labels: {
			            formatter: function() {
			               return this.value +'cubic mm';
			            }
			         }
					
				},
			    series: [{
						type: 'scatter',
						data: pointvlaue,
						name: 'calculated value'
				}, {
					type: 'line',
					data: d,
					name: 'Curve'
				}]
			});
			
	}
} 

function experimentCalculation(ssp) {
	this.t = 300;
	this.t1 = 1000;
	this.volumeType
	this.volume
	this.radius
	this.calculate = function() {
		if(1 == ssp.state) {

			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * ssp.jsonObjectContain.Cp * (this.t1 - this.t ) ) );

			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));

		} else if(2 == ssp.state) {

			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * (ssp.jsonObjectContain.Cp * (ssp.jsonObjectContain.Tm - this.t ) + ssp.jsonObjectContain.Lm + (ssp.jsonObjectContain.Cpl * ((ssp.jsonObjectContain.t2 - ssp.jsonObjectContain.Tm ) ) ) ) ) );

			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));

		} else {

			this.volume = ((ssp.energy ) / (ssp.jsonObjectContain.den * (ssp.jsonObjectContain.Cp * (ssp.jsonObjectContain.Tm - this.t ) + ssp.jsonObjectContain.Lm + (ssp.jsonObjectContain.Cpl * ((ssp.jsonObjectContain.t2 - ssp.jsonObjectContain.Tm ) ) + ssp.jsonObjectContain.Lv ) ) ) );

			this.radius = Math.pow(((3 * this.volume ) / (2 * Math.PI ) ), (1 / 3 ));
		}
		var obj = new graphView();
		obj.volumeArray.push(this.volume);
		obj.radiusArray.push(this.radius);
		obj.energyArray.push(ssp.energy);
		//alert(obj.volumeArray + " " + obj.radiusArray + " " + obj.energyArray)
	}
}

function drawDiagram() {
	//this.paper = paper;
	//this.color
	//this.state = solidStateProcessing.state;
	this.drawMaterial = function(c) {
		var c = c;
	var cxt = c.getContext("2d");
	cxt.drawImage("../images/led.jpg",30,40);
	cxt.fillText("R = ", 245, 100);
	cxt.stroke();

	cxt.fillRect(140, 0, 20, 60);

	cxt.moveTo(130, 60);
	cxt.lineTo(170, 60);
	cxt.lineTo(150, 81);
	cxt.lineTo(130, 60);
	cxt.stroke();
	cxt.fill();
	var centerX = 150;
	var centerY = 80;
	var radius = 35;
	var lineWidth = 0;

	cxt.fillStyle = '#00f';
	//cxt.fillRect(20, 20, 150, 100);
	//cxt.fillStyle = "rgb(29,150,28)";

	cxt.fillRect(60, 80, 180, 100);
	//cxt.clearRect(100,100,100,100);

	cxt.beginPath();
	cxt.arc(centerX, centerY, radius, 0, Math.PI, false);

	cxt.closePath();
	cxt.lineWidth = lineWidth;
	cxt.fillStyle = "#8ED6FF";
	cxt.fill();
	cxt.strokeStyle = "black";
	cxt.stroke();
	cxt.fill();
	var i = 0;
	cxt.lineWidth = 0.25;
	cxt.beginPath();
	cxt.moveTo(150, 80 + i * 14);
	cxt.lineTo(270, 80 + i * 14);
	cxt.stroke();

	var i = 0
	cxt.lineWidth = 0.25;
	cxt.beginPath();
	cxt.moveTo(150, 115 + i * 14);
	cxt.lineTo(270, 115 + i * 14);
	cxt.stroke();
	};

	
};


$(document).ready(function() {
	if($.browser.msie) {
		document.write("The Existing version of Internet Explorer is not supported ");
		document.write("<A href  = 'http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>")
	} else {
		var c = document.getElementById("diagram");
		var drawdiagram = new drawDiagram(c);
		drawdiagram.drawMaterial(c);
		
		var ssp = new solidStateProcessing();
		var ec = new experimentCalculation(ssp);
		var gv = new graphView();
		var i = 0, j = 0;
		//brd = gv.createBoard();
		
		$('#energy').change(function() {
			if(!isNaN($('#energy').val())) {
				var x = parseInt($('#energy').val());
				ssp.energy = x;
			}
		});
		$('#state').change(function() {
			ssp.state = parseInt($('#state').val());
			if(1 == ssp.state) {
				ssp.color = "darkred";
				$("#materialoption").html("<select id = 'material' name = 'material' class = 'inputstyle'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select>");
			} else if(2 == ssp.state){
				ssp.color = "yellow";
				$("#materialoption").html("<select id = 'material' name = 'material' class = 'inputstyle'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select>");
			} else{
				$("#materialoption").html("<select id = 'material' name = 'material' class = 'inputstyle'><option selected = 'selected'> --select-- </option> <option value = 0> Aluminium </option> <option value = 1> Copper </option><option value = 2> Mild Steel </option><option value = 3>Tungsten</option><option value = 4>Cobalt</option></select>");
				ssp.color = "white";
			}

		});
		$('#materialoption').change(function() {
			
			if(!isNaN($('#material').val())) {
				var x = parseInt($('#material').val());
				
				ssp.setMaterial(x);
				try {
					diagram.remove();
				} catch(err) {
				}
				//console.log(ssp.jsonObjectContain.color);
				drawdiagram.drawMaterial(ssp.jsonObjectContain.color);
				try {
					bendLine.remove();
				} catch(err) {
				}
				drawdiagram.drawBendLines();
			} else
				alert("Please Enter The Number");
		});
		$('#output').click(function() {
			$('#material').attr('disabled', true);
			$('#state').attr('disabled', true);
			var x = ssp.getMaterial();

			var htmlvalue = "<table class = 'materialvalueout'><tr class= 'odd '><td>Name</td><td>" + x.Name + "</td></tr><tr class= 'even '><td>T<sub>m</sub></td><td> " + x.Tm + "</td></tr><tr class= 'odd '><td>T<sub>2<sub></td><td>" + x.t2 + "</td></tr><tr class= 'even' ><td>C<sub>p</sub></td><td>" + x.Cp + "</td></tr><tr class= 'odd '><td>C<sub>pl</sub></td><td>" + x.Cpl + "</td></tr><tr class= 'even' ><td>L</td><td>" + x.L + "</td></tr><tr class= 'odd '><td>L<sub>m</sub></td><td>" + x.Lm + "</td></tr><tr class= 'even ><td>L<sub>v</sub></td><td>" + x.Lv + "</td></tr><tr class= 'odd '><td>Density</td><td>" + x.den + "</td></tr></table>"

			$("#selectedvalue").html(htmlvalue);
			ec.calculate(ssp.state);
			ec.volume = ec.volume * 10e9;
			ec.radius = ec.radius * 10e3;
			gv.volumeArray.push(ec.volume);
			gv.energyArray.push(ssp.energy);
			
			// radius * 10^3
			$("#outputarea > ul").fadeTo('slow', 0.5);
			$("#outputarea").prepend("<ul><li class = 'odd' >Volume     :     " + (ec.volume.toFixed(3)) + " mm<sup>3</sup></li><li class='even'>Radius     :     " + (ec.radius.toFixed(3)) + " mm</li></ul>");
			/*try {
				circle.remove();
			} catch(err) {
			}
			//console.log(ssp.color);
			circle = drawdiagram.drawSemiCircle(ssp.color);
			circle.toFront();
			try {
				drawArrow.remove();
			} catch(err) {
			}
			drawArrow = drawdiagram.drawArrow();*/
			$("#plotenergy").show("slow");

		});

		$("#plotenergy").click(function() {

			gv.plotenergy();
		})

		$("#reload").click(function() {
			$('#material').attr('disabled', false);
			$('#state').attr('disabled', false);
			window.location.reload();
		});
		
		$("#plotenergy").hide();
	}
});
