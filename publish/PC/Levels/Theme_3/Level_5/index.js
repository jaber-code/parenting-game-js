var Level_3_5 = {
			timerSpeed:0.04,
			seso_1:null,
			seso_2:null,
			ParentForce:0,
			
			HammerImg:null,
			
			hammer1:null,
			hammer2:null,
			hammer3:null,


			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-330, "y":canvasHeight-230};
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
				this.ParentForce = 0;
		
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.HammerImg = new Image();
					this.HammerImg.src = "images/SoftHammer.png";
					
					
				    var obj1 = null;
				    var obj2 = null;
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					
					CreateFloor();
					
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:HomePos.x/ScaleFactor,y:HomePos.y/ScaleFactor+5 , width:3,height:8});
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:HomePos.x/ScaleFactor-1.9,y:HomePos.y/ScaleFactor-4.6 , width:0.4,height:4});


					createAirSeso(12 , 12 , 2 , 0 , 30);
					createAirSeso(22.3 , 12.8 , 2, 0 , 30);
					createAirSeso(23 , 6 , 2, 0 , 30);


					this.hammer1 = createHammer(12-4,10 ,35);
					this.hammer2 = createHammer(23-5,10.8 , 35);
					this.hammer3 = createHammer(23-4,4 , 35);
					
					CreateObj({color:null,categoryBits:0x8000,type:"static",shape:"box",x:8.5,y:11 , width:0.2,height:0.2});
					CreateObj({color:null,categoryBits:0x8000,type:"static",shape:"box",x:18.5,y:11.8 , width:0.2,height:0.2});
					CreateObj({color:null,categoryBits:0x8000,type:"static",shape:"box",x:19.5,y:5 , width:0.2,height:0.2});
					
					for(var i=0;i<=55;i++)
					{
						createSpike(i*0.5 ,canvasHeight/ScaleFactor-1.3, "top" );
					}


					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:13  , y:11,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:24  , y:5,radius:0.5,restitution:0,friction:0});

					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x:24 , y:11 ,radius:0.5,restitution:0,friction:0});

					/*setTimeout(function(){
						
						//this.seso_1.ApplyImpulse(new b2Vec2(0, 20),new b2Vec2(-1, 0));
						
					},3000)*/
			  },
			  startCollide:function(contact)
			  {
					 /* if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("hammer") != -1))
					  {

					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("hammer") != -1))
					  {
	
					  }*/
			  },
			  canvasDraw: function()
			  {
				  
				  ctx.save();
						ctx.translate(this.hammer1.GetPosition().x*ScaleFactor, this.hammer1.GetPosition().y*ScaleFactor );
						ctx.rotate(this.hammer1.GetAngle());
						ctx.translate(-(this.hammer1.GetPosition().x*ScaleFactor) , -(this.hammer1.GetPosition().y*ScaleFactor) );

						ctx.drawImage(this.HammerImg, this.hammer1.GetPosition().x*ScaleFactor-106,this.hammer1.GetPosition().y*ScaleFactor-35 , 99,42);
						ctx.restore();
						
						ctx.save();
						ctx.translate(this.hammer2.GetPosition().x*ScaleFactor, this.hammer2.GetPosition().y*ScaleFactor );
						ctx.rotate(this.hammer2.GetAngle());
						ctx.translate(-(this.hammer2.GetPosition().x*ScaleFactor) , -(this.hammer2.GetPosition().y*ScaleFactor) );

						ctx.drawImage(this.HammerImg, this.hammer2.GetPosition().x*ScaleFactor-106,this.hammer2.GetPosition().y*ScaleFactor-35 , 99,42);
						ctx.restore();
						
						ctx.save();
						ctx.translate(this.hammer3.GetPosition().x*ScaleFactor, this.hammer3.GetPosition().y*ScaleFactor );
						ctx.rotate(this.hammer3.GetAngle());
						ctx.translate(-(this.hammer3.GetPosition().x*ScaleFactor) , -(this.hammer3.GetPosition().y*ScaleFactor) );

						ctx.drawImage(this.HammerImg, this.hammer3.GetPosition().x*ScaleFactor-106,this.hammer3.GetPosition().y*ScaleFactor-35 , 99,42);
				  ctx.restore();
				  
				  drawMe7bas( this.hammer1.GetPosition() );
				  drawMe7bas( this.hammer2.GetPosition() );
				  drawMe7bas( this.hammer3.GetPosition() );

			  },
			  canvasDrawForground: function()
			  {
				  
			  },
			  endCollide:function(contact,impulse)
			  {
					  if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("hammer") != -1))
					  {
						    playSound("Hammer");
						  	//alert(impulse.normalImpulses);
						  	var magnitude = Math.sqrt(impulse.normalImpulses[0] * impulse.normalImpulses[0] + impulse.normalImpulses[1] * impulse.normalImpulses[1]);

							if(contact.GetFixtureA().GetBody().GetPosition().y > contact.GetFixtureB().GetBody().GetPosition().y )
									contact.GetFixtureB().GetBody().ApplyImpulse(new b2Vec2(0, -impulse.normalImpulses[0]/0.4),new b2Vec2(-2, 0));
					  }
					  else
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("hammer") != -1))
					  {
						    playSound("Hammer");
						  	//alert(impulse.normalImpulses[0]);
						  	var magnitude = Math.sqrt(impulse.normalImpulses[0] * impulse.normalImpulses[0] + impulse.normalImpulses[1] * impulse.normalImpulses[1]);

							if(contact.GetFixtureB().GetBody().GetPosition().y > contact.GetFixtureA().GetBody().GetPosition().y )
								contact.GetFixtureA().GetBody().ApplyImpulse(new b2Vec2(0, -impulse.normalImpulses[0]/0.4),new b2Vec2(-2, 0));
					  }
					  
					  
					 /* if((contact.GetFixtureB().GetBody().details.name == "seso" && contact.GetFixtureA().GetBody().details.name.indexOf("hammer") != -1))
					  {
						    playSound("Hammer");
						  	
					  }*/
			  },
			  checkIfWin: function()
			  {

			  }			  
		}
		Level_3_5.startLevel();
		
		