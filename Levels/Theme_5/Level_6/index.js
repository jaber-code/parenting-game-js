var Level_5_6 = {
			timerSpeed:0.02,

			ParentVel:{"x":0,"y":0},
			childToMove:null,
			
			Is_Moved:false,
			

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
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor(false);
					
					createSpikesBox(canvasWidth/2/ScaleFactor , 3 , 1);
					createSpikesBox(canvasWidth/2/ScaleFactor+8 , 3 , 1);
					createSpikesBox(canvasWidth/2/ScaleFactor-8 , 3 , 1);
									
					
					
					LoopOverObj(Level5_6.shp1 ,GREY_COLOR,1 ,6, 1, "static" , 10,true,0x0000,"noth");
					LoopOverObj(Level5_6.shp2 ,GREY_COLOR,5 ,3, 1, "static" , 10,true,0x0000,"noth");

					//LoopOverObj(Level5_6.shp3 ,GREY_COLOR,15 ,8.5, 1, "static" , 10,true,0x0000,"noth");
					LoopOverObj(Level5_6.shp4 ,GREY_COLOR,21.5 ,8.5, 1, "static" , 10,true,0x0000,"noth");

					LoopOverObj(Level5_6.shp5 ,GREY_COLOR,7 ,5, 1, "static" , 10,true,0x0000,"noth");
					LoopOverObj(Level5_6.shp2 ,GREY_COLOR,14 ,3, 1, "static" , 10,true,0x0000,"noth");
					
					
					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 16, y :5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x :8  , y :5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 21.3, y : 11,radius:0.5,restitution:0,friction:0});		
					
			  },
			  startCollide:function(contact)
			  {
				  if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1))
				  {
					  this.ParentVel.x = parentBody.m_linearVelocity.x;
					  this.ParentVel.y = parentBody.m_linearVelocity.y;
					  
					  
					  
					 // alert(parentBody.m_linearVelocity.x + "    " + parentBody.m_linearVelocity.y);
				  }
					  
					  
			  },
				endCollide:function(contact,impulse)
				{
					
					  if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1))
					  {
						  //alert(impulse.normalImpulses);
						  	var magnitude = Math.sqrt(impulse.normalImpulses[0] * impulse.normalImpulses[0] + impulse.normalImpulses[1] * impulse.normalImpulses[1]);

							Level_5_6.childToMove = contact.GetFixtureB().GetBody();
							//alert(Level_5_6.childToMove.details.name);
							Level_5_6.childToMove.SetLinearVelocity(new b2Vec2(0,0));

							if(!Level_5_6.Is_Moved)
								setTimeout(Level_5_6.ChildReaction,150)
						
							Level_5_6.Is_Moved = true;
							
							destroyBody(parentBody , 100);


						
					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
					  {
						  	var magnitude = Math.sqrt(impulse.normalImpulses[0] * impulse.normalImpulses[0] + impulse.normalImpulses[1] * impulse.normalImpulses[1]);

							
					  }
					
					
				},
				ChildReaction:function()
				{
					//Level_5_6.childToMove.SetLinearVelocity(new b2Vec2(0,0));
					
					Level_5_6.Is_Moved = false;
					Level_5_6.childToMove.ApplyForce(new b2Vec2(-Level_5_6.ParentVel.x*150,-Level_5_6.ParentVel.y*150) , Level_5_6.childToMove.GetWorldCenter());

					
				},
			  canvasDrawForground: function()
			  {

			  },
			  canvasDraw: function()
			  {
				
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_5_6.startLevel();
		
		