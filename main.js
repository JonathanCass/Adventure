var advloc = 1
var shield = false
var sword = false
var potion = false
var game = true

while(game=true)
switch (advloc){
	case 1 :
		alert("You are standing in the middle of a large field. To the [North] is an imposing looking mountain with coils of thick black smoke curling up from the base skywards. To the [South] you see an inviting looking meadow. To the [East] an ancient looking graveyard, and to to the [West] a dilapidated looking shop.")
		var dirloc0 = prompt("Choose a direction. (n)orth , (s)outh , (e)ast or (w)est")

		switch (dirloc0){
			case "n" : 
				advloc = 2
				break;
			case "s" :
				advloc = 4
				break;
			case "e" :
				advloc = 3
				break;
			case "w" :
				advloc = 5
				break;
		}
		break;
	case 2 :
		alert("You move north. You are standing before the entrace to an ominous looking cave. A simple sign next to the cave reads Beware of Dragon. It would be wise to be prepared for battle before venturing forth into the Dragon's lair.")
		var dirloc0 = prompt("Will you (e)nter the cave or return (s)outh?")
		switch (dirloc0){
			case "e" :
				advloc = 6
				break;
			case "s" :
				advloc = 1
				break;
		}
		break;	
	case 3:
		if (shield){
			alert("You move east. You are standing amidst the crumbling ruins of an ancient graveyard.")
		}else {
			alert("You move east. You are standing amidst the crumbling ruins of an ancient graveyard. A skeleton is roaming around the area holding a useful looking shield.")
		}
		if (shield){
			var dirloc0 = prompt("Return to the (w)est.")
			advloc = 1
		}
		else{
			var dirloc0 = prompt("Attenpt to (f)ight the skeleton for the shield, or return to the (w)est.")
				if (dirloc0 == f && sword == true){
					alert(" You use your sword to vanquish the skeleton and acquire the shield. There is nothing else to do in this are, so you return to the west.")
				}
				else if(dirloc0 == f && sword == false){
					alert(" Trying to grapple the skeleton with your bear hands was a bad decision. The monster is able to overpower you. Game Over!")
					game = false;
				}
		}
		break;
	case 4:
		
		break;
	case 5:
		
		break;
	case 6:
		
		break;
	case 7:

		break;
}


