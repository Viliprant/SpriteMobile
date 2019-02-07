//TROUVER LE CONTEXTE
let context = document.getElementsByTagName("canvas")[0].getContext("2d");

//FUNCTIONS  ----------------------------------------------------------

//TILEMAP




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
		
	}

function GameLoop()
	{
		input();
		
		animate();
		
		render();

		window.requestAnimationFrame(GameLoop);
	}

//POUR LES SOLDATS
function CreateCarre()
	{
		
	}

// GERE LES COLLISIONS AVEC LES BORDS
function GestionDesBord(sprite)
	{
		if(carre.position.x > caneva.width - carre.carre.width)
		{
			carre.position.x = caneva.width - carre.carre.width;
			carre.direction.x = - Math.random() - 0.5;
			ControleurArmee(carre)
		}
		if(carre.position.x < 5)
		{
			carre.position.x = 5;
			carre.direction.x = Math.random() + 0.5;
			ControleurArmee(carre)
		}
		if(carre.position.y > caneva.height - carre.carre.height)
		{
			carre.position.y = caneva.height - carre.carre.height;
			carre.direction.y = - Math.random() - 0.5;
			ControleurArmee(carre)
		}
		if(carre.position.y < 5)
		{
			carre.position.y = 5;
			carre.direction.y = Math.random() + 0.5;
			ControleurArmee(carre)
		}
	}

// GERE LES SOLDATS  !!!
function ControleurArmee(sprite)
{
	let nbSoldatsMax = 100,
		color = ["red","blue","green","purple","yellow","pink","salmon","cyan", "magenta"],
		indexRandom;
	if(ArmeeDeCarres.length > nbSoldatsMax)
	{
		indexRandom = Math.trunc(Math.random() * 10);
		carre.color = color[indexRandom];
	}
	else
	{
		ArmeeDeCarres.push(CreateCarre());
	}
}
//---------------------------------------------------------------------

let caneva = {width :600 , height : 400},
	ArmeeDeCarres = [];
	ArmeeDeCarres.push(CreateCarre());



//LANCER LE JEUX
GameLoop();