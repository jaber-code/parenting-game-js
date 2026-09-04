var Level_2_2 = {
			timerSpeed:0.04,
			obs1 : null,
			obs2 : null,
			obs3 : null,
			  
			isDestroying : false,
	  
	  
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-58};
					RestrictedArea = {"x": HomePos.x-100, "y":0 , "w":215 ,"h":480 ,"op":0.2};

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
				    if(this.obs1.GetPosition().x > HomePos.x/ScaleFactor +1)
							this.obs1.SetLinearVelocity(new b2Vec2(-1.5,0));
								  
					if(this.obs1.GetPosition().x < HomePos.x/ScaleFactor -0.6)
						this.obs1.SetLinearVelocity(new b2Vec2(1.5,0));
					
					
					if(this.obs2.GetPosition().x > HomePos.x/ScaleFactor +1)
						this.obs2.SetLinearVelocity(new b2Vec2(-1.5,0));
							  
					if(this.obs2.GetPosition().x < HomePos.x/ScaleFactor -0.6)
						this.obs2.SetLinearVelocity(new b2Vec2(1.5,0));
					
					
					if(this.obs3.GetPosition().x > HomePos.x/ScaleFactor +1)
						this.obs3.SetLinearVelocity(new b2Vec2(-1.5,0));
							  
					if(this.obs3.GetPosition().x < HomePos.x/ScaleFactor -0.6)
						this.obs3.SetLinearVelocity(new b2Vec2(1.5,0));
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				numOfBalls = 3;
				sandLevel = 0;	
				this.isDestroying = false;
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					var myImage = new Image();
					myImage.src = 'images/dest1.png';
					this.obs1 = CreateObj({image:myImage,name:"obstacle1",density:9999,color:'blue',fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor+0.0, y:5.5, width:3.3 , height:1.134375}); 

					myImage = new Image();
					myImage.src = 'images/dest2.png';			
					this.obs2 = CreateObj({image:myImage,name:"obstacle2",density:9999,color:'red',fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor+0.4, y:7.7, width:3.3 , height:1.134375}); 	

					myImage = new Image();
					myImage.src = 'images/dest3.png';			
					this.obs3 = CreateObj({image:myImage,name:"obstacle3",density:9999,color:'green',fixedAngle:true ,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor+0.0, y:9.9, width:3.3 , height:1.134375});

					
					this.obs1.SetLinearVelocity(new b2Vec2(-1.5,0));
					this.obs2.SetLinearVelocity(new b2Vec2(1.5,0));
					this.obs3.SetLinearVelocity(new b2Vec2(-1.5,0));

					//goal = CreateObj({name:"Goal",density:10,color:'white',fixedAngle:false ,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor , y:15 , vertices:  [[-1.6,-1.0],[0,-3.5],[1.6,-1.0] ,[1.6,1],[-1.6,1]]});

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();
					
					creatFan((canvasWidth/2)/ScaleFactor+7,(canvasHeight/2)/ScaleFactor,7,0.35,true , 20 ,40 , 50, RED_COLOR);
					creatFan((canvasWidth/2)/ScaleFactor-7,(canvasHeight/2)/ScaleFactor,7,0.35,true , 20 ,-40 , 50, RED_COLOR);

										
					var shape1 = { shape:"poly" , vertices: [[0,0],[0.5,0],[0.5,1.5],[0,1.5]]};    
					var shape2 = { shape:"poly" , vertices: [[0,1.5],[0.5,1.2],[1.5,2.3],[1.0,2.6]]}; 
					var shape3 = { shape:"poly" , vertices: displaceArr([[0,0],[0.5,0],[0.5,6.5],[0,6.5]] ,1 , 2.3)}; 
					CreateObj({density:10,color:'#777777',fixedAngle:false ,type: "static" , shape:"complex" ,x:HomePos.x/ScaleFactor-2.5 , y:2 , Shapes:  [shape1,shape2,shape3]}); 
				
					shape1 = { shape:"poly" , vertices: flipArr([[0,0],[0.5,0],[0.5,1.5],[0,1.5]],true,false)};
					shape2 = { shape:"poly" , vertices: flipArr([[0,1.5],[0.5,1.2],[1.5,2.3],[1.0,2.6]],true,false)}; 
					shape3 = { shape:"poly" , vertices: flipArr(displaceArr([[0,0],[0.5,0],[0.5,6.5],[0,6.5]] ,1 , 2.3),true,false)}; 
					CreateObj({density:10,color:'#777777',fixedAngle:false ,type: "static" , shape:"complex" ,x:HomePos.x/ScaleFactor+3 , y:2 , Shapes:  [shape1,shape2,shape3]}); 


					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor , y : 4,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor  , y : 7.2,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor  , y : 9.5,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					if( contact.GetFixtureA().GetBody() == parentBody)
					{			
							//		alert(1);

						//if(!this.isDestroying)
					//	{
							if(contact.GetFixtureB().GetBody().details.name == "obstacle1")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureB().GetBody() , 100);

								startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							}
							
							if(contact.GetFixtureB().GetBody().details.name == "obstacle2")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureB().GetBody() , 100);

								startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);

							}
							
							if(contact.GetFixtureB().GetBody().details.name == "obstacle3")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureB().GetBody() , 100);

								startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);

							}
							
									
							this.isDestroying = true;
					//	}
					}
					else
					if(contact.GetFixtureB().GetBody() == parentBody)
					{
					//	alert(2);

					//	if(!this.isDestroying)
					//	{
							if(contact.GetFixtureA().GetBody().details.name == "obstacle1")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureA().GetBody() , 100);

								startGlassParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y);

							}
							
							if(contact.GetFixtureA().GetBody().details.name == "obstacle2")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureA().GetBody() , 100);

								startGlassParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y);

							}
							
							if(contact.GetFixtureA().GetBody().details.name == "obstacle3")
							{
								playSound("Glass");
								destroyBody(contact.GetFixtureA().GetBody() , 100);

								startGlassParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y);

							}		
											
							this.isDestroying = true;
					//	}
					}
			  },
			  checkIfWin: function()
			  {
				  if(numOfBalls == 0)
				  {
					    var Is_1_Imp = false;
						var Is_2_Imp = false;
						var Is_3_Imp = false;
						
						//alert(child_1.m_linearVelocity.y);
						
						if( child_1  )
						{
							if(child_1.m_linearVelocity.y < 0.05)
								Is_1_Imp = true;
						}
						else
							Is_1_Imp = true;
						
						if( child_2 )
						{
							if(child_2.m_linearVelocity.y < 0.05)
								Is_2_Imp = true;
						}
						else
							Is_2_Imp = true;
						
						if( child_3 )
						{
							if(child_3.m_linearVelocity.y < 0.05)
								Is_3_Imp = true;
						}
						else
							Is_3_Imp = true;
						
						if(Is_1_Imp && Is_2_Imp && Is_3_Imp)
						{
							endLevel();
							
						}
				  }
			  }
		}
		Level_2_2.startLevel();
		
		