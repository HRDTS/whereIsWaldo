<h1>Project title:</h1><br>
Where is Waldo: a mobile optimized, fully responsive Pokemon themed find-and-click game based on the British puzzle book series ‘Where’s Wally’.

<strong> LIVE: </strong>

<h2>Screenshot one: </h2> <br>

<h2>Screenshot two: </h2> <br>


<h1>Project Description:</h1><br>
The game is simple: users can play up to three levels. Each level has its own map with a bunch of Pokemons on it. The goal is to find three Pokemons on the map. The ‘target’ Pokemons are listed in the header. If the user sees the Pokemon on the map, they can click on it and a drop down menu will be rendered. This drop down menu contains three Pokemon names. The user needs to select the correct name that matches the Pokemon. If the selected Pokemon is located correctly and the correct name is chosen, the user will get a point. Find all three Pokemons to win the game.

I have used React for the front-end and Firebase for the back-end. 

The most important features are:

<h2>image recognition with Firestore</h2> <br>
Each map, which is basically an image, has an onClick function. This onClick function does two things when the user activates it by clicking on the map:
1. the X, Y coordinates based on the height and width of the image will be registered.
2. the drop down menu will be rendered at the spot where the user clicked. This drop down contains three Pokemon names which the user can select.

The X, Y coordinates are positioned relative to the image. I do this with an event handler. When users clicks on the map, I use ‘event.x’ to get the full width of the map and then I subtract ‘event.x’ with ‘event.left’ to get the exact position on the horizontal axis. Event.y – event.top gets the position for the vertical axis. 

The user then selects a Pokemon name from the drop down menu. The coordinates and Pokemon name are then transferred to the state. When this state gets the input, it will activate the code that fetches all the true coordinates of the Pokemons from the Firebase back-end. It then compares the user X, Y coordinates and the true X, Y coordinates from the back-end, if it matches, the user will score a point.

The Pokemons that the users need to find are placed in squares. This means that there are 4 X,Y coordinates: top left, top right, bottom left and bottom right. The users X, Y coordinates must be anywhere inside this square.

The reason I chose to store the true X, Y coordinates in the back-end is to prevent users from using the inspector tool to get the locations.

<h2>Score board, scoring and timer</h2> <br>
Starting a level automatically starts the timer. The timer stops when all three Pokemons have been found by the user. The time can then be submitted along with a username to the score board. There are different score boards for each individual level.

I used Firestorage for storing all the usernames and scores.

<h2>Responsive design and mobile optimization</h2> <br>
The application can be used on mobile. I have made it work on a Galaxy Fold (280px width). The mobile version uses a hamburger menu to display the Pokemons instead of displaying the Pokemons directly on the header.  

<h2>Personal note:</h2> <br>
This project was a great learning experience for me. It required a lot of planning beforehand and writing good pseudo code. The biggest hurdle was probably figuring out how to connect the user X, Y coordinates with the true X, Y coordinates. Apart from this, there were some minor technical difficulties I faced, but most of the technical difficulties were related to me being new to React. 

Please feel free to reach out to me with any feedback or questions you may have. I am always happy to connect with fellow developers and share my experiences.

If you find your image in this or any other of my projects and you do not want it to be used, please contact me at t.genc58@hotmail.com. I will promptly remove the image upon request.
Thank you.

