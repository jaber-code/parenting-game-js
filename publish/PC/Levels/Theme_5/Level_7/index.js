var Level_5_7 = {
			timerSpeed:0.05,
			
			Ring_1:null,
			Ring_2:null,
			Ring_3:null,
			
			
			Child_1_Img:null,
			Child_2_Img:null,
			Child_3_Img:null,
			
		
			IsRing_1_Hit:false,
			IsRing_2_Hit:false,
			IsRing_3_Hit:false,
			

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-0, "y":canvasHeight-340};
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
				//if(child_1 == null)
					//alert(223134);
				
				if(this.Ring_1.GetPosition().x > 24)
				{
					this.Ring_1.SetLinearVelocity(new b2Vec2(-3,0));
				}
				else
				if(this.Ring_1.GetPosition().x < -2)
				{
					this.Ring_1.SetLinearVelocity(new b2Vec2(3,0));
				}
			//////
				if(this.Ring_2.GetPosition().x > 24)
				{
					this.Ring_2.SetLinearVelocity(new b2Vec2(-3,0));
				}
				else
				if(this.Ring_2.GetPosition().x < -2)
				{
					this.Ring_2.SetLinearVelocity(new b2Vec2(3,0));
				}
			//////
				if(this.Ring_3.GetPosition().x > 24)
				{
					this.Ring_3.SetLinearVelocity(new b2Vec2(-3,0));
				}
				else
				if(this.Ring_3.GetPosition().x < -2)
				{
					this.Ring_3.SetLinearVelocity(new b2Vec2(3,0));
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				numOfBalls = 3;
				sandLevel = 0;	
				
				this.IsRing_1_Hit = false;
				this.IsRing_2_Hit = false;
				this.IsRing_3_Hit = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					CreateFloor();
					
					drawCirclePath(HomePos.x/ScaleFactor ,HomePos.y/ScaleFactor+5.3 ,10 ,5 ,13, 3.93, GREY_COLOR , "8oos",8 , "static");//, ( 0x0040)
					
	
					// var zeft = drawCirclePath(HomePos.x/ScaleFactor ,HomePos.y/ScaleFactor+8 ,1.5 ,1.5 ,60, 3.93, GREY_COLOR , "noth",3 , "kin");
					// var el6een = CreateObj({color:GREY_COLOR,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor, y:HomePos.y/ScaleFactor-5,  density:9999, width:2.5 , height:2.8});
					
					this.Ring_1 = LoopOverObj( Level5_7.Ring , null , 5.0 , 10.0 , 0.4  , "kin" , 9999 , true , 0x0400 ,"Ring_1" );
					this.Ring_2 = LoopOverObj( Level5_7.Ring , null , 10.0 , 10.0 , 0.4 , "kin" , 9999 , true , 0x0400 ,"Ring_2" );
					this.Ring_3 = LoopOverObj( Level5_7.Ring , null , 15.0 , 10.0 , 0.4 , "kin" , 9999 , true , 0x0400 ,"Ring_3" );

					
					this.Ring_1.SetLinearVelocity(new b2Vec2(3,0));
					this.Ring_2.SetLinearVelocity(new b2Vec2(3,0));
					this.Ring_3.SetLinearVelocity(new b2Vec2(3,0));

					//var el6een = CreateObj({color:GREY_COLOR,type: "kin" , shape:"box" ,x:HomePos.x/ScaleFactor, y:HomePos.y/ScaleFactor-5,  density:9999, width:2.5 , height:2.8});
					//createRevoluteJoint(zeft , el6een , new b2Vec2(0, 12)  , new b2Vec2(2, 0), false,0,0,GREY_COLOR);
				    //el6een.SetLinearVelocity(new b2Vec2(0,0));
					//el6een.SetLinearVelocity(0,-20);
					
					child_1 = this.Ring_1;
					child_2 = this.Ring_2;
					child_3 = this.Ring_3;

										
					this.Child_1_Img = new Image();
					this.Child_1_Img.src = 'images/Kid_1.png';
					//child_1 = CreateObj({name:'child_1' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),mass:0,image:this.Child_1_Img,color:'blue',density:0,type:"dynamic" , shape:"circle" , x:13  , y:12,radius:0.1,restitution:0,friction:0});

					this.Child_2_Img = new Image();
					this.Child_2_Img.src = 'images/Kid_2.png';
					//child_2 = CreateObj({name:'child_2' ,maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),mass:0,image:this.Child_2_Img,color:'blue',density:0,type:"kin" , shape:"circle" , x:24  , y:5,radius:0.5,restitution:0,friction:0});

					this.Child_3_Img = new Image();
					this.Child_3_Img.src = 'images/Kid_3.png';
					//child_3 = CreateObj({name:'child_3',maskBits:(0xFFFF & ~0x0002 & ~0x0004 & ~0x0006 & ~0x0008),mass:0,image:this.Child_3_Img,color:'blue',density:0,type:"kin" , shape:"circle" , x:24 , y:11 ,radius:0.5,restitution:0,friction:0});

					/*setTimeout(function(){
						
						//this.seso_1.ApplyImpulse(new b2Vec2(0, 20),new b2Vec2(-1, 0));
						
					},3000)*/
			  },
			  startCollide:function(contact)
			  {
					 
			  },
			  canvasDraw: function()
			  {
					ctx.strokeStyle = ORANGE_COLOR;
					
					ctx.lineWidth = 2;
					ctx.beginPath();
						ctx.moveTo(this.Ring_1.GetPosition().x*ScaleFactor+50 , this.Ring_1.GetPosition().y*ScaleFactor+100);
						ctx.lineTo(this.Ring_1.GetPosition().x*ScaleFactor+50 , this.Ring_1.GetPosition().y*ScaleFactor+260);
					ctx.closePath();
					ctx.stroke();
					
					ctx.beginPath();
						ctx.moveTo(this.Ring_2.GetPosition().x*ScaleFactor+50 , this.Ring_2.GetPosition().y*ScaleFactor+100);
						ctx.lineTo(this.Ring_2.GetPosition().x*ScaleFactor+50 , this.Ring_2.GetPosition().y*ScaleFactor+260);
					ctx.closePath();
					ctx.stroke();
					
					ctx.beginPath();
						ctx.moveTo(this.Ring_3.GetPosition().x*ScaleFactor+50 , this.Ring_3.GetPosition().y*ScaleFactor+100);
						ctx.lineTo(this.Ring_3.GetPosition().x*ScaleFactor+50 , this.Ring_3.GetPosition().y*ScaleFactor+260);
					ctx.closePath();
					ctx.stroke();
					
					
					if(child_1 != null)
						ctx.drawImage(this.Child_1_Img, this.Ring_1.GetPosition().x*ScaleFactor+37,this.Ring_1.GetPosition().y*ScaleFactor+67 , 30,30);
					
					if(child_2 != null)
						ctx.drawImage(this.Child_2_Img, this.Ring_2.GetPosition().x*ScaleFactor+37,this.Ring_2.GetPosition().y*ScaleFactor+67 , 30,30);
				
					if(child_3 != null)
						ctx.drawImage(this.Child_3_Img, this.Ring_3.GetPosition().x*ScaleFactor+37,this.Ring_3.GetPosition().y*ScaleFactor+67 , 30,30);
			  },
			  canvasDrawForground: function()
			  {
				    ctx.strokeStyle = ORANGE_COLOR;
					ctx.lineWidth = 6;
					ctx.beginPath();
						ctx.arc(this.Ring_1.GetPosition().x*ScaleFactor+51, this.Ring_1.GetPosition().y * ScaleFactor+51, 48, 0, Math.PI * 2);
					ctx.closePath();
					ctx.stroke();
					
					ctx.beginPath();
						ctx.arc(this.Ring_2.GetPosition().x*ScaleFactor+51, this.Ring_2.GetPosition().y * ScaleFactor+51, 48, 0, Math.PI * 2);
					ctx.closePath();
					ctx.stroke();
					
					ctx.beginPath();
						ctx.arc(this.Ring_3.GetPosition().x*ScaleFactor+51, this.Ring_3.GetPosition().y * ScaleFactor+51, 48, 0, Math.PI * 2);
					ctx.closePath();
					ctx.stroke();
			  },
			  endCollide:function(contact,impulse)
			  {
				  
					  if((contact.GetFixtureB().GetBody().details.name == "8oos" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
					  {
						  destroyBody(contact.GetFixtureA().GetBody() , 10);
						  BombChild(contact.GetFixtureA().GetBody() );
						  
					  }
					  else
					  if((contact.GetFixtureA().GetBody().details.name == "8oos" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1))
					  {
						  destroyBody(contact.GetFixtureB().GetBody() , 10);
						  BombChild(contact.GetFixtureB().GetBody() ); 
					  }
						  
						  
					  if((contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("Ring") != -1))
					  {
							playSound("Hit_Lego");
							
							switch(contact.GetFixtureA().GetBody().details.name)
						    {
								  case "Ring_1":
								  this.Ring_1.SetLinearVelocity(new b2Vec2(0,-5));
								  if(!this.IsRing_1_Hit)
								  {
										this.IsRing_1_Hit = true;
										setTimeout(function(){
											child_1 = CreateObj({name:'child_1' ,mass:0,density:0,type:"dynamic" , shape:"circle" , x:contact.GetFixtureA().GetBody().GetPosition().x+37/ScaleFactor  , y:contact.GetFixtureA().GetBody().GetPosition().y+67/ScaleFactor,radius:0.05,restitution:0,friction:0});
										},100)
										
								  }
								  break;
								  
								  case "Ring_2":
								  this.Ring_2.SetLinearVelocity(new b2Vec2(0,-5));
								  if(!this.IsRing_2_Hit)
								  {
										this.IsRing_2_Hit = true;
										setTimeout(function(){
											child_2 = CreateObj({name:'child_2' ,mass:0,density:0,type:"dynamic" , shape:"circle" , x:contact.GetFixtureA().GetBody().GetPosition().x+37/ScaleFactor  , y:contact.GetFixtureA().GetBody().GetPosition().y+67/ScaleFactor,radius:0.05,restitution:0,friction:0});
										},100)
								  }
								  break;
								  
								  case "Ring_3":
								  this.Ring_3.SetLinearVelocity(new b2Vec2(0,-3));
								  if(!this.IsRing_3_Hit)
								  {
										this.IsRing_3_Hit = true;
										setTimeout(function(){
											child_3 = CreateObj({name:'child_3' ,mass:0,density:0,type:"dynamic" , shape:"circle" , x:contact.GetFixtureA().GetBody().GetPosition().x+37/ScaleFactor  , y:contact.GetFixtureA().GetBody().GetPosition().y+67/ScaleFactor,radius:0.05,restitution:0,friction:0});
										},100)
								  }
								  break;
						    }
					  }
			  },
			  checkIfWin: function()
			  {

			  }			  
		}
		Level_5_7.startLevel();