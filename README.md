Bowen Henry
1/17/2025
You are to make Rock, Paper, Scissors, Lizard, Spock game.



Here are the requirements:

1v1 or 1vCPU
Prototype for this work or a detailed flow chart to illustrate the logic or both!
Different modes: 1 win / 3 out of 5 / 4 out of 7
Single Page or Multiple page Application for Desktop
Must have a way to show the rules of the game
Must be designed, on Github, and Hosted on Vercel


Game Rules:

Scissors cuts paper.
Scissors decapitates lizard.
Rock crushes lizard.
Rock crushes scissors.
Paper covers rock.
Paper disproves Spock.
Lizard poisons Spock.
Lizard eats paper.
Spock smashes scissors.
Spock vaporizes rock.



On CPU mode - use any one the following random APIcalls : 

Use your created API call to generate the CPU response 

Peer Review: Gianpaolo Reinares
> Comments: Code looks good; Site could use a bit of tweaks: Maybe find a way to set all of the images in the 1v1 mode to be the same size, and for the best '3 out of 5' and '4 out of 7' Maybe have a text that pops up after Player 2 makes their selection to clearly show who won that round, as well as to show what the other had picked. Same could be said for the CPU mode, have a text that pops up to show the outcome of the round as it is not clear what the Computer had selected; What I would do is to attach some sort of variable that changes depending on what button you click. For example for 1v1: When Player 1 clicks 'Rock',  Variable #1 becomes 'Rock', and when Player 2 clicks 'Spock', Variable #2 becomes 'Spock'; Figure out how to then take the two variables and then print them out in a short sentence to show the players the outcome (For CPU just use Variable #1, while Variable #2 = API Call) Besides that everything looks great.