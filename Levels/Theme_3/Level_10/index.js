var Level_3_10 = {
			timerSpeed:0.03,
			
			BasePos:null,
			Imge_1:null,

			Father_In:false,
			Mother_In:false,
			
			BGImage:null,
			
			heartSize:0.4,
			heartSizeInc:0.01,
			
			finishLevel:false,
			
			endTimerId:0,
			
			
			MomObj:null,
			DadObj:null,

			startLevel: function() 
			{			
					numOfBalls = 2;
					HomePos = null;
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

				numOfBalls = 2;
				sandLevel = 0;	
				
				clearTimeout(this.endTimerId);
				
				this.finishLevel = false;

				
				this.Father_In = false;
				this.Mother_In = false;

				setTries(numOfBalls);
			},
			
			  startStage:function()
			  {
				  SelectedParentImg.src = 'images/Player_Haert.png';

				  this.Imge_1 = new Image();
				  this.Imge_1.src = "images/Target.png";
				  
				  this.BGImage = new Image();
				  this.BGImage.src = 'images/Sky_flowting_Parantes.png';

				  var MainPosX = (canvasWidth/2.0/ScaleFactor);
				  var MainPosY = (canvasHeight/2.0/ScaleFactor);
				  
				  CreateObj({color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX + 8.5  , y: 6.0 , width: 4 ,height: 0.4 });
				  CreateObj({color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX - 8.5  , y: 6.0 , width: 4 ,height: 0.4 });
				  CreateObj({color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX + 5.5  , y: 9.0 , width: 4 ,height: 0.4 });
				  CreateObj({color:GREY_COLOR,type: "static" ,shape:"box" ,x:MainPosX - 5.5  , y: 9.0 , width: 4 ,height: 0.4 });
				  
				  creatFan(MainPosX + 2.4,6,4,0.4,true , 125 , 125 , 500, RED_COLOR);
				  creatFan(MainPosX - 2.4,6,4,0.4,true , 125 , 125 , 500, RED_COLOR);
											  
				  this.DadObj  =  CreateObj({name:'Parent', image:DadImg, density:10,type:"dynamic", shape:"circle" ,x :MainPosX -9.0 , y :4.9 , radius:0.55,restitution:0,friction:0});
				  this.MomObj  =  CreateObj({name:'Mom', image:MomImg, density:10,type:"dynamic", shape:"circle" ,  x :MainPosX +9.0 , y :4.9 , radius:0.55,restitution:0,friction:0});
						
				  CreateObj( { name:"bed" ,color:GREY_COLOR,type: "static",shape:"box" ,x:MainPosX, y:MainPosY+5.8 , width:5 , height:0.2 });
				  var temp = CreateObj( {color:GREY_COLOR,type: "static" , shape:"box" ,x:MainPosX, y:MainPosY+7.8 , width:10 , height:4.0 });

				  this.BasePos = temp.GetPosition();
			  },
			  endCollide:function(contact,impulse)
			  {
					  if( (contact.GetFixtureB().GetBody().details.name == "Parent" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   this.Father_In = true;
						   
						   setTimeout(this.checkIfDone , 500);
					  }  
					  
					  if( (contact.GetFixtureB().GetBody().details.name == "Mom" && contact.GetFixtureA().GetBody().details.name.indexOf("bed") != -1) )
					  {
						   contact.GetFixtureB().GetBody().SetLinearVelocity( new b2Vec2(0 , 0) );
						   this.Mother_In = true;

						   setTimeout(this.checkIfDone , 500);
					  } 
			  },
			  
			  checkIfWin: function()
			  {
					if(!Level_3_10.finishLevel && numOfBalls == 0)
					{
						if( ( Math.abs( this.DadObj.m_linearVelocity.x) < 0.01 && !this.Father_In && Math.abs( this.DadObj.m_linearVelocity.y) < 0.01) || (Math.abs( this.MomObj.m_linearVelocity.x) < 0.01 && !this.Mother_In && Math.abs( this.MomObj.m_linearVelocity.y ) < 0.01) )
							endLevel();
						
					}
			  },
			  checkIfDone: function()
			  {
				  //alert(1);
					if( Level_3_10.Mother_In && Level_3_10.Father_In )
					{
						  //alert(2);
						destroyBody(Level_3_10.DadObj,50);
						destroyBody(Level_3_10.MomObj,50);

						numOfChildsEnter = 3;
						playSound("EndBonus");
						Level_3_10.finishLevel = true;
						this.endTimerId =  setTimeout(endLevel , 2000);
						
					}
			  },
			  canvasDraw: function()
			  {
					ctx.drawImage(this.BGImage, 0 , 0, 800 , 480 );  //Sky_flowting_Parantes
				  	ctx.drawImage(this.Imge_1, this.BasePos.x * ScaleFactor-65, this.BasePos.y * ScaleFactor-180, 123 * 1.0,123 * 1.0);

			  },
			  canvasDrawForground: function()
			  {
					if(this.finishLevel)
					    this.winLevel();
			  },
			  winLevel: function()
			  {
					 if(this.heartSize > 1.1)
						 this.heartSizeInc = -0.01;
					 else
						 if(this.heartSize <0.5)
							 this.heartSizeInc = 0.01;

					 this.heartSize += this.heartSizeInc;  //
					 
					 
					 ctx.drawImage(MomImg, this.BasePos.x * ScaleFactor-38, this.BasePos.y * ScaleFactor-98, 0.6*60.0 , 0.6*60.0);
					 ctx.drawImage(DadImg, this.BasePos.x * ScaleFactor+3, this.BasePos.y * ScaleFactor-98, 0.59*60.0 , 0.59*60.0);
				
					 ctx.save(); 
						ctx.translate(this.BasePos.x * ScaleFactor-17+10, this.BasePos.y * ScaleFactor-130+10);
						ctx.scale( this.heartSize, this.heartSize);

						ctx.translate(-(this.BasePos.x * ScaleFactor-17+10), -(this.BasePos.y * ScaleFactor-130+10));
						
						ctx.drawImage(hartImg, this.BasePos.x * ScaleFactor-17, this.BasePos.y * ScaleFactor-130, 0.59*60 , 0.59*60);
					 ctx.restore(); 
			  }

		}
		Level_3_10.startLevel();