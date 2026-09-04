var Level_1_8 = {
	
			qtar : null,
			IsHit : false,
			timerSpeed:0.04,
			
			part_1_qtar:null,
			part_2_qtar:null,
			part_3_qtar:null,
			
			assa_1:null,
			assa_2:null,
			
			dfghyt:null,

			IsPiece_1_Placed:false,
			IsPiece_2_Placed:false,
			IsPiece_3_Placed:false,
			
			arabaImage:null,
			IsFullHouse:false,
			IsCreated:false,

			startLevel: function() 
			{			
					numOfBalls = 5;
					HomePos = {"x": (canvasWidth/2.0)-280, "y":canvasHeight-55};
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

				numOfBalls = 5;
				sandLevel = 0;	
				this.IsHit = false;	
				this.qtar = null;	
				
				this.IsPiece_1_Placed = false;
				this.IsPiece_2_Placed = false;
				this.IsPiece_3_Placed = false;
				
				this.IsCreated = false;
				this.IsFullHouse = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.arabaImage = new Image();
					this.arabaImage.src = "images/Home_parts.png";
					
				    var MainPosX = (canvasWidth/2.0)/ScaleFactor;
				    var MainPosY = (canvasWidth/2.0)/ScaleFactor;
				   
				    goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false , 0x0400);
					CreateFloor(false);
				  
				    this.part_1_qtar = LoopOverObj(Level1_8.Home_Left , '#07b3ff', MainPosX-5 , 9 ,1.0 , "kin", 50 , true , 0 ,"Part_1" );
					this.part_2_qtar = LoopOverObj(Level1_8.Home_Right , '#ff7aa3', MainPosX+2 , 9 ,1.0 , "kin" , 50 , true , 0 ,"Part_2" );
					
					this.part_3_qtar = LoopOverObj(Level1_8.Home_Top , '#80dd37', MainPosX-3 , 4 ,1.0 , "kin" , 100 , true , 0 ,"Part_3" );

					
					//  var ttt = LoopOverObj(Level1_8.Home_Top , GREY_COLOR, MainPosX-3 , 4 ,1.0 , "dynamic" , 0 , true , 0 ,"Part_3" );
					//  createRevoluteJoint(this.part_3_qtar  , ttt , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);

					//  this.part_1_qtar = CreateObj({name:"Part_1",color:GREY_COLOR,type: "kin" ,density:50 , fixedAngle:true, shape:"box" ,x:MainPosX-3 , y:11 , width:1.3 , height:2.5});
						
					//  this.part_2_qtar = CreateObj({name:"Part_2",color:GREY_COLOR,type: "kin" ,density:50 , fixedAngle:true, shape:"box" ,x:MainPosX+3 , y:11 , width:1.3 , height:2.5});
					//  this.part_3_qtar = CreateObj({name:"Part_3",color:GREY_COLOR,type: "kin" ,density:50 , fixedAngle:true, shape:"box" ,x:MainPosX+0 , y:8  , width:1.3 , height:2.5});

					//	CreateObj({name:"asay",color:GREY_COLOR,type: "dynamic" , shape:"box" ,x:MainPosX , y:14 , width:6.5 , height:1.5 });
					//	CreateObj({name:"asay",color:GREY_COLOR,type: "dynamic" , shape:"box" ,x:MainPosX , y:13 , width:2.5 , height:0.5 });

					this.dfghyt = CreateObj({density:150 ,maskBits:(0xFFFF & ~0x0400 ) ,name:"asay",color:null,type: "dynamic" , shape:"complex" ,x:MainPosX , y:13.75 , Shapes:[{color:GREY_COLOR , shape:"box" , width:6.2 , height:1.0 } , {color:GREY_COLOR , shape:"box" , width:2.9 , height:1.5 }] });

					this.assa_1 = CreateObj({name:"asay",fixedAngle:true,color:null,type: "static" , shape:"box" ,x:MainPosX , y:11 , width:0.07 , height:1.8 });
					this.assa_2 = CreateObj({name:"asay",density:10,color:null,fixedAngle:true ,type: "dynamic" , shape:"box" ,x:MainPosX , y:10.6 , width:0.07 , height:2.8});
					createRevoluteJoint(this.assa_1 , this.assa_2 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 0 , 0);
					
					
					//Childs
					var myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',categoryBits:0x0002 , maskBits:(0xFFFF & ~0x0004 & ~0x0006 & ~0x0040),image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor-0.5, y :12,radius:0.5,restitution:0,friction:0}); 
										
					var myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',categoryBits:0x0004 , maskBits:(0xFFFF & ~0x0002 & ~0x0006 & ~0x0040),image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor, y :12 ,radius:0.5,restitution:0,friction:0});
				
					var myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',categoryBits:0x0006 , maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0040),image:myImage,color:'blue',density:4,type:"dynamic" , shape:"circle" ,  x : (canvasWidth/2.0)/ScaleFactor+0.5, y :12,radius:0.5,restitution:0,friction:0});				
	 
			  },
			  startCollide:function(contact)
			  {
				    if(contact.GetFixtureA().GetBody().details.name.indexOf("Part") != -1 && contact.GetFixtureB().GetBody().details.name.indexOf("Parent") != -1 )
					{
						playSound("Hit_Lego");
					}
					else
					if(contact.GetFixtureA().GetBody().details.name.indexOf("Part") != -1 && contact.GetFixtureB().GetBody().details.name == "asay" )
					{
						switch(contact.GetFixtureA().GetBody().details.name)
						{
							case "Part_1":
								this.IsPiece_1_Placed = true;
							break;
							case "Part_2":
								this.IsPiece_2_Placed = true;
							break;
							case "Part_3":
								this.IsPiece_3_Placed = true;
							break;
						}
						
						//setTimeout(Level_1_8.checkToTransform , 100);
						this.checkToTransform();
						contact.GetFixtureA().GetBody().SetLinearVelocity(new b2Vec2(0,0));	
					}
					else
					if (contact.GetFixtureB().GetBody().details.name.indexOf("Part") != -1 && contact.GetFixtureA().GetBody().details.name == "asay")
					{
						switch(contact.GetFixtureB().GetBody().details.name)
						{
							case "Part_1":
								this.IsPiece_1_Placed = true;
							break;
							case "Part_2":
								this.IsPiece_2_Placed = true;
							break;
							case "Part_3":
								this.IsPiece_3_Placed = true;
							break;
						}
						
						//setTimeout(Level_1_8.checkToTransform , 100);
						this.checkToTransform();
						contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
					}
			  },
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
				    if(this.IsFullHouse)
				  	    ctx.drawImage(this.arabaImage, Level_1_8.part_1_qtar.GetPosition().x*ScaleFactor ,Level_1_8.part_1_qtar.GetPosition().y*ScaleFactor , 201,197);

					ctx.fillStyle= ORANGE_COLOR;
				   
				    ctx.fillRect(Level_1_8.dfghyt.GetPosition().x*ScaleFactor-45 , Level_1_8.dfghyt.GetPosition().y*ScaleFactor-20 , 90 , 12);
				   
					drawMe7bas(new b2Vec2( Level_1_8.dfghyt.GetPosition().x-2 , Level_1_8.dfghyt.GetPosition().y+0.4 )  , false);
					drawMe7bas(new b2Vec2( Level_1_8.dfghyt.GetPosition().x+2 , Level_1_8.dfghyt.GetPosition().y+0.4 )  , false);
			  },
			  checkToTransform: function()
			  {
					if(!this.IsCreated && this.IsPiece_1_Placed && this.IsPiece_2_Placed && this.IsPiece_3_Placed)  //  this.part_3_qtar
					{
						destroyBody(this.part_1_qtar , 50); // // maskBits:(0xFFFF & ~0x0400) , 
						
						setTimeout(function()
						{
							Level_1_8.part_1_qtar = LoopOverObj(Level1_8.Home_parts , null, Level_1_8.assa_2.GetPosition().x -3.4, Level_1_8.assa_2.GetPosition().y-4 ,1.0 , "dynamic", 20 , true , 0 ,"Parts" ,(0xFFFF & ~0x0400));
							Level_1_8.IsFullHouse = true;
							
							Level_1_8.dfghyt.SetLinearVelocity( new b2Vec2(-0.3 , 0));

							setTimeout(function()
							{
								Level_1_8.dfghyt.SetLinearVelocity( new b2Vec2(-10 , 0));
							},1200);
						},150);
						
						destroyBody(this.part_2_qtar , 50); // //
						destroyBody(this.part_3_qtar , 50); // //
						destroyBody(this.assa_1 , 40); 		// //
						destroyBody(this.assa_2 , 40); 		// //
						
						this.IsCreated = true;
					}
			  }
		}
		Level_1_8.startLevel();