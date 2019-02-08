//TROUVER LE CONTEXTE
let context = document.getElementsByTagName("canvas")[0].getContext("2d");

//FUNCTIONS  ----------------------------------------------------------

	//RECUPERER LES LIGNES D'ENTREE
	function input()
		{

		}

	//AGIR EN CONSEQUENCE DES INPUTS SUR LES VARIABLES
	function animate()
		{
			
		}

	// AFFICHER A L'ECRAN LES ELEMENTS
	function render()
		{
			CreateRect(0,0,caneva.width,caneva.height,'white');

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

	//CREATION DE SOLDATS
	function CreateSprite(img, dx, dy){
		let sprite = {	positionCaneva : {x : dx, y : dy},
						positionImage: {x : 144, y : 108},
						tailleCaneva : {width : 32 , height : 42},
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

function CreateRect(x,y,width,height,color)
{
		context.fillStyle = color;
		context.fillRect(x,y,width,height);
}
//---------------------------------------------------------------------

let caneva = {width :600 , height : 400},
	SpriteSheets = LoadSpriteSheets();
	ArmeeDeSprite = [];
	ArmeeDeSprite.push(CreateSprite(SpriteSheets[11],0, 0));



//LANCER LE JEUX
GameLoop();