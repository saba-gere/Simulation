	var canvas = document.querySelector('canvas');
	canvas.height= window.innerHeight;
	canvas.width= window.innerWidth;
	var ctx=document.getElementById("canvas");
	var key=0;
	var image_bulb=new Image();
	var image_bulb1=new Image();
	var image_ammeter=new Image();
	var image_voltmater=new Image();
	var image_battery=new Image();
	var flag=0;
	var choise;
	var electron=1;
	var Switch=0;
	var convention=0;
	var bulb_count=0;
	var bulb_count1=0;
	var battery_count1=0;
	var battery_count=0;
	var ametr_count=0;
	var voltmater_count=0;
	var x_bigin=0
	var x_end=225+82
	var count=0;
	var home=1;
	var y_end=250;
	var c=canvas.getContext("2d");
	var mouse={
	x: undefined,
	y: undefined
	}
	
		window.addEventListener('resize',function()
		{
			canvas.width=innerWidth;
			canvas.height=innerHeight;
		})
window.addEventListener('mousedown',
	function(event){
		mouse.x=event.x;
		mouse.y=event.y;
		flag=1;
		console.log(mouse.x,mouse.y)
	}
	)
	window.addEventListener('keydown',
	function(event){
		key=event.keyCode;
	},false);
function line(){

	this.draw = function(){
		var image_reset=new Image();
	image_reset.src="homeblue.png";
	if(home==1)
		{
		var gradient=c.createLinearGradient(290,50,350,60);
		gradient.addColorStop("0.2","#8b0000");
		gradient.addColorStop("0.5","blue");
		gradient.addColorStop("1.0","red");
			
			c.beginPath()
			c.moveTo(280,20)
			c.lineTo(350,20)
			c.lineTo(350,60)
			c.lineTo(280,60)
			c.lineTo(280,20)
			c.fillStyle="#00ff00";
			c.fill();
			c.stroke();
			c.fillStyle=gradient;
			c.font="20px Georgia"
			c.fillText("Series",290,50)
		image_bulb.src="download.jpeg";
		c.drawImage(image_bulb,150,80,100,70)
		image_bulb.src="download.jpeg";
		c.drawImage(image_bulb,375,80,100,70)
		c.beginPath()
		c.moveTo(213,140)
		c.lineTo(413,140)
		c.stroke();
		
			c.beginPath()
			c.moveTo(280,200)
			c.lineTo(360,200)
			c.lineTo(360,240)
			c.lineTo(280,240)
			c.lineTo(280,200)
			c.fillStyle="#00ff00";
			c.fill();
			c.stroke();
			c.fillStyle=gradient;
			c.font="20px Georgia"
			c.fillText("parallel",290,220)
		image_bulb.src="download.jpeg";
		c.drawImage(image_bulb,275,250,100,50)
		image_bulb.src="download.jpeg";
		c.drawImage(image_bulb,275,320,100,50)
		c.beginPath()
		c.moveTo(310,285)
		c.lineTo(260,285)
		c.lineTo(260,365)
		c.lineTo(310,365)
		c.stroke()
		c.beginPath()
		c.moveTo(335,285)
		c.lineTo(385,285)
		c.lineTo(385,365)
		c.lineTo(335,365)
		c.stroke()
		}
	else
		{
		c.drawImage(image_reset,350,350,50,50);
		image_bulb.src="download.jpeg";
		c.drawImage(image_bulb,50,10,50,70)		
		image_battery.src="battery.jpeg";
		c.drawImage(image_battery,0,130,50,50)
		c.drawImage(image_battery,100,130,50,50)
		c.beginPath()
		c.moveTo(25,155)
		c.lineTo(100,155)
		c.stroke()

		image_battery.src="battery.jpeg";
		c.drawImage(image_battery,50,230,50,50)
		c.drawImage(image_battery,50,300,50,50)
		c.beginPath()
		c.moveTo(55,252)
		c.lineTo(20,252)
		c.lineTo(20,322)
		c.lineTo(55,322)
		c.stroke()
		c.beginPath()
		c.moveTo(90,252)
		c.lineTo(125,252)
		c.lineTo(125,322)
		c.lineTo(90,322)
		c.stroke()
				
		for(var i=0,j=0;j<3;i+=100)
		{
			if(j==2)
				i+=70
			c.beginPath()			
			c.fillStyle="#f0fff0"
			c.arc(50,100+i,15,0,Math.PI*2,false);
			c.arc(100,100+i,15,0,Math.PI*2,false);
			c.fill();
			j++;	
		}
		for(var i=0,j=0;j<3;i+=100)
		{
			if(j==2)
				i+=70
			c.beginPath()
			c.fillStyle="green"
			c.fillRect(49,91+i,2,18)
			c.fillRect(41,99+i,18,2)
			c.fillStyle="red"
			c.fillRect(91,98+i,18,2)
			j++;
		}
		c.strokeStyle="black"
		c.fillStyle="red"
		c.beginPath();
		c.arc(680,47,5,0,Math.PI*2,false);
		if(electron==0)
			c.stroke();
		else
			c.fill();
		c.fillStyle="black";
		c.font="18px black"
		c.fillText("ዋሕዚ ኤሌክትሮን",550,50)
		c.beginPath();
		c.fillStyle="red"
		c.arc(680,77,5,0,Math.PI*2,false);
		if(convention==0)
			c.stroke();
		else
			c.fill();
		c.fillStyle="black";
		c.font="18px Georgia"
		c.fillText("Conventional",550,80)
		
		c.fillStyle="black";
		c.font="18px Georgia"
		c.fillText("Switch",550,110)
		c.beginPath();
		c.fillStyle="red"
		c.arc(680,107,5,0,Math.PI*2,false);
		if(Switch==0)
			c.stroke();
		else
			c.fill();
		image_ammeter.src="AMMETER.PNG"
		//c.drawImage(image_ammeter,600,120,100,80)
		//c.beginPath()
		//c.fillStyle="#f0fff0"
		//c.arc(620,217,15,0,Math.PI*2,false);
		//c.arc(680,217,15,0,Math.PI*2,false);
		//c.fill();	
		
		//c.fillStyle="green"
			//c.fillRect(620,210,2,18)
			//c.fillRect(612,217,18,2)
			//c.fillStyle="red"
			//c.fillRect(672,217,18,2)
		
		image_voltmater.src="VOLTMATER.PNG"
		//c.drawImage(image_voltmater,600,230,100,80)
		//c.beginPath()
		//c.fillStyle="#f0fff0"
		//c.arc(620,317,15,0,Math.PI*2,false);
		//c.arc(680,317,15,0,Math.PI*2,false);
		//c.fill();
		//c.fillStyle="green"
			//c.fillRect(620,310,2,18)
			//c.fillRect(612,317,18,2)
			//c.fillStyle="red"
			//c.fillRect(672,317,18,2)
			
			for(var i=1;i<=bulb_count;i++)
			{
				bulb_sir(225+(i-1)*100,150,i,0);
				if(i>1&&(battery_count1==0&&battery_count==0))
				wire(250+(i-2)*100,170,245+(i-1)*100,170,1,0,convention);
				if(i==bulb_count)
					x_end=225+(i-1)*100;
			}
			if(ametr_count==1)
			{
				if(bulb_count1==0)
				{ammetre(225+(bulb_count)*100,150,1,0);
				x_end=225+(bulb_count)*100;
				if((battery_count1==0&&battery_count==0))
				wire(250+(i-2)*100,170,245+(i-1)*100,170,1,0,convention);}
				else
				{
					ammetre(225+(1)*100,150,1,0);
					if((battery_count1==0&&battery_count==0))
					wire(250+(i-2)*100,170,245+(i-1)*100,170,1,0,convention);
				}
			}
			for(var i=1;i<=bulb_count1;i++)
			{
				var bul=1;
				bulb_para(225,150+(i-1)*50,i,0);
				if(i>1)
				wire(250,170+(i-1)*50,x_end+60,170+(i-2)*50,0,0,convention,bul);
				if(i==bulb_count1)
				{
					y_end=150+(i-1)*50;
				}				
			}
			if(voltmater_count==1)
			{
				voltmater(225,150+(-1)*50,1,0);
				wire(250,170+(1-1)*50,x_end+60,170+(1-2)*50,0,0,convention);
			}
			for(var i=1;i<=battery_count;i++)
			{
				if (bulb_count1==0)
				{
					if(i>1&&(bulb_count==0))
					wire(250+(i-2)*100,265,235+(i-1)*100,265,1,0,convention);
					battery_sir(225+(i-1)*100,250,i);
					
				}
				else
				{
					if(i>1)
					wire(250+(i-2)*100,y_end+65,235+(i-1)*100,y_end+65,1,0,convention);
					battery_sir(225+(i-1)*100,y_end+50,i);
					
				}
				if(ametr_count==0)
				{
					if(battery_count>bulb_count)
					x_end=225+(battery_count-1)*100
				}
				else
				{
					if (battery_count==1) {
						x_end=225+(battery_count)*100
					}
					else if (battery_count>bulb_count)
					x_end=225+(battery_count-1)*100
				}
				if(bulb_count>0)
					wire(250,265,x_end+60,170,0,0,convention);
				else if (bulb_count1>0) 
				{
					wire(250,y_end+65,x_end+60,y_end+20,0,0,convention);
				};				
				
			}
			for(var i=1;i<=battery_count1;i++)
			{
				
					if (bulb_count1==0)
					{
						battery_para(225,265+(i-1)*50,i);
						if(i>1)
						wire(250,280+(i-1)*50,x_end+60,280+(i-2)*50,0,i,convention);
					}			

					else
					{
						battery_para(225,y_end+50+(i-1)*50,i);
						if(i>1)
						wire(250,y_end+65+(i-1)*50,x_end+60,y_end+65+(i-2)*50,0,i,convention);
					}
					if(bulb_count>0)
					{
						wire(250,280,x_end+60,170,0,i,convention);
					}
					else if (bulb_count1>0) 
					{
						wire(250,y_end+65,x_end+60,y_end+19,0,i,convention);
					};
					
			}
			c.beginPath()
			var rad=0
			if(battery_count1!=0||battery_count==1)
			{
					for(var i=1;i<=bulb_count;i++)
					{
						rad=30/bulb_count;
						if (bulb_count1==0)
						{
							bulb_sir(225+(i-1)*100,150,i,1,rad);
						}
						else
						{
							rad=30/(bulb_count+1)
							bulb_sir(225+(i)*100,150,i,1,rad);
						}					
					}
					for(var i=1;i<=bulb_count1;i++)
					{
						rad=30;
						if(bulb_count!=0&&bulb_para==1)
						bulb_para(225,150+(i-1)*50,i,1,30/(bulb_count+1));	
						else 
						bulb_para(225,150+(i-1)*50,i,1,rad);
					}					

			}
			if(battery_count>1)
			{
					for(var i=1;i<=bulb_count;i++)
					{
						rad=30*battery_count/bulb_count;
						
						if (bulb_count1==0)
						{
							bulb_sir(225+(i-1)*100,150,i,1,rad);

						}
						else
						{
							rad=30*battery_count/(bulb_count+1)
							bulb_sir(225+(i)*100,150,i,1,rad);
						}					
					}
					for(var i=1;i<=bulb_count1;i++)
					{
						rad=30*battery_count;
						bulb_para(225,150+(i-1)*50,i,1,rad);
					}
					
			}
		flag=0
		if((battery_count>0||battery_count1>0)&&(bulb_count>0||bulb_count1>0)&&Switch==1)
			{
				if(battery_count>0&&bulb_count>0)
				count+=0.75*battery_count/bulb_count;
				else if(battery_count1>0)
					count+=0.75/battery_count1
				else
					count+=0.5*battery_count

			}
		else
			count=0;
		
	}

	}
		
	this.update=function(){
		if(home==1)
		{
			if(mouse.x>=291&&mouse.x<=356&&mouse.y>=101&&mouse.y<=135)
				{
						choise=0
						home=0;
				}
			else if(mouse.x>=291&&mouse.x<=370&&mouse.y>=283&&mouse.y<=317)
				{
					choise=1
					home=0;
				}
		}
		else{
		if(flag==1)
		{
		if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(167)&&mouse.y<=(190)&&choise==0)
		{
			bulb_count++;
			bulb_count1=0;
		}
		else if(mouse.x>=(95)&&mouse.x<=(120)&&mouse.y>=(167)&&mouse.y<=(190)&&bulb_count>0&&choise==0)
		{
			bulb_count--;
			bulb_count1=0;
		}
		else if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(167)&&mouse.y<=(190)&&choise==1&&(y_end+65+(battery_count1)*50)<400)
		{
			bulb_count1++;
			bulb_count=0;
		}
		else if(mouse.x>=(95)&&mouse.x<=(120)&&mouse.y>=(167)&&mouse.y<=(190)&&bulb_count1>0&&choise==1)
		{
			bulb_count1--;
			bulb_count=0;
		}
		else if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(267)&&mouse.y<=(290)&&battery_count1>=1)
		{
			alert("not allowed!")
			
		}
		else if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(267)&&mouse.y<=(290)&&battery_count<=3)
		{
			battery_count++;
		}
		else if(mouse.x>=(95)&&mouse.x<=(120)&&mouse.y>=(267)&&mouse.y<=(290)&&battery_count>0)
		{
			battery_count--;
		}
		else if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(435)&&mouse.y<=(465)&&battery_count>=1)
		{
			alert("not allowed!")
			
		}
		else if(mouse.x>=(45)&&mouse.x<=(70)&&mouse.y>=(435)&&mouse.y<=(465)&&(y_end+65+(battery_count1)*50)<400)
		{
			battery_count1++;
			console.log(y_end+65+(battery_count1-1)*50)

		}
		else if(mouse.x>=(95)&&mouse.x<=(120)&&mouse.y>=(435)&&mouse.y<=(465)&&battery_count1>0)
		{
			battery_count1--;
		}
		else if(mouse.x>=361&&mouse.x<=404&&mouse.y>=432&&mouse.y<=476)
		{
			home=1;
			battery_count=0;
			battery_count1=0;
			bulb_count1=0;
			bulb_count=0;
		}
		else if(mouse.x>=(680)&&mouse.x<=(700)&&mouse.y>=(120)&&mouse.y<=135&&electron<1)
		{
			electron++;
			convention=0;
		}
		
		else if(mouse.x>=(680)&&mouse.x<=(700)&&mouse.y>=(150)&&mouse.y<=165&&convention<1)
		{
			electron=0;
			convention++;
		}
		else if(mouse.x>=(680)&&mouse.x<=(700)&&mouse.y>=(180)&&mouse.y<=195)
		{
			if(Switch==0)
			Switch++;
			else
				Switch--;
		}
	}
}
		this.draw();

	}	
}


