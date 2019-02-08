//TROUVER LE CONTEXTE
let context = document.getElementsByTagName("canvas")[0].getContext("2d");

// VARIABLES
	
	let caneva = {width :464 , height : 288},
		SpriteSheets = LoadSpriteSheets();
		ArmeeDeSprite = [];
		ArmeeDeSprite.push(CreateSprite(SpriteSheets[11],16, 10));

	let isMoving;


//FUNCTIONS  ----------------------------------------------------------

	//RECUPERER LES LIGNES D'ENTREE
	function input()
		{
			document.onkeydown = (e) => {
				switch (e.key) 
				{
					case "z":
						isMoving = e.key;
						break;
					case "d":
						isMoving = e.key;
						break;
					case "s":
						isMoving = e.key;
						break;
					case "q":
						isMoving = e.key;
						break;
				}
			}
		}

	//AGIR EN CONSEQUENCE DES INPUTS SUR LES VARIABLES
	function animate()
		{
			MoveSprite();
		}

	// AFFICHER A L'ECRAN LES ELEMENTS
	function render()
		{
			CreateRect(0,0,caneva.width,caneva.height,'white');

			CreateMap();

			for (sprite of ArmeeDeSprite) {
				
				sprite.DrawSprite();
				sprite.AnimateSprite();
			}
		}

	function GameLoop()
		{
			input();
			
			animate();
			
			render();

			window.requestAnimationFrame(GameLoop);
		}

//TILEMAP
	function CreateMap()
	{
		let tileMap = [	
						[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
						[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
						],
			clipPoint = {x : 0, y : 0};

			for(let rows = 0 ; rows < tileMap.length ; rows++)
			{
				for(let columns = 0 ; columns < tileMap[rows].length ; columns++)
				{
					switch (tileMap[rows][columns]) {
						case 0:
							// GROUND
							clipPoint = {x : 16, y : 64};
							break;
						case 1:
							// WALL
							clipPoint = {x : 16, y : 16};
							break;
					}
					context.drawImage(SpriteSheets[11], clipPoint.x, clipPoint.y, 16, 16, columns * 16, rows * 16, 16, 16);
				}
			}


	}




//CREATION DE SOLDATS
	function CreateSprite(img, dx, dy){
		let sprite = {	positionCaneva : {x : dx, y : dy},
						positionImage: {x : 144, y : 108},
						tailleCaneva : {width : 15 , height : 22},
						tailleImage : {width : 15 , height : 22},
						vitesse : {x : 3, y : 3},
						direction : {x : 1, y : 1},
						image : img,
						//Pour faire varier les images
						step : 0.1,
						DrawSprite : function()
						{
							//void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
							context.drawImage(sprite.image, sprite.positionImage.x + 16 * Math.round(sprite.step), sprite.positionImage.y, sprite.tailleImage.width, sprite.tailleImage.height, sprite.positionCaneva.x, sprite.positionCaneva.y, sprite.tailleCaneva.width, sprite.tailleCaneva.height);
						},
						AnimateSprite : function()
						{
							if(sprite.step > 3)
							{
								sprite.step = 0.1
							}
							sprite.step += 0.1;
						}

					};

		return sprite;
	}

	//CHARGER LES SPRITES SHEETS
	function LoadSpriteSheets()
		{
			let SpriteSheets = [],
			SpriteImages;

			for (var i = 0; i < 12; i++) {
				SpriteImages = new Image();
				SpriteImages.src = "images/Sprite" + (i+1) + ".png";
				SpriteSheets.push(SpriteImages);
			}
			return SpriteSheets;
		}

	//Mouvement Soldat
	function MoveSprite()
	{
		switch (isMoving) 
		{
			case "z":
				ArmeeDeSprite[0].positionCaneva.y -= 16;
				break;
			case "d":
				ArmeeDeSprite[0].positionCaneva.x += 16;
				break;
			case "s":
				ArmeeDeSprite[0].positionCaneva.y += 16;
				break;
			case "q":
				ArmeeDeSprite[0].positionCaneva.x -= 16;
				break;
		}
		isMoving = "";
	}

function CreateRect(x,y,width,height,color)
{
		context.fillStyle = color;
		context.fillRect(x,y,width,height);
}
//---------------------------------------------------------------------


//LANCER LE JEUX
GameLoop();