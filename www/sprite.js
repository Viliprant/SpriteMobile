//TROUVER LE CONTEXTE
let context = document.getElementsByTagName("canvas")[0].getContext("2d");

//CLASS
	class Tile {

		constructor(collision, clipPoint, image, context){
			this.collision = collision;
			this.clipPoint = clipPoint;
			this.SpriteSheet = image;
			this.context = context;
		}
		
		DrawTile(columns,rows){
		context.drawImage(this.SpriteSheet, this.clipPoint.x,this.clipPoint.y, 16, 16, columns * 16, rows * 16, 16, 16);
		}
	}

// VARIABLES
	
	let caneva = {width :464 , height : 287},
		SpriteSheets = LoadSpriteSheets(),
		sizeTile = 16;
		ArmeeDeSprite = [];
		ArmeeDeSprite.push(CreateSprite(SpriteSheets[11],16, 10));

	let isMoving;
// MAP
let tileArray = [
				//Sol
				new Tile(false,{x : 16*1, y : 16*4},SpriteSheets[11],context),
				//Mur
				new Tile(true,{x : 16*1, y : 16*1},SpriteSheets[11],context),
				//Sol cassé
				new Tile(false,{x : 16*2, y : 16*4},SpriteSheets[11],context),
				//Sol
				new Tile(false,{x : 16*3, y : 16*6},SpriteSheets[11],context),
				//Sol
				new Tile(false,{x : 16*1, y : 16*11},SpriteSheets[11],context)
				
				];

let tileMap = [	
				[tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[0],tileArray[Math.trunc(Math.random()*5)],tileArray[0],tileArray[0],tileArray[1]],
				[tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1],tileArray[1]]
				];

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
			//GestionCollision();
			ArmeeDeSprite[0].LocaliserSprite();

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
			for(let rows = 0 ; rows < tileMap.length ; rows++)
			{
				for(let columns = 0 ; columns < tileMap[rows].length ; columns++)
				{
					tileMap[rows][columns].DrawTile(columns,rows);
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
						case : {x : 1, y: 1},
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
						},
						LocaliserSprite : function()
						{
							sprite.case.x = sprite.positionCaneva.x / sizeTile + 1;
							sprite.case.y = (sprite.positionCaneva.y + 6) / sizeTile + 1;
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
				if(tileMap[ArmeeDeSprite[0].case.y - 2][ArmeeDeSprite[0].case.x - 1].collision == false)
				{
					ArmeeDeSprite[0].positionCaneva.y -= sizeTile;
				}
				break;
			case "d":
				if(tileMap[ArmeeDeSprite[0].case.y - 1][ArmeeDeSprite[0].case.x].collision == false)
				{
					ArmeeDeSprite[0].positionCaneva.x += sizeTile;
				}
				break;
			case "s":
				if(tileMap[ArmeeDeSprite[0].case.y][ArmeeDeSprite[0].case.x - 1].collision == false)
				{
					ArmeeDeSprite[0].positionCaneva.y += sizeTile;
				}
				break;
			case "q":
				if(tileMap[ArmeeDeSprite[0].case.y - 1][ArmeeDeSprite[0].case.x - 2].collision == false)
				{
					ArmeeDeSprite[0].positionCaneva.x -= sizeTile;
				}
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