var Level_4_6 = {
			timerSpeed:0.01,
			
			HomeImage:null,
			
			mes3ad:null,
			
			Mes3dState:"Stop", //MovingUp  MovingDown
			
			currentChild:null,
			
			img_1:null,
			
			img_2:null,
			img_3:null,
			img_4:null,
			
			time_ID_1:0,
			time_ID_2:0,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+300, "y":canvasHeight-340};
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
				if(Level_4_6.mes3ad.GetPosition().y < HomePos.y/ScaleFactor-0.5)
				{
					if(Level_4_6.Mes3dState == "MovingUp")
					{
						Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0,0));

						this.time_ID_1 = setTimeout(function(){
							
							Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0, 3));
							
						},600)
						Level_4_6.Mes3dState = "MovingDown";

						if(Level_4_6.currentChild)
						{
							if(Level_4_6.currentChild.GetPosition().y < Level_4_6.mes3ad.GetPosition().y)
								Level_4_6.currentChild.SetLinearVelocity(new b2Vec2(5, 0));
						}
					}
				}
				else
				if(Level_4_6.mes3ad.GetPosition().y > HomePos.y/ScaleFactor+9.0)
				{
					if(Level_4_6.Mes3dState == "MovingDown")
					{
						Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0,0));

						this.time_ID_2 = setTimeout(function(){
							Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0, -2.5));
						},600)
						
						Level_4_6.Mes3dState = "MovingUp";
					}
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				numOfBalls = 3;
				sandLevel = 0;	
				
				this.currentChild = null;
				
				clearTimeout(this.time_ID_1);
				clearTimeout(this.time_ID_2);
				
				this.Mes3dState = "Stop";
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.img_1 = new Image();
				    this.img_1.src = "images/Father_Speak.png";
					
					this.img_2 = new Image();
				    this.img_2.src = "images/Green_Kid_Speak.png";
					
					this.img_3 = new Image();
				    this.img_3.src = "images/Blue_Kid_Speak.png";   
					
					this.img_4 = new Image();
				    this.img_4.src = "images/Pink_Kid_Speak.png";
					
					
				  	var MainPos = {"x":canvasWidth/2/ScaleFactor  ,"y":canvasHeight/2/ScaleFactor };

				    this.HomeImage = new Image();
				    this.HomeImage.src = "images/Home_empty.png";
				  
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					
					CreateFloor(true);
					
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPos.x/ScaleFactor+7 , y:MainPos.y/ScaleFactor+15 , width:16,height:5 });
					CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor , y:MainPos.y/ScaleFactor+11.3 , width:3.8,height:12 });
					
					
					//CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:HomePos.x/ScaleFactor -7, y:HomePos.y/ScaleFactor , width:0.4,height:0.4 });


					this.mes3ad = CreateObj({allowSleep:false , awake:true , name:"mes3ad",fixedAngle:true,density:1500,color:ORANGE_COLOR,type: "kin" , shape:"box" ,x:MainPos.x/ScaleFactor+18  , y:MainPos.y/ScaleFactor+7 , width:5.0 , height:0.5});

					Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0, 2.0));
					this.Mes3dState = "MovingDown";


				    myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:MainPos.x/ScaleFactor+7  , y:MainPos.y/ScaleFactor+9,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:MainPos.x/ScaleFactor+3  , y:MainPos.y/ScaleFactor+9,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:MainPos.x/ScaleFactor+11 , y:MainPos.y/ScaleFactor+9 ,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
				  if( (contact.GetFixtureA().GetBody().details.name == "mes3ad" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1))
				  {
					  //if(this.Mes3dState == "Stop")
					  //{
						    this.currentChild = contact.GetFixtureB().GetBody();
							//setTimeout(this.moveUp , 1000);
							//this.Mes3dState = "MovingUp";
					 // }
				  }
				  else
				  if( (contact.GetFixtureB().GetBody().details.name == "mes3ad" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
				  {
					  //if(this.Mes3dState == "Stop")
					  //{
						  	this.currentChild = contact.GetFixtureA().GetBody();
							//setTimeout(this.moveUp , 1000);
							//this.Mes3dState = "MovingUp";
					  //}
				  }	
			  },
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
				  
					  if(this.currentChild  &&  this.currentChild.GetPosition().y < this.mes3ad.GetPosition().y)
					  {

							switch(this.currentChild.details.name)
							{
								case "child_1":
								
									if(child_1)
										ctx.drawImage(this.img_2, this.currentChild.GetPosition().x*ScaleFactor-20,this.currentChild.GetPosition().y*ScaleFactor-80 , 104*0.5,105*0.5);

								break;
								case "child_2":
								
									if(child_1)
										ctx.drawImage(this.img_3, this.currentChild.GetPosition().x*ScaleFactor-20,this.currentChild.GetPosition().y*ScaleFactor-80 , 104*0.5,105*0.5);

								break;							
								case "child_3":
								
									if(child_3)
										ctx.drawImage(this.img_4, this.currentChild.GetPosition().x*ScaleFactor-20,this.currentChild.GetPosition().y*ScaleFactor-80 , 104*0.5,105*0.5);

								break;
							}
							
							ctx.drawImage(this.img_1, this.mes3ad.GetPosition().x*ScaleFactor-30,this.mes3ad.GetPosition().y*ScaleFactor-100 , 83*0.7,84*0.7);
					  }

			  },
			  canvasDrawForground: function()
			  {
				    ctx.fillStyle= "#D8EFF7";
					ctx.fillRect(HomePos.x-40 , HomePos.y-50 , 483*0.13,408*0.13);
					
					ctx.drawImage(this.HomeImage, HomePos.x-60,HomePos.y-86 , 483*0.25,408*0.25);
					ctx.drawImage(OtherParentImg, this.mes3ad.GetPosition().x * ScaleFactor-50,this.mes3ad.GetPosition().y*ScaleFactor-55 , 120*0.4,120*0.4);
			  },
			  moveUp: function()
			  {
				   	Level_4_6.mes3ad.SetLinearVelocity(new b2Vec2(0, -1.5));
			  }
			 			  
		}
		Level_4_6.startLevel();