
	  world = false;
	  isBox2dInitialized = false;
	  
	  DadImg = new Image();
	  DadImg.src = 'images/Dad.png';
	  
	  MomImg = new Image();
	  MomImg.src = 'images/Mom.png';
	  
	  hartImg = new Image(32,32);
	  hartImg.src = 'images/hart.png';
	  
	  floorImg = new Image();
	  floorImg.src = 'images/Floor.png';
	  
	  glassImg = new Image();
	  glassImg.src = 'images/Curved_glass.png';
	 
	  
	  HomeImg = new Image();
	  SelectedParentImg = new Image();
	  OtherParentImg = new Image();
	  
	  child_1 = null;
	  child_2 = null;
	  child_3 = null;
	  parentBody = null;
	  goal = null;
	  
	  reqId = 0;
	  
	  
	  endLevelIntervalId = 0;
	  startHeartParticlesAni = false;	
	  startGlassParticlesAni = false;	
	  
	  startDieParticlesAni = false;
 
	  arr_Hearts = [];
	  arr_Peices = [];
	  arr_DieParticles = [];
	   
	  numOfHearts = 4;
	  
	  numOfBalls = 0;
	  HomePos = {"x":0, "y":0};
	  RestrictedArea = {};
	  
	  useImages = true;
	  numOfChildsEnter = 0;
	  numOfChildsDeleted = 0;
	  
	  ORANGE_COLOR = "#eecc11";
	  GREY_COLOR = "#777777";
	  RED_COLOR = "#cc2222";
	  
	  GREEN_COLOR = "#22ff77";
	  
	  GLASS_COLOR = "rgba(0,150,230,0.7)";
	  
	  function createObjectFromJson(name , val, obj , scale)
	  {
		    switch(name)
			{
				case "density":
					obj.density = val;

				break;
				case "filter":
					obj.categoryBits = val.categoryBits;   
					obj.maskBits = val.maskBits;
				break;
				case "shape":
					if(val.length > 0)
						obj.shape = "poly";
					
					obj.vertices = scaleArr(indicesConvertor(val) ,scale ||1, scale||1);
				break;
				case "bounce":
					obj.restitution = val;
				break;
				case "friction":
					obj.friction = val;
				break;
				case "x":
					obj.x = val;
				break;
				case "y":
					obj.y = val;
				break;
				case "name":
					obj.name = val;
				break;
				case "color":
					obj.color = val;
				break;
			}
	  }
	  
	  function createGate(x,y,w,h,r,color)
	  {
		  var door_1 = CreateObj({density:50,color:ORANGE_COLOR,fixedAngle:false ,type: "dynamic" , shape:"poly" ,x:x  , y:y,  vertices:[[0,0],[0,-h/2],[w,-h/2],[w,h/2],[0,h/2]]});

		  obj1 = CreateObj({density:2 , color:'#777777' , fixedAngle:false , type: "static" , shape:"circle" , x:x  , y:y , radius:r });
		  createRevoluteJoint(door_1 , obj1 , new b2Vec2(0,0) , new b2Vec2(0,0) , false , 100 , 100,"green");
					
		  return door_1;
	  }
	  
	  function LoopOverObj( ObjToLoop , colorPar , xPar , yPar , scale , typePar , densityPar , isFixed , cBitsPar ,nameP,mB )
	  {
		    var arr_Shapes = [];
		    for(var i=0;i < ObjToLoop.length ; i++)
			{
					var obj = {};
					jQuery.each(ObjToLoop[i], function(i, val) {

						createObjectFromJson(i , val , obj, scale);
								
					});
					arr_Shapes[i] = obj;
			}
			
			if(cBitsPar)
				var cBite = cBitsPar;
			else
				var cBite = 0x0080;
			
			
			if(isFixed)
				 isFixed = true;
			else
				 isFixed = false;
			//alert(densityPar);

		    return CreateObj({maskBits:mB || 0xFFFF,name:nameP || "obj",categoryBits: cBite,density:densityPar||1,color:colorPar,fixedAngle:isFixed ,type: typePar , shape:"complex" , x:xPar , y:yPar, Shapes:arr_Shapes});
	  }
	  
	  function DrawJSONObj(ObjToLoop , colorPar , xPar , yPar , scale)
	  {
		    var vertices = [];
			
			ctx.fillStyle = colorPar || GREY_COLOR;
		    for(var i=0;i < ObjToLoop.length ; i++)
			{
					jQuery.each(ObjToLoop[i], function(i, val) {

						if(i == "shape")
							if(val.length > 0)
							{
								vertices = scaleArr(indicesConvertor(val) ,scale ||1, scale||1);
								
								ctx.beginPath();
						
								ctx.moveTo((xPar + vertices[0][0]) * ScaleFactor, (yPar + vertices[0][1]) * ScaleFactor);
									for (var j = 1; j < vertices.length; j++) 
									{
										ctx.lineTo((xPar + vertices[j][0]) * ScaleFactor, (yPar + vertices[j][1]) * ScaleFactor);
									}
	
									ctx.fill();
									
								ctx.closePath();
							}		
					});
			}
	  }
	   
	  function initGlobalVars()
	  {  
		  	//sym.getSymbol("sym_Game").$("txt").html(  $(window["Level_"+currentTheme+"_"+levelSelected].hint)    );
			
			//playHintAni();
			 
			//$("#Stage_sym_Game_txt").html(   window["Level_"+currentTheme+"_"+levelSelected].hint  );

		    numOfChildsEnter = 0;
			numOfChildsDeleted = 0;
			
			CreateGround();
			
			if(currentTheme == 1 && levelSelected == 2)
				ChangeBG("lbl_Sky");
			else
				ChangeBG("lbl_Floor");
	  }
	  
	  function CreateSolidBlock(xP,yP,wi,he)
	  {
			CreateObj({color:'#777777',type:"static" , shape:"box" , x:xP , y:yP , width:wi , height:he});
	  }

	  function CreateFloor(WithSpikes)
	  {
		  if(WithSpikes)
		  {
			    for(var i=0;i<=55;i++)
				{
					createSpike(i*0.5 ,canvasHeight/ScaleFactor-1.3, "top" );
				}
		  }
		  
		  CreateObj({color:'#777777',image:floorImg,type:"static" , shape:"box" , x:(canvasWidth/2.0)/ScaleFactor , y:canvasHeight/ScaleFactor-0.47 , width:784*1.1/ScaleFactor , height:49*1.1/ScaleFactor});
	  }
	  
	  function CreateGround()
	  {
			var ScaledWidth = canvasWidth/ScaleFactor;
			var ScaledHeight = canvasHeight/ScaleFactor;
			 
			//var arr = [[0-5,0-10] , [ScaledWidth+5,0-10] , [ScaledWidth+5,ScaledHeight+5] , [0-5,ScaledHeight+5] , [0-5,0-10] ];
			
			var arr = [[0-3,0-3] , [ScaledWidth+3,0-10] , [ScaledWidth+3,ScaledHeight+3] , [0-3,ScaledHeight+3] , [0-3,0-10] ];

			CreateObj({color:"green",name:"Border",isStroke:true ,type:"static" , shape:"edge" , vertices: arr , x:0,y:0});
			
			//CreateObj({name:"Border",color:'#999999',type:"static" , shape:"box" , x:(10) , y:15 , width:ScaledWidth*5 , height:1.4});

			CreateObj({color:'#999999',type:"static" , shape:"box" , x:(canvasPosition_X) , y:(canvasPosition_Y + ScaledHeight*2)/2 , width:ScaledWidth*2 , height:0.3});
	  }

	  function IsWrongPlace(ballPosX , ballPosY)
	  { 
			if(ballPosX > RestrictedArea.x/ScaleFactor && ballPosX < (RestrictedArea.x+RestrictedArea.w)/ScaleFactor && ballPosY > RestrictedArea.y/ScaleFactor && ballPosY < (RestrictedArea.y + RestrictedArea.h)/ScaleFactor)
			{
				//alert(true);
				return true;
			}
			else
			{
				//alert(false);
				return false;
			}
	  }
	  
	  function drawForbiddenArea()
	  {
			ctx.fillStyle = "rgba(32, 45, 21,"+(RestrictedArea.op||0.0)+")";
			ctx.fillRect(RestrictedArea.x, RestrictedArea.y,RestrictedArea.w , RestrictedArea.h);
			ctx.strokeStyle = "rgba(255, 255, 255,"+(RestrictedArea.op||0.0)+")";

			//ctx.strokeStyle = "rgba(255, 255, 255,"+(RestrictedArea.op||0.0)+")";
			/*var s = RestrictedArea.h/30;
			ctx.beginPath();
			for(var i=-5;i<30;i++)
			{
				ctx.moveTo(RestrictedArea.x,RestrictedArea.y+i*s);
				ctx.lineTo(RestrictedArea.x+RestrictedArea.w,RestrictedArea.y+i*s+100);
				ctx.stroke();
			}
			ctx.closePath();*/
	  }
	  
	  function createHomeGoal(xPos , yPos , withBase , cB)
	  {
		  if(withBase)
			 CreateObj({categoryBits:cB || 0 ,color:GREY_COLOR,type: "static" , shape:"box" ,x:xPos-0.02 , y:yPos+0.8 , width:4.2 ,height:0.5 });
		 
		  return CreateObj({categoryBits:cB || 0 ,name:"Goal",density:10,color:'rgba(0,0,0,0)',fixedAngle:false ,type: "static" , shape:"poly" ,x:xPos , y:yPos-0.5, vertices:  [[-1.64,1.0],[-1.64,-2.0],[1.64,-2.0],[1.64,1]] });
	  }
	  
	  function GeneralCollide(contact)
	  {
		  if((contact.GetFixtureA().GetBody().details.name == "Parent" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1) || (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1))
		  {
				playSound("Hit_1");
			
				destroyBody(parentBody , 400); //
				
				numOfHearts = 1;
				startHeartParticles(parentBody.GetPosition().x , parentBody.GetPosition().y);
		  }
		  else
		  if(contact.GetFixtureA().GetBody().details.name == "Border")
		  {
			    //alert("1");
				destroyBody(contact.GetFixtureB().GetBody() , 10);
				
				contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
		  }
		  else		  
		  if(contact.GetFixtureB().GetBody().details.name == "Border")
		  {
			    //alert("2");
			    destroyBody(contact.GetFixtureA().GetBody() , 10);

			    contact.GetFixtureA().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
	      }
		  else
		  if(contact.GetFixtureA().GetBody() == goal && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1)
		  {
				numOfChildsEnter++;
				
				playSound("EnterHome2");
				
				//alert(   contact.GetFixtureB().GetBody().details.name.replace("child_",'') )
				activateChild(   contact.GetFixtureB().GetBody().details.name.replace("child_",'') )  ;
									
				destroyBody(contact.GetFixtureB().GetBody() , 10);
				numOfHearts = 4;
				startHeartParticles(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y);
				
				GeneralCheckWin();
		  }
		  else
		  if(contact.GetFixtureB().GetBody().details.name == "Spike" && contact.GetFixtureA().GetBody().details.name.indexOf("child") != -1)
		  {
				destroyBody(contact.GetFixtureA().GetBody() , 10);
				
				playSound("Dead");
				
				switch( contact.GetFixtureA().GetBody().details.name)
				{
					case "child_1":
							startDieParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y , 'green');
					break;
					case "child_2":
							startDieParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y , 'blue');
					break;
					case "child_3":
							startDieParticle(contact.GetFixtureA().GetBody().GetPosition().x , contact.GetFixtureA().GetBody().GetPosition().y , 'pink');
					break;
				}
				
				//GeneralCheckWin();

		  }
		  else
		  if(contact.GetFixtureA().GetBody().details.name == "Spike" && contact.GetFixtureB().GetBody().details.name.indexOf("child") != -1)
		  {
				destroyBody(contact.GetFixtureB().GetBody() , 10);
				
				playSound("Dead");
				
				switch( contact.GetFixtureB().GetBody().details.name)
				{
					case "child_1":
							startDieParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y , 'green');
					break;
					case "child_2":
							startDieParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y , 'blue');
					break;
					case "child_3":
							startDieParticle(contact.GetFixtureB().GetBody().GetPosition().x , contact.GetFixtureB().GetBody().GetPosition().y , 'pink');
					break;
				}
		  }
		  
		  if(window["Level_"+currentTheme+"_"+levelSelected] && window["Level_"+currentTheme+"_"+levelSelected].startCollide)
				window["Level_"+currentTheme+"_"+levelSelected].startCollide(contact);
	  }
	  
	  
	  function BombChild(obj)
	  {
			switch( obj.details.name )
			{
				case "child_1":
						startDieParticle(obj.GetPosition().x , obj.GetPosition().y , 'green');
				break;
				case "child_2":
						startDieParticle(obj.GetPosition().x , obj.GetPosition().y , 'blue');
				break;
				case "child_3":
						startDieParticle(obj.GetPosition().x , obj.GetPosition().y , 'pink');
				break;
			}
	  }
	  
	  function GeneralPostCollide(contact,impulse)
	  {
		  if(window["Level_"+currentTheme+"_"+levelSelected] && typeof window["Level_"+currentTheme+"_"+levelSelected].endCollide === 'function') 
		  {
				window["Level_"+currentTheme+"_"+levelSelected].endCollide(contact,impulse);
		  }
	  }
	  
	  function createRevoluteJoint(body1 , body2 , vecBody1 , vecBody2 , enableMotor , motorSpeed , maxMotorTorque , color)
	  {
			var jointDef = new b2RevoluteJointDef();

			//jointDef.Initialize(body1,body2,vecBody2);
			jointDef.bodyA = body1;
			jointDef.bodyB = body2;
			 
			jointDef.localAnchorA = vecBody1;
			jointDef.localAnchorB = vecBody2;
			
			jointDef.enableMotor = enableMotor || false;
			jointDef.motorSpeed = motorSpeed || 0;
			jointDef.maxMotorTorque = maxMotorTorque || 0;

			var b = world.CreateJoint( jointDef );
			
			if(color)
				b.color = color;
			
			return b;
	  }
	 
	   var DesTimeoutId = 0;
	   function destroyBody(obj , time)
       {
		   setTimeout(function()
		   {
				   if(obj)
				   {
					    //alert(obj.details.name);
						
						if(obj.details && obj.details.name.indexOf("child") != -1)
						{
							if(window["child_"+obj.details.name.replace("child_","")] != null)
							{
								window["child_"+obj.details.name.replace("child_","")] = null;
								numOfChildsDeleted++;
								
								clearTimeout(DesTimeoutId);
								DesTimeoutId = setTimeout(GeneralCheckWin , 800);
								//GeneralCheckWin();
							}
						}
						
						world.DestroyBody(obj);
						
						obj = null;
				   }
		   },time)
       }

	  function GeneralCheckWin()
	  {
			if(window["Level_"+currentTheme+"_"+levelSelected] && window["Level_"+currentTheme+"_"+levelSelected].checkIfWin)
				window["Level_"+currentTheme+"_"+levelSelected].checkIfWin();

		    if(numOfChildsEnter == 3)
			{
				endLevel();
				return;
			}
			//alert(numOfChildsDeleted);
			if(numOfChildsDeleted >= 3)
			{
				endLevel();
				return;
			}
			//endLevel();
			
			var IsChild_1_Impossible = false;
			var IsChild_2_Impossible = false;
			var IsChild_3_Impossible = false;
			
			var velocitiesSum = 0;
			if(levelSelected < 10 && numOfBalls == 0)
			{
				for(var i=1;i<=3;i++)
				{
					velocitiesSum=0;
					if(window["child_"+i] != null)
					{
						velocitiesSum += window["child_"+i].m_linearVelocity.x;
						velocitiesSum += window["child_"+i].m_linearVelocity.y;
						
						
						//alert(i+"   "+Math.abs(velocitiesSum));
						if( Math.abs(velocitiesSum) < 0.019)
						{
							switch(i)
							{
								case 1:
									IsChild_1_Impossible = true;
								break;
								case 2:
									IsChild_2_Impossible = true;
								break;
								case 3:
									IsChild_3_Impossible = true;
								break;
							}
						}
						
					}
					else
					{
						switch(i)
						{
							case 1:
								IsChild_1_Impossible = true;
							break;
							case 2:
								IsChild_2_Impossible = true;
							break;
							case 3:
								IsChild_3_Impossible = true;
							break;
						}
						
						
					}
				}
				
				
				/*alert(IsChild_1_Impossible);
				alert(IsChild_2_Impossible);
				alert(IsChild_3_Impossible);*/
				
				if(IsChild_1_Impossible && IsChild_2_Impossible && IsChild_3_Impossible)
				{
					endLevel();
					return;
				}
			}
			
			
	  }

	  function endLevel()
       {
           if(!isLevelEnd)
           {
			   	window.cancelRequestAnimFrame(reqId);

				clearInterval(endLevelIntervalId);
                if(numOfChildsEnter > 0)
				{
					WinLevel(numOfChildsEnter);
					pauseGame();
				}
                else
				{
					LoseLevel();
					pauseGame();
				}
				   
                isLevelEnd = true;
           }
       }
		 
	  function startHeartParticles(startX , startY)
	  {
			arr_Hearts = [];
			for(var i=0;i<numOfHearts;i++)
			{
				arr_Hearts[i] = {};
				arr_Hearts[i].posX = startX*ScaleFactor;
				arr_Hearts[i].posY = startY*ScaleFactor;
				
				arr_Hearts[i].xInc = Math.random()*2-1;
				arr_Hearts[i].yInc = -(Math.random()/6+1);
				
				arr_Hearts[i].opacity = Math.random()/2 +0.5;
				arr_Hearts[i].scale = Math.random()/4 +0.6;
			}

			startHeartParticlesAni = true;
			var timer = 0;
			var id = setInterval(function()
			{
				for(var i=0;i<arr_Hearts.length;i++)
				{
					arr_Hearts[i].posX += arr_Hearts[i].xInc;
					arr_Hearts[i].posY += arr_Hearts[i].yInc;
					
				//	arr_Hearts[i].opacity -= 0.3;
				}
			
				timer += 10;
				if(timer > 500)
				{
					 startHeartParticlesAni = false;
					 clearInterval(id);
				}
			},10);
	  }
	  
	  function startGlassParticle(startX , startY , color)
	  {
			arr_Peices = [];
			for(var i=0;i<7;i++)
			{
				arr_Peices[i] = {};
				arr_Peices[i].posX = startX * ScaleFactor;
				arr_Peices[i].posY = startY * ScaleFactor;
				
				arr_Peices[i].xInc = Math.random()*2-1;
				arr_Peices[i].yInc = 1-(Math.random()*3);
				//alert(arr_Peices[i].yInc);
				
				arr_Peices[i].opacity = Math.random()/2 +0.5;
				arr_Peices[i].scale = Math.random()/4 +0.6;
				
				arr_Peices[i].num1= Math.random()*12 +25;
				arr_Peices[i].num2= Math.random()*10 +20;
				
				arr_Peices[i].color = color || "glass";
			}
			
			
			startGlassParticlesAni = true;
			var timer = 0;
			var id = setInterval(function()
			{
				for(var i=0;i<arr_Peices.length;i++)
				{
					arr_Peices[i].posX += arr_Peices[i].xInc;
					arr_Peices[i].posY += arr_Peices[i].yInc;
					
					arr_Peices[i].opacity -= 0.008;
				}
			
				timer += 10;
				if(timer > 750)
				{
					 startGlassParticlesAni = false;
					 clearInterval(id);
				}
			},10);
	  }
	  
	  function startDieParticle(startX , startY , color)
	  {
			arr_DieParticles = [];
			for(var i=0;i<7;i++)
			{
				arr_DieParticles[i] = {};
				arr_DieParticles[i].posX = startX * ScaleFactor;
				arr_DieParticles[i].posY = startY * ScaleFactor;
				
				arr_DieParticles[i].xInc = Math.random()*2-1;
				arr_DieParticles[i].yInc = 1-(Math.random()*3);
				//alert(arr_DieParticles[i].yInc);
				
				arr_DieParticles[i].opacity = Math.random()/2 +0.5;
				arr_DieParticles[i].scale = Math.random()/4 +0.6;
				
				arr_DieParticles[i].num1= Math.random()*12 +25;
				arr_DieParticles[i].num2= Math.random()*10 +20;
				
				arr_DieParticles[i].color = color || "glass";
				arr_DieParticles[i].rad = Math.random()*5 +1;
			}
			
			
			startDieParticlesAni = true;
			var timer = 0;
			var id = setInterval(function()
			{
				for(var i=0;i<arr_DieParticles.length;i++)
				{
					arr_DieParticles[i].posX += arr_DieParticles[i].xInc;
					arr_DieParticles[i].posY += arr_DieParticles[i].yInc;
					
					arr_DieParticles[i].opacity -= 0.008;
				}
			
				timer += 10;
				if(timer > 750)
				{
					 startDieParticlesAni = false;
					 clearInterval(id);
				}
			},10);
	  }
	  
	  
	  function CreateGlassCage(xPos ,yPos ,xRad ,yRad ,size, disp)
	  {
			return drawCirclePath(xPos , yPos ,5 ,2.0 ,22,1.75, "rgba(70,170,255,0.6)" , "Glass");
	  }
	 
	  function deleteCurrentLevel()
	  {
				LastHitForce = null;
				pauseGame();
				var jointObj = world.GetJointList();
				while (jointObj) 
				{
					next = jointObj.GetNext();
					if (jointObj) 
						world.DestroyJoint(jointObj);
					
					jointObj = next;
				}
			
				var bodyObj = world.GetBodyList();
				while (bodyObj) 
				{
					next = bodyObj.GetNext();

					if (bodyObj) 
						world.DestroyBody(bodyObj);
					
					bodyObj = next;
				}  
				isMouseDown = false;
				isLevelEnd = false;
				
				clearInterval(endLevelIntervalId);
				endLevelIntervalId = 0;
				  
				numOfChildsEnter = 0;
				numOfChildsDeleted = 0;
	  }

	/* 
	document.addEventListener('webkitvisibilitychange', function() 
	{
		  if (document.webkitHidden) 
		  {
			  if(!Is_Sound_Muted)
				  muteSound();
		
		  } 
		  else 
		  {
			  if(Is_Sound_Muted)
				  muteSound();

		  }
    }, false);
	*/
	
	window.addEventListener('blur', onBlur);
	window.addEventListener('focus', onFocus);
	function onFocus()
	{
		 //alert(11);
		 if( !("Is_Sound_Muted" in window) )
			 return;
		 
		 if(!Is_Sound_Muted )//muteSound();
			createjs.Sound.muted = false;
		
	}
	function onBlur()
	{
		if( !("Is_Sound_Muted" in window) )
			 return;
		 
		//alert(22);
		if( !Is_Sound_Muted )
			 createjs.Sound.muted = true;
	}
	
	function pauseGame()
	{	
		//timeStep = 0;
		window.cancelRequestAnimFrame(reqId);
	}
	
	function resumeGame()
	{
		//timeStep = 1/60;
		window.cancelRequestAnimFrame(reqId);
		reqId = requestAnimFrame(update);
	}

	  function initBox2D()
	  {
	  	   b2Vec2 = Box2D.Common.Math.b2Vec2,
		   b2BodyDef = Box2D.Dynamics.b2BodyDef,
		   b2Body = Box2D.Dynamics.b2Body,
		   b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
		   b2Fixture = Box2D.Dynamics.b2Fixture,
		   b2World = Box2D.Dynamics.b2World,
		   b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
		   b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
		   b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
		   b2Listener = Box2D.Dynamics.b2ContactListener;
		   b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
		   
		   b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;
		   b2AABB = Box2D.Collision.b2AABB;
		   b2MassData = Box2D.Collision.Shapes.b2MassData,
		   b2TestOverlap = Box2D.Collision.b2TestOverlap;
		   
		   
		   world = new b2World(new b2Vec2(0, 10),true);
	  }
	  
	  window.cancelRequestAnimFrame = ( function() {
			return window.cancelAnimationFrame          ||
				window.webkitCancelRequestAnimationFrame    ||
				window.mozCancelRequestAnimationFrame       ||
				window.oCancelRequestAnimationFrame     ||
				window.msCancelRequestAnimationFrame        ||
				clearTimeout
	  })();

	  window.requestAnimFrame = (function(){
				  
		  return  window.requestAnimationFrame       || 
				  window.webkitRequestAnimationFrame || 
				  window.mozRequestAnimationFrame    || 
				  window.oRequestAnimationFrame      || 
				  window.msRequestAnimationFrame     || 
				  
				  function( callabck, element )
				  {
						window.setTimeout(callabck, 1000 / 60);
				  };	
	  })();

	  lastLoop = 0;

	 function update() 
	 {
		 if( window["Level_"+currentTheme+"_"+levelSelected] )
			 window["Level_"+currentTheme+"_"+levelSelected].handleGameLogic();

		 //child_1.SetLinearVelocity(new b2Vec2(0,-5));
		 world.Step(timeStep  , 10 , 10);
		 world.DrawDebugData();

	     //child_1.SetLinearVelocity(new b2Vec2(0,-5));
				 
		 canvasDraw();
		 world.ClearForces();
		 
		 reqId = requestAnimFrame(update);
		 
		 var thisLoop = new Date;
		 var fps = 1000 / (thisLoop - lastLoop);
		 lastLoop = thisLoop;
		 
		// $("#Stage_Text").html("FPS: "+Math.round(fps));
		
		if(window["Level_"+currentTheme+"_"+levelSelected])
		   timerComputation( window["Level_"+currentTheme+"_"+levelSelected].timerSpeed );
	 }

	 function initBox2dEnv()
	 {
				initBox2D();

				if(!IS_SMART_PHONE)
				{
					canvas.addEventListener("mousedown",onMouseDown, true);
					document.addEventListener("mouseup",onMouseUp, true);
				}
				else
				{
					canvas.addEventListener("touchstart",onMouseDown, true);
					document.addEventListener("touchend",onMouseUp, true);
				}

				var listener = new b2Listener;
				listener.BeginContact = GeneralCollide;
				
				listener.PostSolve = GeneralPostCollide;

				world.SetContactListener(listener);
					
				reqId = requestAnimFrame(update);
				setupDebugDraw();	
				
				isBox2dInitialized = true;
				
				CreateGround();
	 }
	 

	  function onMouseDown(e)
	  {	  
	      //playSound("hitBall");
		  if(isGamePaused)
			  return;
          if( !isLevelEnd )
          {
			  if(!isMouseDown)
			  {
				  if(numOfBalls > 0)
				  {
					  if(IS_SMART_PHONE)
					  {
						
						   firstMX = mouseX = (e.changedTouches[0].pageX - canvasPosition_X)/zoomScale;
						   firstMY = mouseY = (e.changedTouches[0].pageY - canvasPosition_Y)/zoomScale;
					  } 
					  else
					  {
						   firstMX = mouseX = (  e.pageX - canvasPosition_X)/zoomScale;
						   firstMY = mouseY = (  e.pageY - canvasPosition_Y)/zoomScale;
					  }
					  
					  //alert(canvas);
					  if(!IS_SMART_PHONE)
						  canvas.addEventListener("mousemove", handleMouseMove, true);
					  else
						  canvas.addEventListener("touchmove", handleMouseMove, true);

					  isMouseDown = true;
					  handleMouseMove(e);
				  }
			  }
			  else
			  {
				  onMouseUp(e);
			  }
          }
	  }
	  
	  LastHitForce = null;
	  function onMouseUp(e)
	  {
          if(isMouseDown)
          {
                  isMouseDown = false;
                  var centerX = firstMX;
                  var centerY = firstMY;

                  var FX = -30 * ( mouseX - centerX );
                  var FY = -30 * ( mouseY - centerY );
				  
				  if(RestrictedArea && IsWrongPlace(mouseX/ScaleFactor  ,  mouseY/ScaleFactor))
				  {
					  return;
				  }
					
				  parentBody = CreateObj({image:SelectedParentImg,categoryBits:0x0040,maskBits:0xFFFF & ~0x8000  ,name:"Parent",color:'rgba(0, 0, 255, 0.5)',density:3,type:"dynamic" , shape:"circle" , x : mouseX/ScaleFactor , y : mouseY/ScaleFactor ,radius:0.6});
                  parentBody.ApplyForce(new b2Vec2(FX, FY),parentBody.GetWorldCenter());
				  
				  LastHitForce = new b2Vec2(FX, FY);
				  
				  if(currentTheme == 3 && levelSelected == 2)
					  window["Level_"+currentTheme+"_"+levelSelected].CreateOtherParent();
				  
				  
				  //if(window["Level_"+currentTheme+"_"+levelSelected].MoveChilds)
				  //    window["Level_"+currentTheme+"_"+levelSelected].MoveChilds();
						  

				  if(!IS_SMART_PHONE)
					  canvas.removeEventListener("mousemove", handleMouseMove, true);
				  else
					  canvas.removeEventListener("touchmove", handleMouseMove, true);
						   
				  numOfBalls--;
				  setTries(numOfBalls);

				  destroyBody(parentBody , 3000);
					  
				  if(numOfBalls == 0)
					  endLevelIntervalId = setInterval(GeneralCheckWin,3300);
          }
	  }
	  
	  function handleMouseMove(e) 
	  {
		  //alert("move");
          if(IS_SMART_PHONE)
          {
               mouseX = (e.changedTouches[0].pageX - canvasPosition_X)/zoomScale;
		       mouseY = (e.changedTouches[0].pageY - canvasPosition_Y)/zoomScale;
          } 
		  else
          {
			   mouseX = (  e.pageX - canvasPosition_X)/zoomScale;
			   mouseY = (  e.pageY - canvasPosition_Y)/zoomScale;
          }
		  
		//  alert(mouseX +"  "+ zoomScale);
          
       /*   if(mouseX > canvasPosition_X+canvas.width)
              mouseX = canvasPosition_X+canvas.width-10;
          
          if(mouseX < canvasPosition_X)
              mouseX = canvasPosition_X + 10;
          
          if(mouseY > canvasPosition_Y+canvas.height)
              mouseY = canvasPosition_Y+canvas.height-10;
          
          if(mouseY < canvasPosition_Y)
              mouseY = canvasPosition_Y + 10;*/
	  };
	  
	  function createSpike(xPos,yPos , dir , name)
	  {
		  switch(dir)
		  {
			  case "top":
					return CreateObj({name: "Spike",maskBits:(0xFFFF & ~0x0400),color:RED_COLOR ,type: "static" , shape:"poly" ,x:xPos,y:yPos , vertices:[ [0,0] , [0.2,-0.5] , [0.4,0] ]});
			  break;
			  case "bottom":
			  		return CreateObj({name: "Spike",maskBits:(0xFFFF & ~0x0400),color:RED_COLOR ,type: "static" , shape:"poly" ,x:xPos,y:yPos , vertices:[ [0.4,0] , [0.2,0.5] , [0,0] ]});  
			  break;
			  case "right":
			  		return CreateObj({name: "Spike",maskBits:(0xFFFF & ~0x0400),color:RED_COLOR ,type: "static" , shape:"poly" ,x:xPos,y:yPos , vertices:[ [0,0] , [0.5,0.2] , [0,0.4] ]});
			  break;
			  case "left":
			  		return CreateObj({name: "Spike",maskBits:(0xFFFF & ~0x0400),color:RED_COLOR ,type: "static" , shape:"poly" ,x:xPos,y:yPos , vertices:[ [0,0.4] , [-0.5,0.2] , [0,0] ]});

			  break;
		  }
	  }

	  function createSpikesBox(xPos , yPos , thickness)
	  {
		  	CreateObj({color:GREY_COLOR,type: "static" , shape:"box" ,x: xPos , y: yPos , width: thickness , height: thickness});
			
			createSpike(xPos + thickness/2.0,yPos+0.05 , "right");
			createSpike(xPos + thickness/2.0,yPos-thickness/2.0 +0.05, "right");
			
			createSpike(xPos - thickness/2.0,yPos +0.05, "left");
			createSpike(xPos - thickness/2.0,yPos-thickness/2.0 +0.05, "left");
			
			createSpike(xPos+0.05 ,yPos-thickness/2 , "top");
			createSpike(xPos- thickness/2 +0.05,yPos-thickness/2 , "top");
			
			createSpike(xPos +0.05,yPos+thickness/2 , "bottom");
			createSpike(xPos- thickness/2 +0.05,yPos+thickness/2 , "bottom");
			
	  }

	  function creatFan(xPos,yPos,FanW,FanH,enableMotor , motorSpeed , maxMotorTorque , den, color,IsReRope)
	  {
		    CreateObj({color:ORANGE_COLOR ,maskBits:~0xFFFF,type: "static" , x:xPos,y:yPos,shape:"circle" ,radius:0.22});
			CreateObj({color:GREY_COLOR ,maskBits:~0xFFFF,type: "static" , x:xPos,y:yPos,shape:"circle" ,radius:0.42});
			
			var rect = CreateObj({density:den||70,color:color || ORANGE_COLOR ,fixedAngle:false ,type: "dynamic" , shape:"box" ,x:xPos,y:yPos , width:FanW , height:FanH});
			var cBox = CreateObj({density:den||70,color:color || ORANGE_COLOR ,fixedAngle:false ,type: "static" , x:xPos,y:yPos,shape:"circle" ,radius:0.16});
			
			var rope = createRevoluteJoint(rect , cBox , new b2Vec2(0, 0) , new b2Vec2(0, 0),enableMotor || false , motorSpeed || 0 , maxMotorTorque || 0);
			
			if(IsReRope)
			{
				return rope;
			}
			else
			{
				return rect;
			}
	  }
	  
	  function createHammer(xPos,yPos , din , color)
	  {
		    var shape1 = {color:color,type:"kin",shape:"poly",vertices:[[-1.9,-1.1],[-1.9,0.3],[-3.4,0.3],[-3.4,-1.1]]};
			var shape2 = {color:color,type:"kin",shape:"poly",vertices:[[0,0.25],[-1.9,0.25],[-1.9,-0.25],[0,-0.25]]};
								
			var obj1 = CreateObj({name:"hammer",density:din,color:color,fixedAngle:false ,type: "dynamic" , shape:"complex" ,x:xPos  , y:yPos,  Shapes:[shape1,shape2]});			
			var obj2 = CreateObj({color:color , fixedAngle:false , type: "static" , shape:"circle" , x:xPos  , y:yPos , radius:0.2 });
			createRevoluteJoint(obj1 , obj2 , new b2Vec2(0,0) , new b2Vec2(0,0) , true , 0 , 0,"green");
								
			CreateObj({name:"HammerHit",categoryBits:0x8000,  color:null,type:"static",shape:"box",x:xPos-0.7,y:yPos+0.36 , width:0.2,height:0.2});

			return obj1;
	  }
	  	  
	  
	 function canvasDraw()
	 {
			///Draw Box2D Bodies
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			
			if(window["Level_"+currentTheme+"_"+levelSelected] && window["Level_"+currentTheme+"_"+levelSelected].canvasDraw)
				window["Level_"+currentTheme+"_"+levelSelected].canvasDraw();

			if(RestrictedArea)
				drawForbiddenArea();
			
			
			var bodyObj = world.GetBodyList();
			while (bodyObj) 
			{
				if (bodyObj) 
					DrawCanvasObj(bodyObj);
				
				bodyObj = bodyObj.GetNext();
			}  
			
			var jointObj = world.GetJointList();
			while (jointObj) 
			{
				if (jointObj) 
					DrawCanvasObj(jointObj);
				
				jointObj = jointObj.GetNext();
			}

			//Draw Balls count
			/*
			ctx.fillStyle = "#777777";
			ctx.beginPath();
				ctx.drawImage(SelectedParentImg, canvasPosition_X+150,canvasPosition_Y+20 , 30,30);
				ctx.font = "24px Arial";
				ctx.fillText("x"+numOfBalls,canvasPosition_X+190,canvasPosition_Y+44);
			ctx.closePath();
			*/
			
			//Draw Home
			if(HomePos)
				ctx.drawImage(HomeImg, HomePos.x-60,HomePos.y-86 , 483*0.25,408*0.25);
			
			//Draw current ball
		    if(isMouseDown)
		    {
				ctx.strokeStyle = "green";
				ctx.beginPath();
					ctx.lineTo(firstMX , firstMY);
					ctx.lineTo(mouseX , mouseY);
				ctx.closePath();
				ctx.stroke();
				
				ctx.drawImage(SelectedParentImg, mouseX-ScaleFactor*1.2/2,mouseY-ScaleFactor*1.2/2 , ScaleFactor*1.2,ScaleFactor*1.2);
		    }
			
			if(window["Level_"+currentTheme+"_"+levelSelected] && window["Level_"+currentTheme+"_"+levelSelected].canvasDrawForground)
				window["Level_"+currentTheme+"_"+levelSelected].canvasDrawForground();
			
			if(startHeartParticlesAni)
			{
				for(var i=0;i<arr_Hearts.length;i++)
					drawHeart(arr_Hearts[i].opacity , arr_Hearts[i].scale ,arr_Hearts[i].posX , arr_Hearts[i].posY);		
			}
			
			if(startGlassParticlesAni)
			{
				for(var i=0;i<arr_Peices.length;i++)
					drawTriParticle(arr_Peices[i].opacity , arr_Peices[i].scale ,arr_Peices[i].posX , arr_Peices[i].posY , arr_Peices[i].num1 , arr_Peices[i].num2 ,arr_Peices[i].color );		
			}
			
			
			if(startDieParticlesAni)
			{
				for(var i=0 ; i < arr_DieParticles.length ; i++)
					drawDieParticle(arr_DieParticles[i].opacity , arr_DieParticles[i].scale ,arr_DieParticles[i].posX , arr_DieParticles[i].posY , arr_DieParticles[i].rad ,arr_DieParticles[i].color );		
			}
	 }	  
	 
	 function drawHeart(op , scale , particlesX , particlesY )
	 {
		    // ctx.save();
		    // ctx.globalAlpha  = op;
			ctx.drawImage(hartImg, particlesX , particlesY, 32*scale,32*scale);
			//ctx.restore();
	 }
	 
	 function drawTriParticle(op , scale , particlesX , particlesY , num1 ,num2,color )
	 {
	
		 if(color == "glass")
			 ctx.fillStyle = "rgba(0,150,240,"+op+")";
		 else
			 ctx.fillStyle = "rgba(238,204,17,"+op+")";
		 

		 ctx.beginPath();
				ctx.moveTo(particlesX+num1/3,particlesY);
				ctx.lineTo(particlesX + num1,particlesY+ num1/2);
				ctx.lineTo(particlesX+num2,particlesY+num2+2);
		 ctx.closePath();
		 ctx.fill();
	 }
	 
	 
	 function drawDieParticle(op , scale , particlesX , particlesY , r ,color )
	 {
			switch(color)
			{
				case "blue":
				    ctx.fillStyle = "rgba(70,70,200,"+op+")";
				break;
				case "green":
				    ctx.fillStyle = "rgba(70,200,70,"+op+")";
				break;
				case "pink":
				    ctx.fillStyle = "rgba(255,105,180,"+op+")";
				break;
			}
			
		
			ctx.beginPath();
			ctx.arc(particlesX,particlesY,r,0,2*Math.PI);

				ctx.closePath();

			ctx.fill();
	 }
	  
	 function setupDebugDraw() 
	 {
		   var debugDraw = new b2DebugDraw();
		   debugDraw.SetSprite(ctx);
		   debugDraw.SetDrawScale(ScaleFactor);
		   debugDraw.SetFillAlpha(0.8);
		   debugDraw.SetLineThickness(1.0);
		   debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
		   world.SetDebugDraw(debugDraw);
	 }
	  
	  function CreateObj(details)
	  {
			var bodyDef = new b2BodyDef;
			switch(details.type)
			{
				case "static":
					bodyDef.type = b2Body.b2_staticBody;
				break;
				case "dynamic":
					bodyDef.type = b2Body.b2_dynamicBody;
				break;
				case "kin":
					bodyDef.type = b2Body.b2_kinematic;
				break;
			}

			bodyDef.position.x = details.x || 0;
			bodyDef.position.y = details.y || 0;
					  
			bodyDef.fixedRotation = details.fixedAngle || false;
			
			
			bodyDef.allowSleep = details.allowSleep || true;
			bodyDef.awake = details.awake || true;
			
			var b = world.CreateBody(bodyDef);
			
			b.details = details;///Important for rendering to combine bxo2d properties and canvas properties together
			
			b.details.name = details.name || "NoName";
			
			var fixDef = new b2FixtureDef();
			fixDef.density = details.density || 1.0;
			fixDef.friction = details.friction || 0.1;
			fixDef.restitution = details.restitution || 0.5;
			fixDef.mass = details.mass || 1;
			
			if(details.filter)
				fixDef.filter.groupIndex = details.filter;
				
			if(details.categoryBits)
				fixDef.filter.categoryBits = details.categoryBits;
				
			if(details.maskBits)
				fixDef.filter.maskBits = details.maskBits;
			
			switch(details.shape)
			{
				case "complex":
				var arrOfShapes = details.Shapes;
				
				for(var i=0;i<arrOfShapes.length;i++)
				{
						var shapeObj = arrOfShapes[i];
						switch(shapeObj.shape)
						{
							case "box":
								fixDef.shape = new b2PolygonShape();
								fixDef.shape.SetAsBox( (shapeObj.width / 2) || 2 , (shapeObj.height / 2) || 2);
								break;
							case "circle":
								fixDef.shape = new b2CircleShape(shapeObj.radius);
							break;
							case "poly":
								fixDef.shape = new b2PolygonShape();
								
								vecs = [];
								for(var j=0 ; j< shapeObj.vertices.length ; j++)
								{
									cc = new b2Vec2();
									cc.Set(shapeObj.vertices[j][0],shapeObj.vertices[j][1]);
									vecs[j] = cc;
								}	
							  
								fixDef.shape.SetAsArray(vecs , vecs.length);
							break;
						}
						
					   fixDef.density = shapeObj.density || fixDef.density;
					   fixDef.friction = shapeObj.friction || 	fixDef.friction;
					   fixDef.restitution = shapeObj.restitution || fixDef.restitution;
					   fixDef.mass = shapeObj.mass || fixDef.mass;
						
					   b.CreateFixture(fixDef);
				}
				break;
				case "box":
					 fixDef.shape = new b2PolygonShape();
					 fixDef.shape.SetAsBox( (details.width / 2) || 2 , (details.height / 2) || 2);
					 b.CreateFixture(fixDef);
					 break;
				case "circle":
					 fixDef.shape = new b2CircleShape(details.radius);
					 b.CreateFixture(fixDef);
				break;
				case "poly":
					 fixDef.shape = new b2PolygonShape();
					
					 vecs = [];
					 for(var i=0 ; i< details.vertices.length ; i++)
					 {
						cc = new b2Vec2();
						cc.Set(details.vertices[i][0],details.vertices[i][1]);
						vecs[i] = cc;
					 }	
				  
					 fixDef.shape.SetAsArray(vecs , vecs.length);
					 b.CreateFixture(fixDef);
				break;
				case "edge":
					 fixDef.shape = new b2PolygonShape();
					
					 vecs = [];
					 for(var j=0 ; j< details.vertices.length-1 ; j++)
					 {
						 var vx = new b2Vec2();
						 vx.Set(details.vertices[j][0] , details.vertices[j][1]);
						 
						 var vy = new b2Vec2();
						 vy.Set(details.vertices[j+1][0] , details.vertices[j+1][1]);
						 
						 fixDef.shape.SetAsEdge(vx , vy);
					 	 b.CreateFixture(fixDef);
					 }	
	  
				break;
			}
			return b;
	  }
		
		
		
	  function DrawCanvasObj(obj)
	  {
		  	ctx.lineWidth = 2;

			if (obj && obj.m_bodyA)
			{
				var x1 = obj.m_bodyA.GetPosition().x;// + obj.m_localAnchor1.x;
				var y1 = obj.m_bodyA.GetPosition().y;// + obj.m_localAnchor1.y;

				var x2 = obj.m_bodyB.GetPosition().x;// + obj.m_localAnchor2.x;
				var y2 = obj.m_bodyB.GetPosition().y;// + obj.m_localAnchor2.y;

				if(obj.color)
				{
					ctx.strokeStyle = obj.color;
					ctx.beginPath();
					ctx.lineWidth = 1;
						ctx.moveTo(x1 * ScaleFactor, y1 * ScaleFactor);
						ctx.lineTo(x2 * ScaleFactor, y2 * ScaleFactor);		
					ctx.closePath();
					ctx.stroke();
				}
			}
	  
			//Draw the shape outline if the shape has a color or image
			if ( obj && obj.details && (obj.details.color || obj.details.image))
			{
				var pos = obj.GetPosition();
				var angle = obj.GetAngle();
				
				ctx.save();
				ctx.translate(pos.x * ScaleFactor, pos.y * ScaleFactor);
				
				ctx.rotate(angle);
				ctx.translate(-pos.x * ScaleFactor, -pos.y * ScaleFactor);
				
				ctx.fillStyle = obj.details.color;
				ctx.strokeStyle = obj.details.color;
				
				
				if(obj.details.name == "child_1")
					ctx.fillStyle = "green";
				else
				if(obj.details.name == "child_2")
					ctx.fillStyle = "blue";
				else
				if(obj.details.name == "child_3")
					ctx.fillStyle = "#FF69B4";

				
				ctx.lineWidth = obj.details.lineThickness || 2;
				
				switch (obj.details.shape) {
					case "complex":
					var arrOfShapes = obj.details.Shapes;
					ctx.beginPath();
					
					for(var i=0;i < arrOfShapes.length;i++)
					{
							var shapeObj = arrOfShapes[i];
							switch(shapeObj.shape)
							{
								case "box":
									ctx.fillRect((pos.x - shapeObj.width/2)*ScaleFactor , (pos.y - shapeObj.height/2)*ScaleFactor ,shapeObj.width * ScaleFactor, shapeObj.height * ScaleFactor);
									break;
								case "circle":
									//ctx.beginPath();
										ctx.arc(pos.x*ScaleFactor, pos.y * ScaleFactor, shapeObj.radius*ScaleFactor, 0, Math.PI * 2);
									//ctx.closePath();
								break;
								case "poly":
				
									 var points = shapeObj.vertices;   //[[0.8,0],[0.8,-2],[1.1,-2],[1.1,0]]
									// ctx.beginPath();
										
									 ctx.moveTo((pos.x + points[0][0]) * ScaleFactor, (pos.y + points[0][1]) * ScaleFactor);
											for (var j = 1; j < points.length; j++) 
											{
												ctx.lineTo((pos.x + points[j][0]) * ScaleFactor, (pos.y + points[j][1]) * ScaleFactor);
											}
									//ctx.closePath();
								break;
							}
					}
					
					if(obj.details.image && useImages)
					{
						//ctx.fillStyle = obj.details.image;
						ctx.clip();	
						ctx.drawImage(obj.details.image, pos.x-100, pos.y-100 , 600,600);
					}
					else
					{
						ctx.fill();
					}

					ctx.closePath();
					break;
					case "circle":
						ctx.beginPath();
							ctx.arc(pos.x*ScaleFactor, pos.y * ScaleFactor, obj.details.radius*ScaleFactor, 0, Math.PI * 2);
							if(obj.details.image && useImages)
							{
								//alert(1);
								//ctx.clip();	
								ctx.drawImage(obj.details.image, (pos.x - obj.details.radius)*ScaleFactor , (pos.y - obj.details.radius)*ScaleFactor ,(obj.details.radius) * ScaleFactor*2, (obj.details.radius) * ScaleFactor*2);
							}
							else
							ctx.fill();
						ctx.closePath();

						break;
					case "poly":
						var points = obj.details.vertices;   //[[0.8,0],[0.8,-2],[1.1,-2],[1.1,0]]
						ctx.beginPath();
						
						ctx.moveTo((pos.x + points[0][0]) * ScaleFactor, (pos.y + points[0][1]) * ScaleFactor);
							for (var i = 1; i < points.length; i++) 
							{
								ctx.lineTo((pos.x + points[i][0]) * ScaleFactor, (pos.y + points[i][1]) * ScaleFactor);
							}
							
							if(obj.details.image && useImages)
							{
								ctx.clip();	
								ctx.drawImage(obj.details.image, pos.x*ScaleFactor-100, pos.y*ScaleFactor-100,100,100 );
							}
							else
							{
								ctx.fill();
							}
						ctx.closePath();

						break;
					case "box":
						if(obj.details.image && useImages)
							ctx.drawImage(obj.details.image, (pos.x - obj.details.width/2)*ScaleFactor , (pos.y - obj.details.height/2)*ScaleFactor ,obj.details.width * ScaleFactor, obj.details.height * ScaleFactor);
						else
							ctx.fillRect((pos.x - obj.details.width/2)*ScaleFactor , (pos.y - obj.details.height/2)*ScaleFactor ,obj.details.width * ScaleFactor, obj.details.height * ScaleFactor);
						break;
					case "edge":	
						var points = obj.details.vertices;   //[[0.8,0],[0.8,-2],[1.1,-2],[1.1,0]]
						ctx.beginPath();
						ctx.moveTo((pos.x + points[0][0]) * ScaleFactor, (pos.y + points[0][1]) * ScaleFactor);
						
						for (var i = 1; i < points.length; i++) 
						{
							ctx.lineTo((pos.x + points[i][0]) * ScaleFactor, (pos.y + points[i][1]) * ScaleFactor);
						}
						
						if(obj.details.isStroke)
							ctx.stroke();
						else
							ctx.fill();

						ctx.closePath();

					default:
				}
			}
		 
			// If an image property is set, draw the image.
			if (obj && obj.details && obj.details.image) 
			{
				switch (obj.details.shape) 
				{
					case "circle":
					/*	ctx.beginPath();
							ctx.arc(pos.x*ScaleFactor, pos.y * ScaleFactor, obj.details.radius*ScaleFactor, 0, Math.PI * 2, true);
							ctx.clip();	
							ctx.drawImage(obj.details.image, (pos.x - obj.details.radius)*ScaleFactor , (pos.y - obj.details.radius)*ScaleFactor ,obj.details.radius * ScaleFactor*2, obj.details.radius * ScaleFactor*2);
						ctx.closePath();*/
						break;
					case "poly":
								
						break;
					case "box":
					//	ctx.drawImage(obj.details.image, (pos.x - obj.details.width/2)*ScaleFactor , (pos.y - obj.details.height/2)*ScaleFactor ,obj.details.width * ScaleFactor, obj.details.height * ScaleFactor);
					default:
						break;
				}
			}
			ctx.restore();
	  }
	  