var linedrow;
function init(){
	linedrow=[];
	linedrow = new line();
	
	animate();
}
	
 function animate()	
 {

		requestAnimationFrame(animate);
		c.clearRect(0,0,innerWidth,innerHeight);
			//for(var c=0;c<4;c++)
			linedrow.update();
		
}
	init();
	function bulb_sir(x,y,i,light,rad){
		this.x=x
		this.y=y
		this.i=i
		this.light=light
		this.rad=rad
		c.strokeStyle="black"
		c.beginPath()
		
		if(this.light==0)
		{
			c.arc(this.x+23,this.y,10,0,Math.PI*2,false);
			c.stroke()
			c.fillStyle="red"
			c.font="15px Georgia";
		c.fillText(0,this.x+15,this.y+2)
		c.fillStyle="black"
		c.fillText("V",this.x+40,this.y+10)
		}

		
		else{
			c.fillStyle="#ffd700"
			c.arc(this.x+23,this.y,this.rad,0,Math.PI*2,false)
			c.fill();
			c.beginPath()
			c.arc(this.x+23,this.y,10,0,Math.PI*2,false);
			c.stroke()
			c.fillStyle="red"
			c.font="15px Georgia";
		c.fillText((this.rad/6)*Switch,this.x+15,this.y+2)
		c.fillStyle="black"
		c.fillText("V",this.x+40,this.y+10)
		}
		var j=0;
		c.fillStyle="#696969"
		c.fillRect(this.x+18,this.y+10,10,10)
		c.fillStyle="black"
		c.fillRect(this.x+21,this.y+20,5,3)
		
	}
	function bulb_para(x,y,i,light,rad){
		this.x=x
		this.y=y
		this.i=i
		this.light=light
		this.rad=rad
		c.strokeStyle="black"
		c.beginPath()
		
		if(this.light==0)
		{
			c.arc(this.x+23,this.y,10,0,Math.PI*2,false);
			c.stroke()
			c.fillStyle="red"
			c.font="15px Georgia";
		c.fillText(0,this.x+15,this.y+2)
		c.fillStyle="black"
		c.fillText("V",this.x+40,this.y+10)
		}
		
		else{
			c.fillStyle="#ffd700"
			if(bulb_count>0&&this.i==1&&battery_count<=1)
				this.rad=30/(bulb_count+1)
			else if(bulb_count>0&&this.i==1&&battery_count>1)
				this.rad=30*battery_count/(bulb_count+1)
			c.arc(this.x+23,this.y,this.rad,0,Math.PI*2,false)
			c.fill();
			c.beginPath()
			c.arc(this.x+23,this.y,10,0,Math.PI*2,false);
			c.stroke()
			c.fillStyle="black	"
			c.font="15px Georgia";
		c.fillText((this.rad/6)*Switch,this.x+15,this.y+2)
		c.fillStyle="black"
		c.fillText("V",this.x+40,this.y+10)
		}
		c.fillStyle="#696969"
		c.fillRect(this.x+18,this.y+10,10,10)
		c.fillStyle="black"
		c.fillRect(this.x+21,this.y+20,5,3)
		
		
	}
	function battery_sir(x,y,i){
		this.x=x
		this.y=y
		this.i=i
		if(bulb_count==0)
			x_end=225+82
		image_battery.src="battery.jpeg";
		c.drawImage(image_battery,this.x,this.y,50,30)
		
	}
	function battery_para(x,y,i){
		this.x=x
		this.y=y
		this.i=i
		if(bulb_count==0)
			x_end=225+82;
		image_battery.src="battery.jpeg";
		c.drawImage(image_battery,this.x,this.y,50,30)	
			
	}
