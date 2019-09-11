# FRIEND FINDER

The concept of *Friend Finder* is essentially a simple dating-style application meant for finding friends based on 10 survey questions that the user completes. Get matched up to new friends who have similar characteristics and personality traits as you! 

The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end which serves up CSS and Bootstrap styled HTML pages. 

Click [here](https://friend--finder--app.herokuapp.com/) to view the application!


## Deployment

1. Clone this repo - https://github.com/ChrisBoyce886/friend--finder.git
2. Run `npm install` command from the root directory
3. Set the `PORT` environment variable within `server.js` file to the number of your choice. `3000` is set as default. Example: `var PORT = process.env.PORT || 3000`
4. Run `node server.js` command from the root directory
5. Navigate to your browser and enter `localhost:3000`(Or your preferred PORT number)


## Design Notes

* Each survey question is assigned a value from 1 (Strongly Agree) to 5 (Strongly Disagree). 
* When the survey is submitted by the user, the values of each answer are taken and compared to an existing record of pre-selected friends. 
* Each question's answer is compared to the same question's answer for each of the friends in the existing record, and the value difference between each question is logged.
* The total difference per friend is calculated by adding the value differences for all 10 questions. 
* The friend with the lowest total difference is rendered to the users screen as the closest friend match which displays their name and a photograph.
* Survey will not render the results unless the name form has been filled out and all survey questions have been answered.
* The users information and answers are then added to the existing friends record and will be used for comparison when another user takes the survey. (Note: Once the express server is stopped, all user information in the record will be deleted and reset to the pre-selected friends)

     
## Demonstration gif:

* This gif demonstrates how to access the survey, how to fill out the survey, potential error alerts, the resulting friend match from your survey answers, and the api/friends object showing the user information being added to the freinds record. 
   
![friendFinderGif](app/public/screenshot/friendFinder.gif "friendFiner.gif")

     
## Built With

* [Node.js](https://nodejs.org/en/docs/)
* JavaScript
* [jQuery](https://jquery.com/)

**NPM Packages:**

* [Express](https://www.npmjs.com/package/express)
* [Body-Parser](https://www.npmjs.com/package/body-parser)
* [Path](https://www.npmjs.com/package/path)