//----------  OBJECTS CREATION  -----------//
	  function drawCirclePath(xPos ,yPos ,xRad ,yRad ,size, disp, colorP , nameP,line,typeP,mb)
	  {
			var angle = 0;
			var arr = [[]];
			for (var i = 0; i <= size; i++) 
			{
				arr[i] = [0];
				arr[i][0] = xRad * Math.cos(angle/360+disp) + xPos;
				arr[i][1] = yRad * Math.sin(angle/360+disp) + yPos;

				angle += 45;
			}
			
			if(mb)
				return CreateObj({name:nameP || "" , maskBits:mb ,color:colorP,lineThickness:line||9,isStroke:true,density:9999,type:typeP||"static" , shape:"edge" , vertices: arr});
			else
				return CreateObj({name:nameP || "" , color:colorP,lineThickness:line||9,isStroke:true,density:9999,type:typeP||"static" , shape:"edge" , vertices: arr});

	  }
	  
	  function create2Edges(xPos , yPos , w , h , w2 ,h2, disBet,isFlip)
	  {
		  var shape1 = {shape:"box" ,width:w , height:h};
		  if(isFlip)
		  {
				var shape2 = {shape:"poly" ,vertices:flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],true,false)};
		  }
		  else
		  {
				var shape2 = {shape:"poly" ,vertices:[[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]]};
		  }
			
	  	  return CreateObj({color:'#777777', mass:0 , density:5.0 , type:"static" , shape:"complex" , x: xPos , y: yPos,Shapes:[shape1,shape2]});
	  }
	  
	  
	  function create2EdgesObj(obj)
	  {
		  var w = obj.w||1;
		  var h = obj.h||1;
		  
		  var w2 = obj.w2||1;
		  var h2 = obj.h2||1;
		  
		  var disBet = obj.disBet||0.2;
				  
		  var shape1 = {shape:"box" ,width: w || 1 , height: h || 1};
		  if(obj.isFlipVer)
		  {
				 if(obj.isFlip)
				 {
						var shape2 = {shape:"poly" ,vertices:flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],true,true)};
				 }
				 else
				 {
						var shape2 = {shape:"poly" ,vertices:flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]], false, true)};
				 }
		  }
		  else
		  {
				  if(obj.isFlip)
				  {
						var shape2 = {shape:"poly" ,vertices:flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],true,false)};
				  }
				  else
				  {
						var shape2 = {shape:"poly" ,vertices:[[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]]};
				  }
		  }
	  	  return CreateObj({color:obj.color || null,type:"static" , shape:"complex" , x: obj.x , y: obj.y,Shapes:[shape1,shape2]});
	  }
	  
	  function createDiagonalStick(obj)
	  {
		  
		  var w = obj.w||1;
		  var h = obj.h||1;
		  
		  var w2 = obj.w2||1;
		  var h2 = obj.h2||1;

		  var disBet = obj.disBet||0.2;
  
		  if(obj.isFlipVer)
		  {
				  if(obj.isFlip)
				  {
						var ver = flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],true,true);
				  }
				  else
				  {
						var ver = flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],false,true);
				  }
		  }
		  else
		  {
				  if(obj.isFlip)
				  {
						var ver = flipArr([[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]],true,false);
				  }
				  else
				  {
						var ver = [[w/2-disBet,h/2],[w/2+h/2-disBet,-h/2],[w/2+w2-disBet,h2],[w/2+w2-h/2-disBet,h2+h]];
				  }
		  }
			

	  	  return CreateObj({color:obj.color || null,type:"static" , shape:"poly" , x: obj.x , y: obj.y,vertices:ver});
	  }
	  
	  function createTowerSeso(xPos,yPos,wid,hei ,din ,IsFlip)
	  {
		  if(IsFlip)
		  {
			    var shape1 = { shape:"box" , width:4.6,height:0.3};
				var shape2 = { shape:"poly" ,vertices: flipArr([[-2.3+4.2,-0.1],[-2.3+4.2,-0.8],[-1.9+4.2,-0.8],[-1.9+4.2,-0.1]],  true, false )};
				//var shape3 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.2],[-1.9+4.2,-0.6],[-1.9+4.2,-0.2]]};
				var seso1 = CreateObj({name:"seso",color:ORANGE_COLOR,fixedAngle:false , mass:0 , density:(din||4) , type:"dynamic" , shape:"complex" , x:xPos-2 , y:yPos+2 ,Shapes:[shape1,shape2]});
				
				var tower = CreateObj({name:"Tower1",color:GREY_COLOR,fixedAngle:false , mass:0 , density:1.0 , type:"static" , shape:"poly" , x:xPos , y:yPos ,vertices:[[-(wid/2.2),0],[-(wid/2.2),-hei],[0,-(hei+1)],[(wid/2.2),-hei],[(wid/2.2),0]]});

				CreateObj({type:"static" , shape:"box" , x:xPos , y:(yPos - hei) , width:1,height:1});
				var rope = createRevoluteJoint(tower , seso1 , new b2Vec2(0,-(hei+1)) , new b2Vec2(0,0)); 
		  }
		  else
		  {
			    var shape1 = { shape:"box" , width:4.6,height:0.3};
				var shape2 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.1],[-2.3+4.2,-0.8],[-1.9+4.2,-0.8],[-1.9+4.2,-0.1]]};
				//var shape3 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.2],[-1.9+4.2,-0.6],[-1.9+4.2,-0.2]]};
				var seso1 = CreateObj({name:"seso",color:ORANGE_COLOR,fixedAngle:false , mass:0 , density:(din||4) , type:"dynamic" , shape:"complex" , x:xPos-3 , y:yPos-1 ,Shapes:[shape1,shape2]});
				
				var tower = CreateObj({name:"Tower1",color:GREY_COLOR,fixedAngle:false , mass:0 , density:1.0 , type:"static" , shape:"poly" , x:xPos , y:yPos ,vertices:[[-(wid/2.2),0],[-(wid/2.2),-hei],[0,-(hei+1)],[(wid/2.2),-hei],[(wid/2.2),0]]});

				CreateObj({type:"static" , shape:"box" , x:xPos , y:(yPos - hei) , width:1,height:1});
				var rope = createRevoluteJoint(tower , seso1 , new b2Vec2(0,-(hei+1)) , new b2Vec2(0,0));
		  }
			
		  return seso1;
	  }
	  function createTowerSeso2(xPos,yPos,wid,hei , din)
	  {
			var tower = CreateObj({name:"Tower1",color:'#777777',fixedAngle:false , mass:0 , density:1.0 , type:"static" , shape:"poly" , x:xPos , y:yPos ,vertices:[[-(wid/2),0],[-(wid/2),-hei],[0,-(hei+1)],[(wid/2),-hei],[(wid/2),0]]});
			
			var shape1 = { shape:"box" , width:6.9,height:0.3};
			var shape2 = { shape:"poly" ,vertices: [[-2.3+6.2,-0.1],[-2.3+6.2,-0.8],[-1.9+6.2,-0.8],[-1.9+6.2,-0.1]]};
		    //var shape3 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.2],[-1.9+4.2,-0.6],[-1.9+4.2,-0.2]]};
			var seso1 = CreateObj({name:"seso",color:'#777777',fixedAngle:false , mass:0 , density:(din||4) , type:"dynamic" , shape:"complex" , x:xPos , y:yPos ,Shapes:[shape1,shape2]});
			
			CreateObj({color:'rgba(0,0,0,1)',fixedAngle:false , mass:0 , density:0.0 , type:"static" , shape:"box" , x:xPos , y:(yPos - hei) , width:1,height:1});
		    var rope = createRevoluteJoint(tower , seso1 , new b2Vec2(0,-(hei+1)) , new b2Vec2(0,0));

			return seso1;
	  }
	  
	  function createAirSeso(xPos,yPos,wid,hei , din , ReRope)
	  {
			var tower = CreateObj({name:"Tower1",color:ORANGE_COLOR,fixedAngle:false , type:"static" , shape:"circle" , x:xPos , y:yPos+0 , radius:0.2});
			CreateObj({name:"Tower1",color:'#777777',fixedAngle:false , type:"static" , shape:"circle" , x:xPos , y:yPos+0 , radius:0.4});

			var shape1 = {shape:"box" , width:4.6,height:0.3};
			//var shape2 = { shape:"poly" ,vertices: [[-2.3+4.2,-0.1],[-2.3+4.2,-0.8],[-1.9+4.2,-0.8],[-1.9+4.2,-0.1]]};
		    //var shape2 = {shape:"poly" ,vertices: [[-2.3+4.2,-0.2],[-1.9+4.2,-0.6],[-1.9+4.2,-0.2]]};
			var shape2 = {shape:"poly" ,vertices: [[-2.3+4.2,-0.0],[-2.3+4.2,-0.9],[-1.9+4.2,-0.9],[-1.9+4.2,-0.0]]};

			var seso1 = CreateObj({name:"seso",color:ORANGE_COLOR,fixedAngle:false , mass:0 , density:(din||4) , type:"dynamic" , shape:"complex" , x:xPos, y:yPos ,Shapes:[shape1,shape2]});
			
			//CreateObj({color:'rgba(0,0,0,1)',fixedAngle:false , mass:0 , density:0.0 , type:"static" , shape:"box" , x:xPos , y:yPos+1.4 , width:1,height:1});
		    var rope = createRevoluteJoint(tower , seso1 , new b2Vec2(0,-0.62) , new b2Vec2(0,0));

			if(ReRope)
				return rope;
			else
				return seso1;
	  }
	  
	    function drawMe7bas(vecPos , type2)
		{
					ctx.fillStyle = type2 ? GREY_COLOR : ORANGE_COLOR;     	
					ctx.beginPath();
						ctx.arc(vecPos.x*ScaleFactor,vecPos.y*ScaleFactor,13,0,2*Math.PI);
						ctx.arc(vecPos.x*ScaleFactor,vecPos.y*ScaleFactor,13,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
					
					ctx.fillStyle = type2 ? ORANGE_COLOR : GREY_COLOR;
					ctx.beginPath();
						ctx.arc(vecPos.x*ScaleFactor,vecPos.y*ScaleFactor,7,0,2*Math.PI);
						ctx.arc(vecPos.x*ScaleFactor,vecPos.y*ScaleFactor,7,0,2*Math.PI);
					ctx.closePath();
					ctx.fill();
		}
		
		
		  function drawButton(obj , IsPressed , IsRight , IsVertical)
		  {
			   var xpos = obj.GetPosition().x*ScaleFactor;
			   var ypos = obj.GetPosition().y*ScaleFactor;
			   var flipNum = IsRight ? 1 : -1;
			   
			   var temp = IsPressed ? 4:9;
			   // ctx.lineJoin = "round";
				   
			   if(IsVertical)
			   {
				   ctx.save();
				   ctx.translate(xpos , ypos );
					
				   ctx.rotate(90*Math.PI/180);
				   ctx.translate(-xpos , -ypos );
			   }
			 
			   ctx.fillStyle= GREY_COLOR;
			   ctx.beginPath();
						ctx.moveTo(xpos+9*flipNum , ypos-4);
						ctx.lineTo(xpos-10*flipNum, ypos-4);
						ctx.lineTo(xpos-10*flipNum ,ypos+4);
						ctx.lineTo(xpos+9*flipNum , ypos+4);
			   ctx.closePath();
			   ctx.fill();
			   
			   ctx.fillStyle= ORANGE_COLOR;
			   ctx.beginPath();
					ctx.moveTo(xpos+(temp+5)*flipNum , ypos-12);
					ctx.lineTo(xpos+temp*flipNum , ypos-12);
					ctx.lineTo(xpos+temp*flipNum ,ypos+12);
					ctx.lineTo(xpos+(temp+5)*flipNum , ypos+12);
			   ctx.closePath();
			   ctx.fill(); 
		   
			   ctx.fillStyle= ORANGE_COLOR;
			   ctx.beginPath();
					ctx.moveTo(xpos-7*flipNum , ypos-12);
					ctx.lineTo(xpos+1*flipNum , ypos-12);
					ctx.lineTo(xpos+1*flipNum ,ypos+12);
					ctx.lineTo(xpos-7*flipNum , ypos+12);
			   ctx.closePath();
			   ctx.fill(); 
			   
			   if(IsVertical)
			   {
					ctx.restore();
			   }
		  }

	 function indicesConvertor(tempArr , xDis , yDis)
	  {
			var xDis = xDis || 0;
			var yDis = yDis || 0;

			var arrVert = [];
			
			var c = 0;
			for(var j = 0; j < tempArr.length/2; j++) 
			{
			    arrVert.push([0,0]);
				arrVert[j][0] = (tempArr[c] + xDis) / ScaleFactor;
				arrVert[j][1] = (tempArr[c + 1] + yDis) / ScaleFactor;
				
				c += 2;
			}
			return arrVert;
	  }
	  function displaceArr(tempArr ,xDis , yDis)
	  {
			for(var j = 0; j < tempArr.length; j++) 
			{
				tempArr[j][0] += xDis;
				tempArr[j][1] += yDis;
			}
			
			return tempArr;
	  }
	  function flipArr(tempArr ,flipHor , flipVer)
	  {			
	  
			 if(!flipHor && !flipVer)
				return tempArr;
				
			for(var j = 0; j < tempArr.length; j++) 
			{
					tempArr[j][0] = flipHor ? -1*tempArr[j][0] : tempArr[j][0];
					tempArr[j][1] = flipVer ? -1*tempArr[j][1] : tempArr[j][1];
			}
			
			if(!(flipHor && flipVer))			
				return tempArr.reverse();
			
			return tempArr;
	  }
	  
	  function scaleArr(tempArr ,xScale , yScale)
	  {			
			for(var j = 0; j < tempArr.length; j++) 
			{
					tempArr[j][0] *= xScale;
					tempArr[j][1] *= yScale;
			}
			
			return tempArr;
	  }
