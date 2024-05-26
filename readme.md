# This is a simple registration and login using in memory list:
* the current example is a good practice to see how the authentication is checked using nodejs and expressjs and bcrypt
# Packages used in this tutorial:
* expressJS
* nodemon
* bcrypt
* using dotenv to store encoded variables.
* editing package.json to accept type: "module" instead of the default "commonjs"
# The Database:
* we are not using database, we are using an array to push and check users
* it is an in-memory list that gets empty everytime a server restarts.

# some issues encountered during writing this tutorial:
- res.status().json() can sometimes generate an err_http, therefore, it is recommended to start every statement with return to avoid server crash. by every statement, meaning the statement that involve response or res
- since we are using in-memory array to store our information and not an actual database, everytime we make a change, the server automatically restarts and that means the array of users will become empty. Please bear that in mind.

# Goal of this Tutorial:
- the goal is to understand the concept of nodejs and expressjs
- it is crucial to also understand how type: module is used instead of commonjs