function wire(x,y,x2,y2,ser,i,conv,bul)
{
	
	this.x=x;
	this.y=y;
	this.x1=x2;
	this.y1=y2;
	this.ser=ser
	this.i=i;
	this.bu=bul;
	this.conv=convention
	if(this.ser==1)
	{
		c.beginPath();
		c.moveTo(this.x,this.y)
		c.lineTo(this.x1,this.y)
		c.stroke();
		
		for(var i=0;i<=this.x1-this.x;i+=12)
		{
			c.fillStyle="blue"
			c.beginPath()
			if(this.conv==0)
			{c.arc(this.x+i,this.y,5,0,Math.PI*2,false);
			
			c.fill()}
			if(this.i<2)
			{
				if(this.conv==0)
				{c.arc(this.x+i,this.y1,5,0,Math.PI*2,false);
				
			c.fill()}}
			c.beginPath()
			c.fillStyle="red"
			if(this.conv==0)
			c.fillRect(this.x+i-4,this.y-2,7,3)
			else
			{
				c.fillStyle="black"
				c.fillRect(this.x+i-4,this.y-2,7,3)
				c.beginPath()
				if(battery_count>1)
				{
					c.beginPath()
					c.moveTo(this.x+i-3,this.y-4)
					c.lineTo(this.x+i-7,this.y)
					c.lineTo(this.x+i-3,this.y+4)
					c.fill();
				}
				else
				{
					c.moveTo(this.x+i+3,this.y-4)
				c.lineTo(this.x+i+7,this.y)
				c.lineTo(this.x+i+3,this.y+4)
				c.fill();
				}

			}
			if(this.i<2)
			{
				if(this.conv==0)
					c.fillRect(this.x+i-4,this.y1-2,7,3)
				else
				{	c.fillStyle="black"
					c.fillRect(this.x+i-4,this.y1-2,7,3)
					c.beginPath()
					if(battery_count>1)
				{
					c.beginPath()
					c.moveTo(this.x+i-3,this.y-4)
					c.lineTo(this.x+i-7,this.y)
					c.lineTo(this.x+i-3,this.y+4)
					c.fill();
				}
				else
				{
					c.moveTo(this.x+i+3,this.y-4)
				c.lineTo(this.x+i+7,this.y)
				c.lineTo(this.x+i+3,this.y+4)
				c.fill();
				}
				}
			}
			
		}
	}
	else
	{

		c.beginPath();
		c.moveTo(this.x,this.y)
		c.lineTo(this.x-50,this.y)
		c.lineTo(this.x-50,this.y1)
		c.lineTo(this.x1,this.y1)
		c.lineTo(this.x1,this.y)
		c.lineTo(this.x,this.y)
		c.stroke();
		var tem,tem2
		if(this.x>this.x1)
			{
				tem=this.x
				tem2=this.x1
			}
		else
			{
				tem=this.x1
				tem2=this.x
			}
		for(var i=0;i<=Math.abs(this.x1-this.x+50);i+=12)
		{
			
			c.fillStyle="blue"
			c.beginPath()
			if(this.conv==0&&this.bu!=1)
			{
				c.arc(tem2-50+((i+count)%Math.abs(this.x1-this.x+50)),this.y,5,0,Math.PI*2,false);
				c.fill()
			}
			if(this.i<2)
			{
				if(this.conv==0)
				{
					c.arc(tem-((i+count)%Math.abs(this.x1-this.x+50)),this.y1,5,0,Math.PI*2,false);
					c.fill()
				}
		}
			c.beginPath()
			c.fillStyle="red"
			if(this.conv==0)
			c.fillRect(tem2-50-4+((i+count)%Math.abs(this.x1-this.x+50)),this.y-2,7,3)
			else
			{
				c.fillStyle="black"
				if(this.bu!=1)
					{c.fillRect(tem-4-((i+count)%Math.abs(this.x1-this.x+50)),this.y-2,7,3)
					if(battery_count>0||battery_count1>0)
					{
						
						c.beginPath()
					c.moveTo(tem-3-((i+count)%Math.abs(this.x1-this.x+50)),this.y-4)
					c.lineTo(tem-7-((i+count)%Math.abs(this.x1-this.x+50)),this.y)
					c.lineTo(tem-3-((i+count)%Math.abs(this.x1-this.x+50)),this.y+4)
						c.fill();
					}}
					else
					{
						c.beginPath()
					c.moveTo(tem2-50+3+((i+count)%Math.abs(this.x1-this.x+50)),this.y-4)
					c.lineTo(tem2-50+7+((i+count)%Math.abs(this.x1-this.x+50)),this.y)
					c.lineTo(tem2-50+3+((i+count)%Math.abs(this.x1-this.x+50)),this.y+4)
						c.fill();
					}
			}
			if(this.i<2)
			{
				if(this.conv==0)
				c.fillRect(tem-4-((i+count)%Math.abs(this.x1-this.x+50)),this.y1-2,7,3)
				else
				{
					c.fillStyle="black"
					c.fillRect(tem2-50-4+((i+count)%Math.abs(this.x1-this.x+50)),this.y1-2,7,3)

					c.beginPath()
					c.moveTo(tem2-50+3+((i+count)%Math.abs(this.x1-this.x+50)),this.y1-4)
					c.lineTo(tem2-50+7+((i+count)%Math.abs(this.x1-this.x+50)),this.y1)
					c.lineTo(tem2-50+3+((i+count)%Math.abs(this.x1-this.x+50)),this.y1+4)
						c.fill();
				}
			}
		}
		var a,b;
		if(this.y1-this.y>=0)
			{
				a=this.y
				b=this.y1;
			}
		else
			{
				a=this.y1
				b=this.y
			}
		for(var i=0;i<=Math.abs(this.y1-this.y);i+=12)
		{
			c.fillStyle="blue"
			c.beginPath()
			if(this.conv==0)
			{c.arc(this.x-50,a+((i+count)%(Math.abs(this.y1-this.y))),5,0,Math.PI*2,false);
			c.fill()
			c.beginPath()
			c.arc(this.x1,b-((i+count)%(Math.abs(this.y1-this.y))),5,0,Math.PI*2,false);
			c.fill()
			c.beginPath()
			c.fillStyle="red"
			c.fillRect(this.x-50-4,a-2+((i+count)%(Math.abs(this.y1-this.y))),7,3)
			c.fillRect(this.x1-4,b-2-((i+count)%(Math.abs(this.y1-this.y))),7,3)}
			else{
					c.fillStyle="black"
					c.fillRect(this.x1-4,a-2+((i+count)%(Math.abs(this.y1-this.y))),3,7)
					c.fillRect(this.x-50-4,b-2-((i+count)%(Math.abs(this.y1-this.y))),3,7)
					c.beginPath()
					c.moveTo(this.x1-6,a+5+((i+count)%(Math.abs(this.y1-this.y))))
					c.lineTo(this.x1-2,a+9+((i+count)%(Math.abs(this.y1-this.y))))
					c.lineTo(this.x1+2,a+5+((i+count)%(Math.abs(this.y1-this.y))))
						c.fill();
						c.beginPath()
					c.moveTo(this.x-50-6,b-2-((i+count)%(Math.abs(this.y1-this.y))),this.y1-4)
					c.lineTo(this.x-50-2,b-6-((i+count)%(Math.abs(this.y1-this.y))),this.y1)
					c.lineTo(this.x-50+2,b-2-((i+count)%(Math.abs(this.y1-this.y))),this.y1+4)
						c.fill();
			}


		}
	}
}

	
