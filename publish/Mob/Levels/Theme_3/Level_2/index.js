var Level_3_2 = {
			timerSpeed:0.04,
			
			btn_1 : null,
			btn_2 : null,
			btn_3 : null,
			btn_4 : null,
			btn_5 : null,
			btn_6 : null,
			
			obs_1 : null,
			obs_2 : null,
			obs_3 : null,
			
			btn_1_Pressed:false,
			btn_2_Pressed:false,
			btn_3_Pressed:false,
			btn_4_Pressed:false,
			btn_5_Pressed:false,
			btn_6_Pressed:false,
			
			HomeImage:null,
			

			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-57};
					RestrictedArea = null;

					if(world)
					{
						this.reset();
						setupDebugDraw();
						this.startStage();
						resumeGame();
					}
					else
					{
						if(!isBox2dInitialized)
							initBox2dEnv();
						
						this.startStage();
					} 
			},
			
			handleGameLogic:function()
			{

			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				numOfBalls = 3;
				sandLevel = 0;	
				
				this.btn_1_Pressed = false;
				this.btn_2_Pressed = false;
				this.btn_3_Pressed = false;
				this.btn_4_Pressed = false;
				this.btn_5_Pressed = false;
				this.btn_6_Pressed = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.HomeImage = new Image();
				    this.HomeImage.src = "images/Home_empty.png";
				  
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					CreateFloor();
					
					var arr = [-26, -20.5, -26, -34.5, 26, 21.5, 26, 34.5];
					var arr1 = [[0,0],[0,-0.4],[2,-0.4],[2,0]]; //strigt 
					var arr2 = [[2,0],[2,0.4],[0.4,0.4],[0,0]];
					var arr3 = [[2,0],[2.5,0.4],[0.4,0.4],[0,0]];  
					var arr4 = [-28.5, -22, -20.5, -30, 28.5, 23, 19.5, 30];
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor-2.4  , y:HomePos.y/ScaleFactor-11 , vertices:indicesConvertor(arr4) });
					CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:HomePos.x/ScaleFactor+2.4  , y:HomePos.y/ScaleFactor-11 , vertices:flipArr(indicesConvertor(arr4) ,true ,false ) });

					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+1.6  , y:HomePos.y/ScaleFactor-7.2 , width:0.4 , height:6});
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-1.6  , y:HomePos.y/ScaleFactor-7.2 , width:0.4 , height:6});
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-2  , y:HomePos.y/ScaleFactor-9 , width:0.6 , height:0.9});
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+2  , y:HomePos.y/ScaleFactor-9 , width:0.6 , height:0.9});
					
					this.btn_1 = CreateObj({name:"btn_1",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-2.5  , y:HomePos.y/ScaleFactor-9 , width:0.6 , height:0.8});
					this.btn_2 = CreateObj({name:"btn_2",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+2.5  , y:HomePos.y/ScaleFactor-9 , width:0.6 , height:0.8});
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-4.7  , y:HomePos.y/ScaleFactor-7 , width:6 , height:0.9});
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+4.7  , y:HomePos.y/ScaleFactor-7 , width:6 , height:0.9});
					this.btn_3 = CreateObj({name:"btn_3",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-7.9  , y:HomePos.y/ScaleFactor-7 , width:0.6 , height:0.8});
					this.btn_4 = CreateObj({name:"btn_4",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+7.9  , y:HomePos.y/ScaleFactor-7 , width:0.6 , height:0.8});

					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-2.3  , y:HomePos.y/ScaleFactor-5 , width:1.7 , height:0.9});
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+2.3  , y:HomePos.y/ScaleFactor-5 , width:1.7 , height:0.9});
					this.btn_5 = CreateObj({name:"btn_5",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor-3.4  , y:HomePos.y/ScaleFactor-5 , width:0.6 , height:0.8});
					this.btn_6 = CreateObj({name:"btn_6",color:null,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor+3.4  , y:HomePos.y/ScaleFactor-5 , width:0.6 , height:0.8});

					this.obs_1 = CreateObj({density:9999,color:ORANGE_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor  , y:HomePos.y/ScaleFactor-9 , width:2.9 , height:0.5});
					this.obs_2 = CreateObj({density:9999,color:ORANGE_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor  , y:HomePos.y/ScaleFactor-7 , width:2.9 , height:0.5});
					this.obs_3 = CreateObj({density:9999,color:ORANGE_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor  , y:HomePos.y/ScaleFactor-5 , width:2.9 , height:0.5});

					creatFan(HomePos.x/ScaleFactor-10.5,HomePos.y/ScaleFactor-7,3,0.4,true , 7 , 3 , 30, RED_COLOR);
					
					creatFan(HomePos.x/ScaleFactor+5.9,HomePos.y/ScaleFactor-9.5,2.4,0.4,true , 2 , -3 , 30, RED_COLOR);
					
					createSpikesBox(HomePos.x/ScaleFactor-6.0 , HomePos.y/ScaleFactor-10.5 , 1);
					
					
					//var fan = creatFan(HomePos.x/ScaleFactor+7,HomePos.y/ScaleFactor-3,2.4,0.4,true , 2 , -3 , 30, ORANGE_COLOR);
					
					var rect = CreateObj({density:55,color:null,maskBits:(~0xFFFF )  ,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:HomePos.x/ScaleFactor+7,y:HomePos.y/ScaleFactor-3 , width:3 , height:0.4});
					var cBox = CreateObj({density:55,color:null ,maskBits:(~0xFFFF) ,fixedAngle:false ,type: "static" , x:HomePos.x/ScaleFactor+7,y:HomePos.y/ScaleFactor-3,shape:"circle" ,radius:0.16});
					
					createRevoluteJoint(rect , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0),true ,  0 ,  0);

					rect.ApplyForce(new b2Vec2(0, 800),  new b2Vec2(2,0));

					var cir = CreateObj({color:RED_COLOR,density:10,type:"kin" , shape:"circle" , x:HomePos.x/ScaleFactor+7  , y:HomePos.y/ScaleFactor-3,radius:0.5});
					
					var rope = createRevoluteJoint(rect , cir , new b2Vec2(2,0) , new b2Vec2(0,0));

					
					/*var angle = 0;
					for (var i = 0; i <= 50; i++) 
					{
						var xP = 2 * Math.cos(angle/360+0) ;
						var yP = 2 * Math.sin(angle/360+0) ;

						angle += 45;
						
						CreateObj({color:RED_COLOR,density:10,type:"static" , shape:"circle" , x:xP+(HomePos.x/ScaleFactor+7)  , y:yP+(HomePos.y/ScaleFactor-3),radius:0.1});
					}*/

					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:HomePos.x/ScaleFactor  , y:HomePos.y/ScaleFactor-12,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:HomePos.x/ScaleFactor  , y:HomePos.y/ScaleFactor-8,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:HomePos.x/ScaleFactor , y:HomePos.y/ScaleFactor-5 ,radius:0.5,restitution:0,friction:0});

			  },
			  startCollide:function(contact)
			  {
					if(!this.btn_1_Pressed && contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_1")
					{
						this.btn_1_Pressed = true;
						
						
						playSound("InGameButton");
					}
					else
					if(!this.btn_2_Pressed &&contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_2")
					{
						this.btn_2_Pressed = true;
						playSound("InGameButton");
					}
					else
					if(!this.btn_3_Pressed &&contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_3")
					{
						this.btn_3_Pressed = true;
						playSound("InGameButton");
					}
					else
					if(!this.btn_4_Pressed &&contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_4")
					{
						this.btn_4_Pressed = true;
						playSound("InGameButton");
					}
					else
					if(!this.btn_5_Pressed &&contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_5")
					{
						this.btn_5_Pressed = true;
						playSound("InGameButton");
					}
					else
					if(!this.btn_6_Pressed &&contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name == "btn_6")
					{
						this.btn_6_Pressed = true;
						playSound("InGameButton");
					}
					
					
					if(this.btn_1_Pressed && this.btn_2_Pressed)
					{
						destroyBody(this.obs_1,100);
						this.obs_1 = null;
					}
					
					if(this.btn_4_Pressed && this.btn_3_Pressed)
					{
						destroyBody(this.obs_2,100);
						this.obs_2 = null;
					}
					
					if(this.btn_6_Pressed && this.btn_5_Pressed)
					{
						destroyBody(this.obs_3,100);
						this.obs_3 = null;
					}
			  },
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					drawButton(this.btn_1,this.btn_1_Pressed , false );
				   	drawButton(this.btn_2,this.btn_2_Pressed , true);
					
					drawButton(this.btn_3,this.btn_3_Pressed , false);
				   	drawButton(this.btn_4,this.btn_4_Pressed , true);
					
					drawButton(this.btn_5,this.btn_5_Pressed , false);
				   	drawButton(this.btn_6,this.btn_6_Pressed , true);


				    if(isMouseDown)
					{
						var firstMX2 =  canvasWidth/2 - (firstMX - canvasWidth/2  );
						var mouseX2 =  canvasWidth/2 - (mouseX - canvasWidth/2  );

						ctx.beginPath();
							ctx.moveTo(firstMX2 , firstMY);
							ctx.lineTo(mouseX2 , mouseY);
						ctx.closePath();
						ctx.stroke();
						
						ctx.drawImage(OtherParentImg, mouseX2-ScaleFactor*1.2/2,mouseY-ScaleFactor*1.2/2 , ScaleFactor*1.2,ScaleFactor*1.2);
					}
			  },
			  canvasDrawForground: function()
			  {
				    ctx.fillStyle= "#D8EFF7";
					ctx.fillRect(HomePos.x-40 , HomePos.y-50 , 483*0.13,408*0.13);
					
					ctx.drawImage(this.HomeImage, HomePos.x-60,HomePos.y-86 , 483*0.25,408*0.25);
					
					


			  },
			  CreateOtherParent: function()
			  {
				//  var firstMX2 =  canvasWidth/2 - (firstMX - canvasWidth/2  );
				  var mouseX2 =  canvasWidth/2 - (mouseX - canvasWidth/2  );
					
				  var FX = 30 * ( mouseX - firstMX );
                  var FY = -30 * ( mouseY - firstMY );

				  var otherParent = CreateObj({image:OtherParentImg,categoryBits:0x0040,maskBits:0xFFFF & ~0x8000  ,name:"Parent",color:'rgba(0, 0, 255, 0.5)',density:3,type:"dynamic" , shape:"circle" , x : mouseX2/ScaleFactor , y : mouseY/ScaleFactor ,radius:0.6});
                  otherParent.ApplyForce(new b2Vec2(FX, FY),otherParent.GetWorldCenter());
			  }	 			  
		}
		Level_3_2.startLevel();
		
		