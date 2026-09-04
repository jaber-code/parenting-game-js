var Level_1_9 = {
			timerSpeed:0.04,
			
			ImageH:null,
			
			ImageKid_1:null,
			ImageKid_2:null,
			ImageKid_3:null,

			child_1_Enter:false,
			child_2_Enter:false,
			child_3_Enter:false,
			
			zefte_1:null,
			zefte_2:null,
			
			makan:null,
			glb:null,
		
			timer:0,
			hasFalled:false,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+0, "y":canvasHeight-57};
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
				if(this.timer < 101)
					this.timer++;
				
				if(this.timer >= 100)
				{
					this.checkToThroughHeart();
				}
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.timer = 0;
				this.child_1_Enter = false;
				this.child_2_Enter = false;
				this.child_3_Enter = false;
				
				this.hasFalled = false;


				numOfBalls = 3;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()    
			  {  
					this.ImageH = new Image();
					this.ImageH.src = "images/Hart_level.png";  
					
					this.ImageKid_1 = new Image();
					this.ImageKid_1.src = "images/Kid_3_IconCol.png"; 
					
					this.ImageKid_2 = new Image();
					this.ImageKid_2.src = "images/Kid_1_IconCol.png"; 
					
					this.ImageKid_3 = new Image();
					this.ImageKid_3.src = "images/Kid_2_IconCol.png"; 
					
					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , true);
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:7,y:4 , width:4,height:0.4});
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:21,y:7.5 , width:4,height:0.4});
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:6,y:7.5 , width:4,height:0.4});
					
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:HomePos.x/ScaleFactor +4,y:13 , width:0.4,height:6});
					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:HomePos.x/ScaleFactor -4,y:13 , width:0.4,height:6});

					CreateObj({color:GREY_COLOR,type:"static",shape:"box",x:HomePos.x/ScaleFactor,y:15.7 , width:7.8,height:2});

					createSpikesBox(HomePos.x/ScaleFactor+3.7 , 9.7 , 1);
					createSpikesBox(HomePos.x/ScaleFactor-3.7 , 9.7 , 1);
					
					var sh_1 = {shape:"poly" ,vertices :  displaceArr( indicesConvertor([0, 0, 54, -36, 70, 31]), -3 , -1.85)  };
					var sh_2 = {shape:"poly" ,vertices :  displaceArr( flipArr(indicesConvertor([0, 0, 54, -36, 70, 31]) ,true , false), 3 , -1.85)  };
					var sh_3 = {shape:"poly" ,vertices :  displaceArr( indicesConvertor([0, 0, -60, -44, 60, -44]) ,0 ,1.95 )  };
					var sh_4 = {shape:"box"  ,width:0.6 , height:0.6};

					
					this.glb = CreateObj({name:"8lb",maskBits:(0xFFFF & ~0x0200),color:null,type:"dynamic",density:1000,fixedAngle:true,shape:"complex",x:canvasWidth/2/ScaleFactor,y:canvasHeight/2/ScaleFactor , Shapes:[ sh_1 , sh_2 , sh_3 , sh_4 ]});

					this.zefte_1 = CreateObj({color:null,type:"static",shape:"box",x:canvasWidth/2/ScaleFactor+1.6,y:canvasHeight/2/ScaleFactor+1 , width:0.3,height:0.3});
					this.zefte_2 = CreateObj({color:null,type:"static",shape:"box",x:canvasWidth/2/ScaleFactor-1.6,y:canvasHeight/2/ScaleFactor+1 , width:0.3,height:0.3});

					this.makan = CreateObj({categoryBits:0x0200,name:"target",color:null,type:"static",fixedAngle:true,shape:"box",x:canvasWidth/2/ScaleFactor,y:canvasHeight/2/ScaleFactor+0.2 , width:0.65,height:1.1});

				  /*CreateObj({color:GREY_COLOR,type:"static",fixedAngle:true,shape:"poly",x:canvasWidth/2/ScaleFactor-3,y:canvasHeight/2/ScaleFactor-1.4 , vertices :  flipArr(indicesConvertor([0, 0, 54, -36, 70, 31]) ,false , false)});
					CreateObj({color:GREY_COLOR,type:"static",fixedAngle:true,shape:"poly",x:canvasWidth/2/ScaleFactor+3,y:canvasHeight/2/ScaleFactor-1.4 , vertices :  flipArr(indicesConvertor([0, 0, 54, -36, 70, 31]) ,true , false)});
					CreateObj({color:GREY_COLOR,type:"static",fixedAngle:true,shape:"poly",x:canvasWidth/2/ScaleFactor+0,y:canvasHeight/2/ScaleFactor+2.3 , vertices :  indicesConvertor([0, 0, -65, -44, 65, -44])});

					CreateObj({name:"target",color:GREY_COLOR,type:"static",fixedAngle:true,shape:"box",x:canvasWidth/2/ScaleFactor+0.05,y:canvasHeight/2/ScaleFactor+0.5 , width:0.6,height:1});
*/

					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 7.0, y: 3.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:null,density:10,type:"dynamic" , shape:"circle" , x : 22, y: 7.5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:null,density:10,type:"dynamic" , shape:"circle"  , x : 5,  y: 7.5,radius:0.5,restitution:0,friction:0});	
					
			  },
			  startCollide:function(contact)
			  {
				  if( (contact.GetFixtureA().GetBody().details.name == "target" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) )
				  {
						playSound("EyesLook");
						switch(contact.GetFixtureB().GetBody().details.name)
						{
							  case "child_1":
								  this.child_1_Enter = true;
								  contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							  break;
							  
							  case "child_2":
								  this.child_2_Enter = true;
								  contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));

							  break;
							  case "child_3":
								 this.child_3_Enter = true;
								 contact.GetFixtureB().GetBody().SetLinearVelocity(new b2Vec2(0,0));
							  break;
						}
						
						//setTimeout(Level_1_9.checkToThroughHeart , 1000);
						//this.checkToThroughHeart();
				  }
				  else
				  if( (contact.GetFixtureA().GetBody().details.name == "8lb" && contact.GetFixtureB().GetBody().details.name.indexOf("Goal") != -1) )
				  {
					    destroyBody(contact.GetFixtureA().GetBody() , 100); //
				  }
				  else
				  if( (contact.GetFixtureA().GetBody().details.name == "Goal" && contact.GetFixtureB().GetBody().details.name.indexOf("8lb") != -1) )
				  {
					  	destroyBody(contact.GetFixtureB().GetBody() , 100); //
				  }
			  },
			  canvasDrawForground: function()
			  {


			  },
			  checkToThroughHeart: function()
			  {
				  if( numOfBalls == 0)
				  {
					  if(this.zefte_1 && this.zefte_2 && this.makan)
					  {
						  if( !this.hasFalled )
						  {
							  this.hasFalled = true;
							  setTimeout(Level_1_9.ThroughHeart ,1300);
						  }
						  
					  }

				  }
				  
			  },
			  ThroughHeart: function()
			  {
				  destroyBody(Level_1_9.zefte_1 , 100); //
				  destroyBody(Level_1_9.zefte_2 , 100); //

				  destroyBody(Level_1_9.makan , 100); //
				  
				  Level_1_9.ImageH.src = "images/heart.png";  //heart
				  
			  },
			  canvasDraw: function()   
			  {
					ctx.drawImage(this.ImageH, this.glb.GetPosition().x*ScaleFactor-90,this.glb.GetPosition().y*ScaleFactor-90 , 178,147);
					
					ctx.drawImage(this.ImageKid_1, this.glb.GetPosition().x*ScaleFactor-54,this.glb.GetPosition().y*ScaleFactor-20 , 104*0.43,105*0.43);
					ctx.drawImage(this.ImageKid_2, this.glb.GetPosition().x*ScaleFactor+10,this.glb.GetPosition().y*ScaleFactor-20 , 104*0.43,105*0.43);
					ctx.drawImage(this.ImageKid_3, this.glb.GetPosition().x*ScaleFactor-20,this.glb.GetPosition().y*ScaleFactor-60 , 104*0.43,105*0.43);
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_1_9.startLevel();
		
		