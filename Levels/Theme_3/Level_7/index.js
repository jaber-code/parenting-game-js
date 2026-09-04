var Level_3_7 = {
			timerSpeed:0.04,
			IsA6lg:false,
			
			fansPos:[],

			
			startLevel: function() 
			{			
					numOfBalls = 1;
					HomePos = {"x": (canvasWidth/2.0)-300, "y":canvasHeight-57};
					RestrictedArea = {"x": 0 ,"w": 600 ,"y": 0 ,"h": 480,"op":0.06 };

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
				if(!this.IsA6lg)
				{
					if(LastHitForce)
					{
						child_1.ApplyForce(  new b2Vec2(LastHitForce.x*1.5 , LastHitForce.y*1.5)  ,child_1.GetWorldCenter());
						child_2.ApplyForce(  new b2Vec2(LastHitForce.x*1.5 , LastHitForce.y*1.5)  ,child_2.GetWorldCenter());
						child_3.ApplyForce(  new b2Vec2(LastHitForce.x*1.5 , LastHitForce.y*1.5)  ,child_3.GetWorldCenter());

						this.IsA6lg = true;
					}
				}
			},
			
			reset:function()
			{
				this.fansPos = [];
				this.IsA6lg = false;
				deleteCurrentLevel();
				initGlobalVars();

				numOfBalls = 1;
				sandLevel = 0;	
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  var HalfWidth = canvasWidth/ScaleFactor;
				  var HalfHeight = canvasHeight/ScaleFactor;

					  goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					 
					  CreateFloor();
					  	
					  createSpikesBox(13.5 , 10.1 , 1);
					//  createSpikesBox(6.85 , 10.1 , 1);
					  
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:0.25 , y:canvasHeight/2/ScaleFactor , width:0.5 , height:17});
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-0.25 , y:canvasHeight/2/ScaleFactor , width:0.5 , height:17});
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-6.6 , y:canvasHeight/2/ScaleFactor , width:0.5 , height:17});
					  
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-13.2 , y:canvasHeight/2/ScaleFactor-4 , width:0.5 , height:13});
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-19.8 , y:canvasHeight/2/ScaleFactor-4 , width:0.5 , height:13});

					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-8.8 , y:canvasHeight/2/ScaleFactor-4 , width:1.2 , height:0.5});
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-15.2 , y:canvasHeight/2/ScaleFactor-4 , width:1.2 , height:0.5});
					  CreateObj({color:GREY_COLOR , type: "static" , shape:"box" , x:HalfWidth-21.8 , y:canvasHeight/2/ScaleFactor-4 , width:1.2 , height:0.5});

				   	  CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor-1.1 , y:14.9 , vertices:[ [0,0] , [8,-4] , [8,0] ]});
					  
					  this.fansPos[0] = new b2Vec2(HalfWidth-8.9,canvasHeight/2/ScaleFactor-1.2);
					  this.fansPos[1] = new b2Vec2(HalfWidth-16.0,canvasHeight/2/ScaleFactor+4.0);
					  this.fansPos[2] = new b2Vec2(HalfWidth-23.5,canvasHeight/2/ScaleFactor-1.2);
					  creatFan(HalfWidth-8.9,canvasHeight/2/ScaleFactor-1.2,3.6,0.4,true , 100 , -100 , 160, ORANGE_COLOR,false).ApplyForce(new b2Vec2(0,-60) , new b2Vec2(2,-1));
					  creatFan(HalfWidth-16.0,canvasHeight/2/ScaleFactor+4.0,3.2,0.4,true , 50 , 60 , 160, ORANGE_COLOR,false).ApplyForce(new b2Vec2(0,60) , new b2Vec2(2,0));
					  creatFan(HalfWidth-23.5,canvasHeight/2/ScaleFactor-1.2,3.6,0.4,true ,40 ,-45 , 160, ORANGE_COLOR,false).ApplyForce(new b2Vec2(0,-42) , new b2Vec2(2,0));
					  
					  

					  createSpike(7.12 ,5, "right" );
					  createSpike(7.12 ,5.5, "right" );
					  createSpike(7.12 ,6, "right" );
					  createSpike(7.12 ,6.5, "right" );
					  
					  createSpike(0.5 ,5, "right" );
					  createSpike(0.5 ,5.5, "right" );
					  createSpike(0.5 ,6, "right" );
					  createSpike(0.5 ,6.5, "right" );
					  createSpike(0.5 ,7.0, "right" );
					  createSpike(0.5 ,7.5, "right" );
					  createSpike(0.5 ,8.0, "right" );
					  createSpike(0.5 ,8.5, "right" );


					  //Childs
					  var myImage = new Image();
					  myImage.src = 'images/Kid_1.png';
					  child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : HalfWidth-8.8 , y :HalfHeight-12,radius:0.5,restitution:0,friction:0});			  
										  
					  var myImage = new Image();
					  myImage.src = 'images/Kid_2.png';
					  child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : HalfWidth-15.2 , y :HalfHeight-12 ,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_3.png';
					  child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : HalfWidth-21.8 , y :HalfHeight-12,radius:0.5,restitution:0,friction:0});
			  },
			  startCollide:function(contact)
			  {
		
			  },
			  canvasDrawForground: function()
			  {
				  drawMe7bas( this.fansPos[0]  );
				  drawMe7bas(  this.fansPos[1]  );
				  drawMe7bas(  this.fansPos[2]  );

			  },
			  
			  checkIfWin: function()
			  {

			  }
		}
		Level_3_7.startLevel();
		
		