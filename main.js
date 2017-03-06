var advloc = 1
var shield = false
var sword = false
var potion = false
var gameflag = true
var score = 0

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
						alert(" You use your sword to vanquish the skeleton and acquire the shield. [Score + 10] for slaying skeleton! [Score + 10] for shield get! There is nothing else to do in this area, so you return to the west.")
						score += 20;
						advloc = 1;
						shield = true; 
					}
					else if(dirloc0 == "f" && sword == false){
						alert(" Trying to grapple the skeleton with your bear hands was a bad decision. The monster is able to overpower you. GAME OVER!")
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
				alert("You move to the south. You are standing in a large meadow. A broadsword is protruding from the corpse of a lizardman. Retrieiving the sword you begin to feel more confident that you will survive this adventure. [Score + 10] for sword get! Nothing else of interest is in this area and you return to the north.")
				score += 10;
				sword = true;
				advloc = 1;
			}
			break;
		case 5:
			if (potion){
				alert("Previously you salvaged a health potion from the ruins of this shop but there is nothing else of any use here. You return west.")
				advloc = 1;
			}
			else {
				alert("The shop here is in complete shambles. It appears to have once been an Apothecary. After a thorough search you manage to find a single intact health potion. [Score + 10] for potion get! Finding nothing else useful, you return west.")
				advloc = 1;
				potion = true;
				score += 10;
			}
			break;
		case 6:
			alert(" You enter the cave. Before you lies a wicked looking red dragon lying upon a massive horde of gold and jewels. He eyes you with a hungry grin and lunges forward on the attack!")
			if (sword == true && shield == true && potion == true){
				alert(" You roll away dodging the brunt of the dragons wicked claw attack but still take a significant amount of damage. With your left arm you quickly raise up your shield to block the dragon's flame breath while swinging your sword in a powerful arc to decapitate the beast. You quaff the healing potion lest you succumb to your burn and scratch wounds. You have defeated the dragon and lived. YOU WON THE GAME! [Score + 100] killed the dragon and lived!")
				gameflag = false;
				score += 100;
				alert("Your score was " + score)
			}
			else if (sword == true && shield == true && potion == false){
				alert(" You roll away dodging the brunt of the dragons wicked claw attack but still take a significant amount of damage. With your left arm you quickly raise up your shield to block the dragon's flame breath while swinging your sword in a powerful arc to decapitate the beast. Alas you sustained too much damage during the fight and with no means to heal yourself, you succumb to your injuries. You defeated the dragon but you are dead. [Score + 40] killed the dragon but died! GAME OVER")
				advloc = 7;
				score += 40;
			}
			else{
				alert(" You roll away dodging the brunt of the dragons wicked claw attack but still take a significant amount of damage. You spin around to see the dragon preparing a viscious flame breath attack and with no means to defend yourself from it you are killed. [Score + 10] fed the hungry dragon! GAME OVER")
				advloc = 7;
				score += 10;
			} 
			break;
		case 7:
			alert("Your score was " + score)
			alert("You had a bad end. Don't give up try again!")
			gameflag = confirm (" Would you like to try again?")
			advloc = 1;
			var shield = false
			var sword = false
			var potion = false
			score = 0
			break;
	}
}

