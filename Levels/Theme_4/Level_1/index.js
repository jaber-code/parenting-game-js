var Level_4_1 = {
			timerSpeed:0.04,
						
			is_Child_1_Jump:true,
			is_Child_2_Jump:true,
			is_Child_3_Jump:true,
			
			glass_1:null,
			glass_2:null,
			glass_3:null,
			
			speed : -13,

			timer:0,

			startLevel: function() 
			{			
					numOfBalls = 1;
					HomePos = {"x": (canvasWidth/2.0), "y":canvasHeight-55};
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
				if( this.timer % 160 == 0 )
				{
					if(child_1 && Level_4_1.is_Child_1_Jump)
						child_1.SetLinearVelocity(  new b2Vec2(Math.random()*10-20, Math.random()*10-20)  );
				}
				
				if( this.timer % 190 == 0 )
				{
					if(child_2 && Level_4_1.is_Child_2_Jump)
						child_2.SetLinearVelocity(  new b2Vec2(Math.random()*10-20 , Math.random()*10-20)  );
				}
				
				if( this.timer % 230 == 0 )
				{
					if(child_3 && Level_4_1.is_Child_3_Jump)   
						child_3.SetLinearVelocity(  new b2Vec2(Math.random()*10-20 , Math.random()*10-20)  );
				}
				
			},
			
			reset:function()
			{
				deleteCurrentLevel();
				
				initGlobalVars();
				
				this.glass_Con = null;
				
				this.is_Child_1_Jump = true;
				this.is_Child_2_Jump = true;
				this.is_Child_3_Jump = true;
				
				this.timer = 0;

				numOfBalls = 1;
				sandLevel = 0;
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					var MainPosX = (canvasWidth/2.0)/ScaleFactor;
					var MainPosY = (canvasHeight/2.0)/ScaleFactor;
					
					CreateFloor(false);

					goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					
					LoopOverObj( Level4_7.Bar1 , GREY_COLOR , MainPosX-7.6 , MainPosY-2 , 1 , "static" , 0 , true , 0 ,"noth" );
					LoopOverObj( Level4_7.Bar2 , GREY_COLOR , MainPosX-2 , MainPosY-4 , 1 , "static" , 0 , true , 0 ,"noth" );
					//LoopOverObj( Level4_7.Bar3 , GREY_COLOR , MainPosX-10 , MainPosY-4 , 1 , "static" , 0 , true , 0 ,"noth" );

					//LoopOverObj( Level4_7.Bar4 , GREY_COLOR , MainPosX-6 , MainPosY , 1 , "static" , 0 , true , 0 ,"noth" );
					LoopOverObj( Level4_7.Bar5 , GREY_COLOR , MainPosX+2 , MainPosY-2 , 1 , "static" , 0 , true , 0 ,"noth" );
					LoopOverObj( Level4_7.Bar6 , GREY_COLOR , MainPosX-8 , MainPosY , 1 , "static" , 0 , true , 0 ,"noth" );
					
					
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+8.3, y :MainPosY-3.8,width:4.7,height:0.42}); 
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX-7.7, y :MainPosY-3.8,width:4.7,height:0.42}); 

					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+10.45, y :MainPosY-0.5,width:0.42,height:7}); 
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX-9.85, y :MainPosY-0.5,width:0.42,height:7}); 
					
					
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX-5.2, y :MainPosY+0.8,width:0.42,height:1}); 
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+5.2, y :MainPosY+0.8,width:0.42,height:1}); 

					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX+4.15, y :MainPosY+0.2,width:2.5,height:0.42}); 
					CreateObj({color:GREY_COLOR,type:"static" , shape:"box" ,  x : MainPosX-4.15, y :MainPosY+0.2,width:2.5,height:0.42}); 
					
					
					this.glass_1 = CreateObj({name:"Glass",color:GLASS_COLOR,type:"static" , shape:"box" ,  x : MainPosX+2.6, y :MainPosY+4.7,width:0.42,height:4}); 
					this.glass_2 = CreateObj({name:"Glass",color:GLASS_COLOR,type:"static" , shape:"box" ,  x : MainPosX-2.6, y :MainPosY+4.7,width:0.42,height:4}); 
					this.glass_3 = CreateObj({name:"Glass",color:GLASS_COLOR,type:"static" , shape:"box" ,  x : MainPosX-0, y :MainPosY+2.8,width:5.58,height:0.42}); 


					//this.qtar.SetLinearVelocity(new b2Vec2(-3,0));


					myImage = new Image();
					myImage.src = 'images/Kid_1.png';
					child_1 = CreateObj({name:'child_1' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX-4.0, y :MainPosY+5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_2.png';
					child_2 = CreateObj({name:'child_2' ,image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX+4  , y :MainPosY+5,radius:0.5,restitution:0,friction:0});
					
					myImage = new Image();
					myImage.src = 'images/Kid_3.png';
					child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" , x : MainPosX-0, y : MainPosY+1,radius:0.5,restitution:0,friction:0});
					
					child_1.SetLinearVelocity(  new b2Vec2(1, -2)  );
					child_2.SetLinearVelocity(  new b2Vec2(1, -2)  );
					child_3.SetLinearVelocity(  new b2Vec2(1, -2)  );
					
			  },
			  startCollide:function(contact)
			  {
				  if(contact.GetFixtureB().GetBody().details.name == "Parent")
				  {
						if(contact.GetFixtureA().GetBody().details.name.indexOf("Glass") != -1 )
						{
							destroyBody(this.glass_1 , 100);
							destroyBody(this.glass_2 , 100);
							destroyBody(this.glass_3 , 100);

							//startGlassParticle(this.glass_1.GetPosition().x , this.glass_1.GetPosition().y);
							//startGlassParticle(this.glass_2.GetPosition().x , this.glass_2.GetPosition().y);
							startGlassParticle(this.glass_3.GetPosition().x , this.glass_3.GetPosition().y);
							
							
							
							playSound("Glass");
						}
					}

			  },
			  canvasDrawForground: function()
			  {
					   
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_4_1.startLevel();
		
		