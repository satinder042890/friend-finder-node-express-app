# Friend Finder Application
## Description
Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Materialize CSS framework on the front end.

## Demo
Friend Finder is deployed to Heroku. Please check it out here.

## Installation
To install the application follow the instructions below:

* git clone "https://github.com/satinder042890/friend-finder-node-express-app.git"
* cd friend-finder-node-express-app
* npm install

## USE 
To use our web service, simply go to our homepage and take our state-of-the-art survey. Immediately after submitting the survey, your perfect best friend will pop up. We also have an API you can access to the network's users and their personalized information. For research purposes.

## Requirements
* Modularity in the form of separate files for server logic, storing of friends, views, and routing
* 10-question survey to assess uniqueness of users
* Use express, body-parser, and path npm packages in the server.js file
* Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js)
* Appropriate GET and POST routes for serving HTML pages and API callshttps://murmuring-island-94264.herokuapp.com/
* Separate file for storing friends (friends.js)
* Calculate best match for user once survey is completed and return that match to the user

## Technologies Used
* JavaScript
* jQuery
* node.js
* Express.js
* HTML
* Bootstrap

## Code Explanation
* Our server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
* There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
* Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
* A modal is then toggled, displaying the the best match to the person who just took the survey
Friends are stored as such:
'''
{
	name: "Charlie",
	photo: "https://vignette3.wikia.nocookie.net/itsalwayssunny/images/0/0a/Charlie_%289%29.jpg",
	scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
}
'''

## Screenshots

### Home Page

![alt text](https://github.com/satinder042890/friend-finder-node-express-app/blob/master/app/images/home.png)

### Survey Page

![alt text](https://github.com/satinder042890/friend-finder-node-express-app/blob/master/app/images/survey.png)
