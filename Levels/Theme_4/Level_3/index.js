var Level_4_3= {
			timerSpeed:0.04,
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			qMarkImg:null,
			
			Kid_1_IconImg:null,
			Kid_2_IconImg:null,
			Kid_3_IconImg:null,
			
			
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			
			Image_1:null,
			Image_2:null,
			Image_3:null,
			
			Image_4:null,
			Image_5:null,
			Image_6:null,
			
			speed : -4,
			timer : 0,
			
			posPic_1:null,
			posPic_2:null,
			posPic_3:null,

			

			startLevel: function () 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)-0, "y":canvasHeight-58};
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
				this.timer += 1;
				if( this.timer % 100 == 0 )
				{
					this.speed *= -1;
					////alert(Level_3_3.is_Child_3_Jump);
					if(child_1 && Level_4_3.is_Child_1_Jump)
					    child_1.SetLinearVelocity(  new b2Vec2(this.speed*1.1 , -1)  );
					
					if(child_2 && Level_4_3.is_Child_2_Jump)
						child_2.SetLinearVelocity(  new b2Vec2(this.speed*0.8 ,-1 )  );
					
					if(child_3 && Level_4_3.is_Child_3_Jump)   
						child_3.SetLinearVelocity(  new b2Vec2(this.speed , -1)  );
				}	
				
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();

				this.glass_1 = null;
				this.glass_2 = null;
				this.glass_3 = null;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				numOfBalls = 3;
				sandLevel = 0;
				
				this.timer = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				    this.Image_1 = new Image();
					this.Image_1.src = 'images/glass_block.png';
	  
				    this.Image_2 = new Image();
					this.Image_2.src = 'images/glass_block.png';
	  
				    this.Image_3 = new Image();
					this.Image_3.src = 'images/glass_block.png';
					
					
					this.Image_4 = new Image();
					this.Image_4.src = 'images/Angrey_Face.png';
					
					this.Image_5 = new Image();
					this.Image_5.src = 'images/Angrey_Face.png';
					
					this.Image_6 = new Image();
					this.Image_6.src = 'images/Angrey_Face.png';
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					CreateFloor();

				  /*
				    CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-4.86 , y:(canvasHeight/2.0)/ScaleFactor-1.7 , width:4.27 , height:0.5});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor+0.64 , y:(canvasHeight/2.0)/ScaleFactor-5.2 , width:4.27 , height:0.5});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor+7.14 , y:(canvasHeight/2.0)/ScaleFactor-2.2 , width:4.27 , height:0.5});
				  */
					
					this.glass_1 = LoopOverObj(Level4_1.glass_block , null, (canvasWidth/2.0)/ScaleFactor-7 , (canvasHeight/2.0)/ScaleFactor-2 ,1.0 , "static");
					this.glass_2 = LoopOverObj(Level4_1.glass_block , null , (canvasWidth/2.0)/ScaleFactor-1.5 , (canvasHeight/2.0)/ScaleFactor-5.5 ,1.0 , "static");
					this.glass_3 = LoopOverObj(Level4_1.glass_block , null , (canvasWidth/2.0)/ScaleFactor+5 , (canvasHeight/2.0)/ScaleFactor-2.5 ,1.0 , "static");

					this.posPic_1 = this.glass_1.GetPosition();
					this.posPic_2 = this.glass_2.GetPosition();
					this.posPic_3 = this.glass_3.GetPosition();
					
				//	this.glass_1 = drawCirclePath((canvasWidth/2.0)/ScaleFactor-5 , (canvasHeight/2.0)/ScaleFactor-1 ,2.1 ,2.0 ,22,0.8, "rgba(70,170,255,0.6)" , "Glass_1");
				//	this.glass_2 = drawCirclePath((canvasWidth/2.0)/ScaleFactor+1 , (canvasHeight/2.0)/ScaleFactor-4 ,2.1 ,2.0 ,22,0.8, "rgba(70,170,255,0.6)" , "Glass_2");
				//	this.glass_3 = drawCirclePath((canvasWidth/2.0)/ScaleFactor+6 , (canvasHeight/2.0)/ScaleFactor-1 ,2.1 ,2.0 ,22,0.8, "rgba(70,170,255,0.6)" , "Glass_3");
					
					create2Edges((canvasWidth/2.0)/ScaleFactor-5.5 , 11 , 3 , 0.5 , 2 ,1.3, 0.28,false);
					create2Edges((canvasWidth/2.0)/ScaleFactor+6.5 , 11 , 3 , 0.5 , 2 ,1.3, 0.28,true);
					
					createSpikesBox((canvasWidth/2.0)/ScaleFactor + 2, (canvasHeight/2.0)/ScaleFactor +0.4, 1);
					createSpikesBox((canvasWidth/2.0)/ScaleFactor - 9 , (canvasHeight/2.0)/ScaleFactor , 1);
					createSpikesBox((canvasWidth/2.0)/ScaleFactor + 10 , (canvasHeight/2.0)/ScaleFactor-1 , 1);

					//drawCirclePath(HomePos.x/ScaleFactor-3 ,HomePos.y/ScaleFactor-8.5 ,2.8 ,2.8 ,22,1.75, "#777777");
					
					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor-5.8 , y :canvasHeight/ScaleFactor-8.7,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+1.1  , y :canvasHeight/ScaleFactor-12,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+5.9 , y : canvasHeight/ScaleFactor-10,radius:0.5,restitution:0,friction:0});
					
					
					child_3.SetLinearVelocity(  new b2Vec2(2 , 0)  );
					child_2.SetLinearVelocity(  new b2Vec2(2 , 0)  );
					child_1.SetLinearVelocity(  new b2Vec2(2 , 0)  );
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureB().GetBody().details.name == "Parent")// && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1)
					{	
						if(contact.GetFixtureA().GetBody() == this.glass_1)
						{
							Level_4_3.is_Child_1_Jump = false;
							
							this.Image_4.src = 'images/Happy_Face.png';


							destroyBody(this.glass_1 , 100);
							this.glass_1 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_2)
						{
							Level_4_3.is_Child_2_Jump = false;
							
							this.Image_5.src = 'images/Happy_Face.png';

						
							destroyBody(this.glass_2 , 100);
							this.glass_2 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_3)
						{
							Level_4_3.is_Child_3_Jump = false;
							
							this.Image_6.src = 'images/Happy_Face.png';


							destroyBody(this.glass_3 , 100);
							this.glass_3 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
					}
			  },
			  canvasDraw: function()
			  {
				    //console.log(this.glass_1); 
					ctx.drawImage(this.Image_4, this.posPic_1.x*ScaleFactor+9 , this.posPic_1.y*ScaleFactor+19, 59*1.5 , 42*1.5 );
					ctx.drawImage(this.Image_5, this.posPic_2.x*ScaleFactor+9 , this.posPic_2.y*ScaleFactor+19, 59*1.5 , 42*1.5 );
					ctx.drawImage(this.Image_6, this.posPic_3.x*ScaleFactor+9 , this.posPic_3.y*ScaleFactor+19, 59*1.5 , 42*1.5 );
	
					if( this.glass_1 != null)
					{
						ctx.drawImage(this.Image_1, this.glass_1.GetPosition().x*ScaleFactor , this.glass_1.GetPosition().y*ScaleFactor, 107*1.0 , 107*1.0 );
					}

					if( this.glass_2 != null)
					{

						ctx.drawImage(this.Image_1, this.glass_2.GetPosition().x*ScaleFactor , this.glass_2.GetPosition().y*ScaleFactor, 107*1.0 , 107*1.0 );
					}

					if( this.glass_3 != null)
					{

						ctx.drawImage(this.Image_1, this.glass_3.GetPosition().x*ScaleFactor , this.glass_3.GetPosition().y*ScaleFactor, 107*1.0 , 107*1.0 );
					}
			  },
			  checkIfWin: function()
			  {
				  if(numOfBalls == 0)
				  {
					    var Is_1_Imp = false;
						var Is_2_Imp = false;
						var Is_3_Imp = false;
						
						if( child_1 )
						{
							if(this.is_Child_1_Jump)
								Is_1_Imp = true;
						}
						else
							Is_1_Imp = true;
						
						if( child_2 )
						{
							if(this.is_Child_2_Jump)
								Is_2_Imp = true;
						}
						else
							Is_2_Imp = true;
						
						if( child_3 )
						{
							if(this.is_Child_3_Jump)
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
		Level_4_3.startLevel();
		
		