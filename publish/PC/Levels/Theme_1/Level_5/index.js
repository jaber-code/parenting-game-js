var Level_1_5 = {
			timerSpeed:0.04,

			startPos : {"x": (canvasWidth/2.0)-300, "y":canvasHeight-275},
			BGImage:null,
			
			Icon_1_Image:null,
			Icon_2_Image:null,
			Icon_3_Image:null,
			
			Icon_1_ImageColored:null,
			Icon_2_ImageColored:null,
			Icon_3_ImageColored:null,

			
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
				if(block.GetPosition().y < (canvasHeight/2)/ScaleFactor)
					endLevel();
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

				numOfBalls = 3;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				this.Icon_1_Image = new Image();
				this.Icon_1_Image.src = 'images/Kid_1_Icon.png';
			  
				this.Icon_2_Image = new Image();
				this.Icon_2_Image.src = 'images/Kid_2_Icon.png';
			  
				this.Icon_3_Image = new Image();
				this.Icon_3_Image.src = 'images/Kid_3_Icon.png';
			  

				this.BGImage = new Image();
				this.BGImage.src = 'images/Level1_5_full_BG.png';
				
				arr = [0, 0, 178, -1, 178, 64, 218, 131, 3, 134];
				block = CreateObj({name:'block',color:RED_COLOR,fixedAngle:true , mass:0 , density:500.0 , type:"kin" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor , y:canvasHeight/ScaleFactor , width: canvasWidth/ScaleFactor , height:0.7});
				block.SetLinearVelocity(new b2Vec2(0,-0.75));
				
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
							switch( contact.GetFixtureA().GetBody().details.name )
							{
								
								case "Icon_1":
								if(this.Icon_1_ImageColored == null)
								{
									this.Icon_1_ImageColored = new Image();
									this.Icon_1_ImageColored.src = 'images/Kid_1_IconCol.png';
									
									destroyBody(contact.GetFixtureA().GetBody() , 10);
									
									playSound("EyesLook");
								}
								break;
								
								case "Icon_2":
								if(this.Icon_2_ImageColored == null)
								{
									this.Icon_2_ImageColored = new Image();
									this.Icon_2_ImageColored.src = 'images/Kid_2_IconCol.png';
									
									destroyBody(contact.GetFixtureA().GetBody() , 10);
									
									playSound("EyesLook");

								}
								break;
								
								case "Icon_3":
								if(this.Icon_3_ImageColored == null)
								{
									this.Icon_3_ImageColored = new Image();
									this.Icon_3_ImageColored.src = 'images/Kid_3_IconCol.png';
									
									destroyBody(contact.GetFixtureA().GetBody() , 10);
									
									playSound("EyesLook");

								}
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
						ctx.drawImage(this.Icon_1_ImageColored, 148 , 135, 117*0.5 , 118*0.5 );
					}
					
					if(this.Icon_2_ImageColored )
					{
						ctx.drawImage(this.Icon_2_ImageColored, 370 , 135, 117*0.5 , 118*0.5 );
					}
					
					if(this.Icon_3_ImageColored)
					{
						ctx.drawImage(this.Icon_3_ImageColored, 594 , 135, 117*0.5 , 118*0.5 );
					}

			  }
		}
		Level_1_5.startLevel();
		
		