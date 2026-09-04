var Level_3_6 = {
			timerSpeed:0.03,

			startLevel: function() 
			{			
					numOfBalls = 3;
					HomePos = {"x": (canvasWidth/2.0)+150-90, "y":canvasHeight-57};
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
				
				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
					  goal = createHomeGoal(HomePos.x/ScaleFactor , HomePos.y/ScaleFactor , false);
					 
					  CreateFloor();
				   
				      //createTowerSeso(4,canvasHeight/ScaleFactor-1,2,7 , 4 , true);
					  createTowerSeso(9-3,canvasHeight/ScaleFactor,2,5 , 4 , true);
				      createTowerSeso(14-3,canvasHeight/ScaleFactor,2,4 , 4 , true);
	  
					 // createSpikesBox((canvasWidth/2.0)/ScaleFactor-5 , 3 , 1);
					  
					  createDiagonalStick({x:HomePos.x/ScaleFactor-0.2,y:HomePos.y/ScaleFactor-2.7+1.7,w:5,h:0.4, w2:3.5 , h2:2.5,color:GREY_COLOR,isFlipVer:true});
					  
					  //NO Shape
					  CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+11.55 - 1.2 -3, y:6.4+2.1 , width:0.5 , height:4.2});
					  CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+9.5-1.2 -3, y:6+1.96+0.65 , width:0.5 , height:3});

					  CreateObj({name:"Glass_Door", color:GLASS_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+9.5-1.2 -3, y:9.1+1.7+0.3 , width:0.5 , height:2.0});
					  CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x:(canvasWidth/2.0)/ScaleFactor+13.2-0.0 -1, y:8+1.7-2 , width:0.6 , height:15});
					  
					  createDiagonalStick({x:HomePos.x/ScaleFactor-6.35-0,y:HomePos.y/ScaleFactor-2.0+0.0,w:8,h:0.1, w2:5.2 , h2:3.5,color:GREY_COLOR,isFlipVer:true});

					  CreateObj({color:GREY_COLOR,type: "static" , shape:"poly" ,x:(canvasWidth/2.0)/ScaleFactor+8 -2, y:16.5+0.0 , vertices:[ [0,0] , [6,-5] , [6,0] ]});
					  
					  /*s = creatFan ((canvasWidth/2.0)/ScaleFactor+3 , 8 , 3.4 , 0.4 , true , 5 , 3 , 20, RED_COLOR);
					  s.ApplyForce(new b2Vec2(0,30) ,new b2Vec2(1,0));*/
					  
					  //Childs
					  var myImage = new Image();
					  myImage.src = 'images/Kid_1.png';
					  child_1 = CreateObj({name:'child_1',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 23.7 -3, y :canvasHeight/ScaleFactor-10.2,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_2.png';
					  child_2 = CreateObj({name:'child_2',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 8.9 -3, y :canvasHeight/ScaleFactor-8.2 ,radius:0.5,restitution:0,friction:0});
					
					  var myImage = new Image();
					  myImage.src = 'images/Kid_3.png';
					  child_3 = CreateObj({name:'child_3',image:myImage,color:'blue',density:10,type:"dynamic" , shape:"circle" ,  x : 13.2 -3, y :canvasHeight/ScaleFactor -6.2,radius:0.5,restitution:0,friction:0});
			  
			  },
			  startCollide:function(contact)
			  {
					  if(contact.GetFixtureA().GetBody().details.name == "Glass_Door" && (contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1 || contact.GetFixtureB().GetBody().details.name.indexOf("Parent") != -1))
					  {
						   startGlassParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y , null);
						   destroyBody(contact.GetFixtureA().GetBody() , 200); 
						  
						   playSound("Glass");
					  }
					  
					  if( contact.GetFixtureB().GetBody().details.name == "Parent" && (contact.GetFixtureA().GetBody().details.name == "seso"))
					  {
						  //alert( contact.GetFixtureA().GetBody().details.name );
						  playSound("Hit_Plastic");
					  }
			  },
			  checkIfWin: function()
			  {

			  }
		}
		Level_3_6.startLevel();