var Level_5_9= {
			timerSpeed:0.075,

			HomeImage:null,
			
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			Image_1:null,
			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": -200, "y":-200};
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
				
				
				this.glass_1 = null;
				this.glass_2 = null;
				this.glass_3 = null;

				numOfBalls = 3;
				sandLevel = 0;	
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  
				    this.Image_1 = new Image();
					this.Image_1.src = "images/glass_block.png";
					
					
				    this.HomeImage = new Image();
				    this.HomeImage.src = "images/big_home.png";
					
					
					
					
					//goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
			
					CreateFloor(false);
					
					
					this.glass_1 = LoopOverObj(Level4_1.glass_block , null, 8 , 12 ,0.9 , "static",50);
					this.glass_2 = LoopOverObj(Level4_1.glass_block , null, 15.5 , 12 ,0.9 , "static",50);
					this.glass_3 = LoopOverObj(Level4_1.glass_block , null, 8 , 5  ,0.9 , "static",50);

					

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x :9.5 , y :13.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : 17  , y :13.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : 9.5 , y : 6.5,radius:0.5,restitution:0,friction:0});
			  },
			  endCollide:function(contact,impulse)
			  {
					if(contact.GetFixtureB().GetBody().details.name == "Parent")// && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1)
					{	
						if(contact.GetFixtureA().GetBody() == this.glass_1)
						{
							setTimeout(function(){
								child_1.ApplyForce(new b2Vec2(-3000,0) , child_1.GetWorldCenter());
															numOfChildsEnter++;

							},100)
							
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);

							destroyBody(this.glass_1 , 100);
							this.glass_1 = null;
							
							playSound("Glass");
							
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_2)
						{
							setTimeout(function(){
								child_2.ApplyForce(new b2Vec2(3000,-1000) , child_2.GetWorldCenter());
								numOfChildsEnter++;

							},100)
						
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
			
							destroyBody(this.glass_2 , 100);
							this.glass_2 = null;
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_3)
						{
							setTimeout(function(){
								child_3.ApplyForce(new b2Vec2(-3000,-1000) , child_3.GetWorldCenter());
								numOfChildsEnter++;

							},100)
							

							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
		
							destroyBody(this.glass_3 , 100);
							this.glass_3 = null;
							
							playSound("Glass");
						}
					}
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
			  		  ctx.drawImage(this.HomeImage ,140, 50 , 116*4.5,97*4.5);
					
					
					  if(this.glass_1)
					  {
							ctx.drawImage(this.Image_1, this.glass_1.GetPosition().x*ScaleFactor , this.glass_1.GetPosition().y*ScaleFactor, 107*0.85 , 107*0.9 );
					  }
					  
					  if(this.glass_2)
					  {
							ctx.drawImage(this.Image_1, this.glass_2.GetPosition().x*ScaleFactor , this.glass_2.GetPosition().y*ScaleFactor, 107*0.85 , 107*0.9 );
					  }
					  
					  if(this.glass_3)
					  {
							ctx.drawImage(this.Image_1, this.glass_3.GetPosition().x*ScaleFactor , this.glass_3.GetPosition().y*ScaleFactor, 107*0.85 , 107*0.9 );
					  }

			  }
			  
			  
			  

		}
		Level_5_9.startLevel();
		
		