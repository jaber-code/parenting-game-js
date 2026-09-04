var Level_5_2 = {
			timerSpeed:0.04,

			startPos : {"x": (canvasWidth/2.0)-300, "y":canvasHeight-275},
			BGImage:null,
			
			Icon_1_Image:null,
			Icon_2_Image:null,
			Icon_3_Image:null,
			
			Icon_1_ImageColored:null,
			Icon_2_ImageColored:null,
			Icon_3_ImageColored:null,
			
			block_1:null,
			block_2:null,
			block_3:null,

			
			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-70};
					RestrictedArea = {"x": 0, "y":160,"h":400,"w":800,"op":0};

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
				if(this.block_1.GetPosition().y > 5.6 && Math.abs(this.block_1.m_linearVelocity.y) != 0 )
				{
					this.block_1.SetLinearVelocity(new b2Vec2(0,0.0));
					endLevel();
				}
				
				if(this.block_2.GetPosition().y > 5.6 && Math.abs(this.block_2.m_linearVelocity.y) != 0 )
					this.block_2.SetLinearVelocity(new b2Vec2(0,0.0));
				
				if(this.block_3.GetPosition().y > 5.6 && Math.abs(this.block_3.m_linearVelocity.y) != 0 )
					this.block_3.SetLinearVelocity(new b2Vec2(0,0.0));
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				initGlobalVars();

				this.Icon_1_Image = null;
				this.Icon_1_Image = null;
				this.Icon_1_Image = null;

				this.Icon_1_ImageColored = null;
				this.Icon_2_ImageColored = null;
				this.Icon_3_ImageColored = null;
				
				this.block_1 = null;
				this.block_2 = null;
				this.block_3 = null;

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				this.Icon_1_Image = new Image();
				this.Icon_1_Image.src = 'images/Night_Music_Icon.png';
			  
				this.Icon_2_Image = new Image();
				this.Icon_2_Image.src = 'images/Night_Reading_Icon.png';
			  
				this.Icon_3_Image = new Image();
				this.Icon_3_Image.src = 'images/Night_Chat_Icon.png';
			  

				this.BGImage = new Image();
				this.BGImage.src = 'images/Level1_5_Night_BG.png';
				
				arr = [0, 0, 178, -1, 178, 64, 218, 131, 3, 134];
				this.block_1 = CreateObj({name:'block',color:ORANGE_COLOR,fixedAngle:true , mass:0 , density:9999.0 , type:"kin" , shape:"box" , x:5.9 , y:0 , width: 2.45 , height:2.4});
				this.block_1.SetLinearVelocity(new b2Vec2(0,0.7));
				
				this.block_2 = CreateObj({name:'block',color:ORANGE_COLOR,fixedAngle:true , mass:0 , density:9999.0 , type:"kin" , shape:"box" , x:13.37 , y:0 , width: 2.4 , height:2.4});
				this.block_2.SetLinearVelocity(new b2Vec2(0,0.6));
				
				this.block_3 = CreateObj({name:'block',color:ORANGE_COLOR,fixedAngle:true , mass:0 , density:9999.0 , type:"kin" , shape:"box" , x:20.78 , y:0 , width: 2.45 , height:2.4});
				this.block_3.SetLinearVelocity(new b2Vec2(0,0.5));
				
				CreateObj({color:null, type:"kin" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor , y:canvasHeight/ScaleFactor -2, width: 2 , height:2});
				goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
				//CreateFloor();

				CreateObj({color:null,name:'Icon_1',type:"kin" ,categoryBits:0x8000, shape:"box" , x:148/ScaleFactor+0.9 ,y:180/ScaleFactor , width:1,height:0.2});
				CreateObj({color:null,name:'Icon_2',type:"kin" ,categoryBits:0x8000, shape:"box" , x:370/ScaleFactor+0.9,y:180/ScaleFactor , width:1,height:0.2});
				CreateObj({color:null,name:'Icon_3',type:"kin" ,categoryBits:0x8000, shape:"box" , x:594/ScaleFactor +0.9,y:180/ScaleFactor , width:1,height:0.2});

				
				arr = [0, 0, 64, 4, 149, 45, 279, 140, 311, 273, -2, 280];

				CreateObj({color:null,name:'box1',type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor-3.25 ,y:this.startPos.y/ScaleFactor-1.5 , width:9,height:2});
				CreateObj({color:null,name:'box1',type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor+6.28 ,y:this.startPos.y/ScaleFactor-1.5 , width:5,height:2});
				CreateObj({color:null,name:'box1',type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor+13.7 ,y:this.startPos.y/ScaleFactor-1.5 , width:5,height:2});
				CreateObj({color:null,name:'box1',type:"static" , shape:"box" , x:this.startPos.x/ScaleFactor+23.2 ,y:this.startPos.y/ScaleFactor-1.5 , width:9,height:2});
				
				create2EdgesObj({x:1.9 , y:7.2 , w:5 , h:0.5 , w2:7.6 , h2:4.9 , disBet:0.2 , isFlip:false });
				create2EdgesObj({x:24.8 , y:7.2 , w:5 , h:0.5 , w2:7.6 , h2:4.9 , disBet:0.2 , isFlip:true });

				arr = [[5,0],[0,3.5],[0,0]];
				CreateObj({color:null,type:"static" , shape:"poly" , vertices: arr , x:this.startPos.x/ScaleFactor+11.2,y:this.startPos.y/ScaleFactor-0.1});
				
				arr = [[0,0],[5,0],[5,3.5]];  //[[0,0],[5,0],[5,3.5]];
				CreateObj({color:null,type:"static" , shape:"poly" , vertices: arr , x:this.startPos.x/ScaleFactor+3.8,y:this.startPos.y/ScaleFactor-0.1});

				var myImage = new Image();
				myImage.src = 'images/Kid_1.png';
				child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor-4 , y : 5,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_2.png';
				child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0)/ScaleFactor+3  , y : 5,radius:0.5,restitution:0,friction:0});
				
				var myImage = new Image();
				myImage.src = 'images/Kid_3.png';
				child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : (canvasWidth/2.0 )/ScaleFactor+10  , y : 5,radius:0.5,restitution:0,friction:0});
	
			  },
			  startCollide:function(contact)
			  {
					if(contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1 && contact.GetFixtureA().GetBody().details.name.indexOf("Icon") != -1)
					{
						//alert(contact.GetFixtureA().GetBody().details.name);
						//alert(contact.GetFixtureB().GetBody().details.name);

						if(contact.GetFixtureB().GetBody().details.name.replace("child_","") == contact.GetFixtureA().GetBody().details.name.replace("Icon_",""))
						{
							playSound("EyesLook");
							switch( contact.GetFixtureA().GetBody().details.name )
							{
								case "Icon_1":
								if(this.Icon_1_ImageColored == null)
								{
									this.Icon_1_ImageColored = new Image();
									this.Icon_1_ImageColored.src = 'images/Night_Music_Full.png';
								}
								destroyBody(contact.GetFixtureA().GetBody() , 10);
								break;
								
								case "Icon_2":
								if(this.Icon_2_ImageColored == null)
								{
									this.Icon_2_ImageColored = new Image();
									this.Icon_2_ImageColored.src = 'images/Night_Reading_Full.png';
								}
								destroyBody(contact.GetFixtureA().GetBody() , 10);
								break;
								
								case "Icon_3":
								if(this.Icon_3_ImageColored == null)
								{
									this.Icon_3_ImageColored = new Image();
									this.Icon_3_ImageColored.src = 'images/Night_Chat_Full.png';
								}
								destroyBody(contact.GetFixtureA().GetBody() , 10);
								break;
							}
						}
					}
			  },
			  
			  checkIfWin: function()
			  {

			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );
					
					ctx.drawImage(this.Icon_1_Image, 148 , 135, 117*0.5 , 181*0.5 );
					ctx.drawImage(this.Icon_2_Image, 370 , 135, 117*0.5 , 181*0.5 );
					ctx.drawImage(this.Icon_3_Image, 594 , 135, 117*0.5 , 181*0.5 );
					
					if(this.Icon_1_ImageColored)
					{
						ctx.drawImage(this.Icon_1_ImageColored, 148+5 , 135+7, 117*0.4 , 118*0.4 );
					}
					
					if(this.Icon_2_ImageColored )
					{
						ctx.drawImage(this.Icon_2_ImageColored, 370+5 , 135+7, 117*0.4 , 118*0.4 );
					}
					
					if(this.Icon_3_ImageColored)
					{
						ctx.drawImage(this.Icon_3_ImageColored, 594+5 , 135+7, 117*0.4 , 118*0.4 );
					}

			  }
		}
		Level_5_2.startLevel();
		
		