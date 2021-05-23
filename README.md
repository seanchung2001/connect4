# **CONNECT 4**

- Made-by: Sean Chung ([seanchung2001](http://www.github.com/seanchung2001)), Adam Bishow ([abish5](http://www.github.com/seanchung2001))

# Languages And Extensions
- JavaScript
- HTML5
- W3.CSS
- Express
- Node.js
- MongoDB (Mongoose)
- React
- Express-sessions (Authentication/Authorization)

# Main Functions/Pages
- **SIGN-UP FUNCTION:** In the login page, you will see a small text stating: “_Need an account? Sign up_”. Click on “_Sign up_” to be redirected to our signup page. From there, we can specify the required fields; username, email, password, confirm password. When you click the “_Sign up_” button, it should redirect you to the home page. Your database for a new user is now created and saved inside of MongoDB.
- **LOGIN FUNCTION:** Fill out the fields; username and password. Click the “_log in_” button. Our program will check whether the specified username and password exists. If it does, it will redirect you to the home page and display a welcome message with the current user’s username. If it didn’t match a username and password with one in the database, it will stay on the login page and won’t redirect to the home page.
- **LOGOUT FUNCTION:** When you are all logged into the system, there is a functionality that allows you to log out. From inside the home page (assuming you successfully logged in), there is a button on the top right hand corner called “_log out_”. Click this button and you should have successfully logged out (and redirected to the login page).
- **OFFLINE GAME FUNCTION:** When you are all logged in and inside of the home page, look at the navigation bar above. You should see a tab called: “_game_”. Click on that tab, and it should redirect you to the game page. Within the same localhost machine, you will alternate turns with another user until someone reaches connect 4. Once it finishes, it will display a message of some sort indicating which player has won.
- **ONLINE GAME FUNCTION:** This will work similarly to the offline game function. In the navigation bar, you will see a tab called “_Online_”. Click on the tab and it will start a game (and save it to the server). This online game function does not have full functionality (you can only place one checker before it is the opposing players turn. In which case, you won’t be able to place a checker). However, we do have a lot of the background information finished. We coded the online game function efficiently, so that when a game is finished, it updates the current user and opponents; number of wins, games played, previous games, and win rate. The only part that is missing which would piece together our entire online game function is creating a list of clickable games on the opponents side in which they can join.
- **DISPLAYING WIN RATE, NUMBER OF WINS; USER PROFILE PAGE:** This should automatically render when there is a change to the current user’s database. Since we use buffer in react, whenever a change is made, it will automatically recompile and display the new data.

# How To Run Our Website Through Localhost:3001
**1:** Run localhost:3001 through the hosts Router ID (will not specify here, please contact me for information).

**2:** You should be displayed a log in page. You must sign up in order to use the log in function and also to access the rest of the pages.

**3:** You will now be redirected to the home page. From there, you can traverse to whicherver page you would like through the navigation bar (PS: clicking on the welcome sign will display the users personal profile page).

**4:** When you are finished, you can log out by going to the user profile page and clicking the "_logout_" button.

# REST API
**GET/users:** Run localhost:3000. In order to test this function, we need to add: “_/users_” to the URL. This will create a POST request which will send the JSON format of the information on each user (without the password because we will never want to display the password).

**GET/users?_username_**: Run localhost:3000. Similarly, in order to test this function, we would need to add: “_/users?name=username_” (but replace “_username_” with an actual username that exists in the database). This will create a POST request which will send the user with the specified username’s information in JSON format (without the password again).
