var Level_3_8 = {
			timerSpeed:0.01,
			timer:0,
			
			arr_XForces:[1300,900,550],
			arr_YForces:[-3200,0,-2500],
			IsJumpForword:true,
			counter:0,
			
			posOfSpike:null,
			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+310, "y":canvasHeight-57};
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
				this.timer++;
				
				if(this.timer % 100 == 0)
				{
					this.counter++;
					if(this.IsJumpForword)
					{
						if(this.counter>=3)
						{
							this.IsJumpForword = false;
							this.arr_XForces[0] *= -1;
							this.counter = 0;
						}
					}
					else
					{
						if(this.counter>=1)
						{
							this.IsJumpForword = true;
							this.arr_XForces[0] *= -1;
							this.counter = 0;
						}
					}
						
					//alert();
					if(child_1)
						child_1.ApplyForce(new b2Vec2(this.arr_XForces[0],this.arr_YForces[0]) , child_1.GetWorldCenter() );
				}
				
				if(this.timer % 400 == 0)
				{
					if(child_2)
						child_2.ApplyForce(new b2Vec2(this.arr_XForces[1],this.arr_YForces[1]) , child_2.GetWorldCenter() );
				}
				
				if(this.timer % 80 == 0)
				{
					if(child_3)
						child_3.ApplyForce(new b2Vec2(this.arr_XForces[2],this.arr_YForces[2]) , child_3.GetWorldCenter() );
				}
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
					 
					  CreateFloor();

					  //createSpikesBox((canvasWidth/2.0)/ScaleFactor-4 , 3 , 1);
					  
					  CreateObj( { color:GREY_COLOR,type: "static" , shape:"box" ,x:1.5, y:13 , width:4 , height:5 } );

					  
					  //Childs
					  var myImage = new Image();
					  myImage.src = 'images/Kid_1.png';
					  child_1 = CreateObj({name:'child_1',categoryBits:0x0002 , maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 3.8 , y :canvasHeight/ScaleFactor-1,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_2.png';
					  child_2 = CreateObj({name:'child_2',categoryBits:0x0004 ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 2.5 , y :canvasHeight/ScaleFactor-5 ,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_3.png';
					  child_3 = CreateObj({name:'child_3',categoryBits:0x0006 ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 ),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 3.8 , y :canvasHeight/ScaleFactor-1,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
				  if(  contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1  )
				  {
					   //alert();
					   contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
				  }
				  
				  if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) || (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
				  {
						setTimeout(Level_3_8.CreateShok,200);
						
						Level_3_8.posOfSpike = contact.GetFixtureB().GetBody().GetPosition();
						//this.CreateShok();
				  }
			  },
			  CreateShok:function()
			  {
				  createSpikesBox(Level_3_8.posOfSpike.x , Level_3_8.posOfSpike.y , 1);
				  
			  },
			  
			  checkIfWin: function()
			  {
				  //alert();
					//if()
			  }
		}
		Level_3_8.startLevel();
		
		