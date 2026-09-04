var Level_2_6= {
			timerSpeed:0.04,
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			qMarkImg:null,
			
			Kid_1_IconImg:null,
			Kid_2_IconImg:null,
			Kid_3_IconImg:null,

			startLevel: function() 
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
					this.Kid_1_IconImg = new Image();
					this.Kid_1_IconImg.src = 'images/Kid_1_Icon.png';
					
					this.Kid_2_IconImg = new Image();
					this.Kid_2_IconImg.src = 'images/Kid_2_Icon.png';
					
					this.Kid_3_IconImg = new Image();
					this.Kid_3_IconImg.src = 'images/Kid_3_Icon.png';
				  
				    this.qMarkImg = new Image();
					this.qMarkImg.src = 'images/Question_Mark.png';
	  
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					CreateFloor();
					
					
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor-4.86 , y:(canvasHeight/2.0)/ScaleFactor-1.7 , width:4.27 , height:0.5});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor+0.64 , y:(canvasHeight/2.0)/ScaleFactor-5.2 , width:4.27 , height:0.5});
					CreateObj({color:GREY_COLOR, type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor+7.14 , y:(canvasHeight/2.0)/ScaleFactor-2.2 , width:4.27 , height:0.5});

					
					this.glass_1 = LoopOverObj(Level2_6.Curved_glass , null, (canvasWidth/2.0)/ScaleFactor-7 , (canvasHeight/2.0)/ScaleFactor-2 ,1.2 , "static");
					this.glass_2 = LoopOverObj(Level2_6.Curved_glass , null , (canvasWidth/2.0)/ScaleFactor-1.5 , (canvasHeight/2.0)/ScaleFactor-5.5 ,1.2 , "static");
					this.glass_3 = LoopOverObj(Level2_6.Curved_glass , null , (canvasWidth/2.0)/ScaleFactor+5 , (canvasHeight/2.0)/ScaleFactor-2.5 ,1.2 , "static");

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
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+2.1  , y :canvasHeight/ScaleFactor-12,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : HomePos.x/ScaleFactor+5.9 , y : canvasHeight/ScaleFactor-10,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureB().GetBody().details.name == "Parent")// && contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1)
					{	
						if(contact.GetFixtureA().GetBody() == this.glass_1)
						{
							destroyBody(this.glass_1 , 100);
							this.glass_1 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_2)
						{
							destroyBody(this.glass_2 , 100);
							this.glass_2 = null;
							startGlassParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
							
							playSound("Glass");
						}
						else
						if(contact.GetFixtureA().GetBody() == this.glass_3)
						{
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
					if( this.glass_1 != null)
					{
						ctx.drawImage(this.qMarkImg, child_1.GetPosition().x*ScaleFactor+1 , child_1.GetPosition().y*ScaleFactor-48, 64*0.3 , 93*0.3 );
						ctx.drawImage(glassImg, this.glass_1.GetPosition().x*ScaleFactor , this.glass_1.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_1 != null)
						ctx.drawImage(this.Kid_1_IconImg, child_1.GetPosition().x*ScaleFactor+1 , child_1.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);
					
					
					if( this.glass_2 != null)
					{
						ctx.drawImage(this.qMarkImg, child_2.GetPosition().x*ScaleFactor+1 , child_2.GetPosition().y*ScaleFactor-48, 64*0.3 , 93*0.3 );
						ctx.drawImage(glassImg, this.glass_2.GetPosition().x*ScaleFactor , this.glass_2.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_2 != null)
						ctx.drawImage(this.Kid_2_IconImg, child_2.GetPosition().x*ScaleFactor+1 , child_2.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);
					
					
					if( this.glass_3 != null)
					{
						ctx.drawImage(this.qMarkImg, child_3.GetPosition().x*ScaleFactor+1 , child_3.GetPosition().y*ScaleFactor-48, 64*0.3 ,93*0.3 );
						ctx.drawImage(glassImg, this.glass_3.GetPosition().x*ScaleFactor , this.glass_3.GetPosition().y*ScaleFactor, 107*1.2,105*1.2);
					}
					else
					if(child_3 != null)
						ctx.drawImage(this.Kid_3_IconImg, child_3.GetPosition().x*ScaleFactor+1 , child_3.GetPosition().y*ScaleFactor-48, 117*0.3,181*0.3);

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
							if(this.glass_1)
								Is_1_Imp = true;
						}
						else
							Is_1_Imp = true;
						
						if( child_2 )
						{
							if(this.glass_2)
								Is_2_Imp = true;
						}
						else
							Is_2_Imp = true;
						
						if( child_3 )
						{
							if(this.glass_3)
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
		Level_2_6.startLevel();