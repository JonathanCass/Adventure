var advloc = 1
var shield = false
var sword = false
var potion = false
var gameflag = true

while(gameflag==true){
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
				alert("You move east. You are standing amidst the crumbling ruins of an ancient graveyard. This is where you acquired the shield from the skeleton. There is nothing else to be accomplished in this area. You return to the west.")
				advloc = 1
			}else {
				alert("You move east. You are standing amidst the crumbling ruins of an ancient graveyard. A skeleton is roaming around the area holding a useful looking shield.")
				var dirloc0 = prompt("Attenpt to (f)ight the skeleton for the shield, or return to the (w)est.")
					if (dirloc0 == "f" && sword == true){
						alert(" You use your sword to vanquish the skeleton and acquire the shield. There is nothing else to do in this area, so you return to the west.")
						advloc = 1;
						shield = true; 
					}
					else if(dirloc0 == "f" && sword == false){
						alert(" Trying to grapple the skeleton with your bear hands was a bad decision. The monster is able to overpower you. Game Over!")
						advloc = 7;
					}
					else{
						alert("You return to the west.")
						advloc = 1;
					}
			}
			break;
		case 4:
			if (sword){
				alert("This is the meadow in which you found the sword. There is nothing else to do here so you head back north")
				advloc = 1;}
			else{
				alert("You move to the south. You are standing in a large meadow. A broadsword is protruding from the corpse of a lizardman. Retrieiving the sword you begin to feel more confident that you will survive this adventure. Nothing else of interest is in this area and you return to the north.")
				sword = true;
				advloc = 1;
			}
			break;
		case 5:
			
			break;
		case 6:
			
			break;
		case 7:
			alert("You had a bad end. Don't give up try again!")
			gameflag = confirm (" Would you like to try again?")
			advloc = 1;
			break;
	}
}

