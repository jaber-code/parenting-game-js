var Level_1_11 = {
			timerSpeed:0.03,
			
			arr_Circles:[],
			arr_Ropes:[null],
			arr_Kotal:[null],
			
			machine_1_in : false,
			machine_2_in : false,
			machine_3_in : false,
			
			asa_1:null,
			asa_2:null,
			asa_3:null,
			
			BedImg:null,
			BasePos:null,
			
			BGImage:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,

			endTimerId:0,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = null;
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
				if(this.asa_1)
				{
					if ( this.asa_1.GetPosition().x > 20)
						this.asa_1.SetLinearVelocity( new b2Vec2(-3 , 0) );
					else
					if ( this.asa_1.GetPosition().x < 2)
						this.asa_1.SetLinearVelocity( new b2Vec2(3 , 0) );
				}
				
				if(this.asa_2)
				{
					if ( this.asa_2.GetPosition().x > 20)
						this.asa_2.SetLinearVelocity( new b2Vec2(-4 , 0) );
					
					if ( this.asa_2.GetPosition().x < 2)
						this.asa_2.SetLinearVelocity( new b2Vec2(4 , 0) );
				}
				
				if(this.asa_3)
				{
					if ( this.asa_3.GetPosition().x > 20)
						this.asa_3.SetLinearVelocity( new b2Vec2(-4.5 , 0) );
					
					if ( this.asa_3.GetPosition().x < 2)
						this.asa_3.SetLinearVelocity( new b2Vec2(4.5, 0) );
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();
				
				clearTimeout(this.endTimerId);
				
				this.arr_Ropes = [null];
				this.arr_Kotal = [null];
				this.arr_Circles = [];
				
				this.machine_1_in = false;
				this.machine_2_in = false;
				this.machine_3_in = false;
				
				
				this.finishLevel = false;

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  this.BedImg = new Image();
				  this.BedImg.src = "images/Bed.png";
				  
				  this.BGImage = new Image();
				  this.BGImage.src = 'images/Sky_flowting_Parantes.png';
				  
				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				  
				  var obj1; 
				  var obj2; 
				  
				  drawCirclePath(MainPosX , MainPosY+1.8 ,0.9,0.70 ,24, 6.35, '#A020F0', "Container_1",3.5 , "static");
				  drawCirclePath(MainPosX + 1.9 ,MainPosY+1.8 ,0.9,0.70 ,24, 6.35, '#A020F0', "Container_2",3.5 , "static");
				  drawCirclePath(MainPosX - 1.9 ,MainPosY+1.8 ,0.9,0.70 ,24, 6.35, '#A020F0', "Container_3",3.5 , "static");
				  
				  CreateObj({name:"place_1", color: null,type: "static" , shape:"circle" ,x:MainPosX+2  , y:MainPosY+2.49 , radius:0.1 });
				  CreateObj({name:"place_2",color: null,type: "static" , shape:"circle" ,x:MainPosX-2  , y:MainPosY+2.49 , radius:0.1 });
				  CreateObj({name:"place_3",color: null,type: "static" , shape:"circle" ,x:MainPosX    , y:MainPosY+2.49 , radius:0.1 });
												
				  this.asa_1 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX-8  , y:5 , width:4 ,height:0.4 });
				  this.asa_2 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX-1  , y:6.5 , width:4 ,height:0.4 });
				  this.asa_3 = CreateObj({color:ORANGE_COLOR,fixedAngle:true,type: "kin" ,density:9999, shape:"box" ,x:MainPosX+7  , y:8 , width:4 ,height:0.4 });

				  this.asa_1.SetLinearVelocity(  new b2Vec2(-3 , 0)  );
				  this.asa_2.SetLinearVelocity(  new b2Vec2(-4 , 0)  );
				  this.asa_3.SetLinearVelocity(  new b2Vec2(-4.5 , 0)  );
				  //CreateObj({categoryBits:0x0200, color:GREY_COLOR,isStroke:true, lineThickness:2,type: "static" , shape:"edge" ,x:-1  , y:0 , vertices:[[0,1],[30,1]] });
	
					  var myImage = new Image();
					  myImage.src = 'images/I_1.png';
						
					  obj1 = CreateObj({color:null,type: "static" , shape:"circle" ,x:MainPosX  , y:0 , radius:1 });
					  obj2 = CreateObj({image:myImage,name:"circle_1",density:0,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:MainPosX  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  this.arr_Ropes[1] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
					var myImage = new Image();
					myImage.src = 'images/I_2.png';
					
					obj1 = CreateObj({color:null,type: "static" , shape:"circle" ,x:MainPosX + 1.9 , y:0 , radius:1 });
					obj2 = CreateObj({image:myImage,name:"circle_2",density:0,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:MainPosX + 1.9  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  this.arr_Ropes[2] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);
				
				
					var myImage = new Image();
					myImage.src = 'images/I_3.png';
					
					obj1 = CreateObj({color:null ,type: "static" , shape:"circle" ,x:MainPosX - 1.9  , y:0 , radius:1 });
					obj2 = CreateObj({image:myImage,name:"circle_3",density:0,color:'#98fb98',fixedAngle:true ,type: "dynamic" , shape:"circle" ,x:MainPosX - 1.9  , y:2 , radius:0.65,restitution:0,friction:0});
				  this.arr_Circles.push(obj1);
				  this.arr_Kotal.push(obj2);
				  this.arr_Ropes[3] = createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,3) , new b2Vec2(0,0) , false , 0 , 0,ORANGE_COLOR);

				  
				  CreateObj( { color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+4.6 , width:0.2 , height:4 } );
				  CreateObj( { color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+3.6 , width:5 , height:0.4 } );
				  
				  CreateObj( { color:null,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+5.5 , width:7 , height:2.0 } );
				  var temp = CreateObj({ color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+7.8 , width:10 , height:4.0 });

				  this.BasePos = temp.GetPosition();
			  },
			  startCollide:function(contact)
			  {
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("circle") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("circle_",""));

							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if( (contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("circle") != -1) )
					  {
							var num = parseInt(contact.GetFixtureB().GetBody().details.name.replace("circle_",""));

							//destroyBody(this.arr_Ropes[num],0);
							destroyBody(this.arr_Circles[num-1],50);
							//world.DestroyJoint(this.arr_Ropes[num]);
					  }
					  else
					  if((contact.GetFixtureA().GetBody().details.name.indexOf("circle") != -1 && contact.GetFixtureB().GetBody().details.name.indexOf("place") !=-1)  )
					  {
							var num = parseInt(contact.GetFixtureA().GetBody().details.name.replace("circle_",""));

							//destroyBody(contact.GetFixtureB().GetBody(),0);
							//alert(num);
							contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
							
							destroyBody(contact.GetFixtureB().GetBody() , 100);
							switch(num)
							{
								case 1:

									this.machine_1_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));
								break;
								case 2:

									this.machine_2_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));
								break;
								case 3:

									this.machine_3_in = true;
									//child_1.SetLinearVelocity(new b2Vec2(2000, 0));
								break;
							}
							
							if(this.machine_1_in && this.machine_2_in && this.machine_3_in)
							{
								numOfChildsEnter = 3;
								
								this.finishLevel = true;
								playSound("EndBonus");
								
								this.endTimerId = setTimeout(endLevel , 2000);
								//endLevel();
							}
					  }
			  },
			  checkIfWin: function()    
			  {
					if(!this.finishLevel && numOfBalls == 0) 
					{
						var Is_1_Imp = false;
						var Is_2_Imp = false;
						var Is_3_Imp = false;
						
						if( Math.abs(this.arr_Kotal[1].m_linearVelocity.y) <  0.01)   
						{
							Is_1_Imp = true;
						}
						
						if( Math.abs(this.arr_Kotal[2].m_linearVelocity.y) <  0.01)   
						{
							Is_2_Imp = true;
						}
						
						if( Math.abs(this.arr_Kotal[3].m_linearVelocity.y) <  0.01)   
						{
							Is_3_Imp = true;
						}
							
						if(Is_1_Imp || Is_2_Imp || Is_3_Imp)
							endLevel();
					}
			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes
					ctx.drawImage(this.BedImg, this.BasePos.x * ScaleFactor-112, this.BasePos.y * ScaleFactor-160, 170*1.3,79*1.3);
			  },
			  canvasDrawForground: function()
			  {
				  if(this.finishLevel)
					 this.winLevel();
				
				  ctx.drawImage(OtherParentImg, this.BasePos.x * ScaleFactor-40, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);
			  },
			  winLevel: function()
			  {
					 if(this.heartSize > 1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize <0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc;
					 
					 ctx.drawImage(SelectedParentImg, this.BasePos.x * ScaleFactor+0, this.BasePos.y * ScaleFactor-130, 0.59*60.0 , 0.59*60.0);
				
					 ctx.save(); 
						ctx.translate(this.BasePos.x * ScaleFactor-17+10, this.BasePos.y * ScaleFactor-160+10);
						ctx.scale( this.heartSize, this.heartSize);

						ctx.translate(-(this.BasePos.x * ScaleFactor-17+10), -(this.BasePos.y * ScaleFactor-160+10));
						
						ctx.drawImage(hartImg, this.BasePos.x * ScaleFactor-17, this.BasePos.y * ScaleFactor-160, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }
		}
		Level_1_11.startLevel();