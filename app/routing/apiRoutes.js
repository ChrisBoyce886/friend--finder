// Use friends array data from Friends.js
var friends = require("../data/friends.js");

// Export function to GET friends object data and post friends array data to it JSON format
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // Create POST and create logic to push users answers into api/friends object,
    // Find difference between each of the users answer and each of the stock friends answers. 
    // Find the closest match. 
    app.post("/api/friends", function(req, res) {
        // Variable to hold name and photo URL
        var closestMatch = {
            name: "",
            photo: "",            
        };
        // Variable to hold total difference between user and friends answers
        var totalDifference = 0;
        // Placeholder variable value to use against total difference variable
        var placeHolderValue = 51;
        // Grab user information
        var userInput = req.body;
        console.log("User info: " + (JSON.stringify(req.body)));        
        // Log all of users' answers into one variable 
        var userAnswers = userInput.answers;
        console.log("userAnswers: " + userAnswers);
        
        // Loop through the friends data array
        for (i = 0; i < friends.length; i++) {
            // Log each friends info
            console.log("friends[i]: " + (JSON.stringify(friends[i])));
            // Reset totalDifference back to 0
            totalDifference = 0;

                // As you loop through each friend above, loop through the current iteration of the friends' answers 
                for(x = 0; x < friends[i].answers.length; x++) {
                    // Turn user answers into an integer and store in new variable 
                    var userAnswersLooped = parseInt(userAnswers[x]);
                    console.log("User Answer: " + userAnswersLooped);
                    // Turn friends answers into an integer and store in new variable 
                    var friendsAnswersLooped = parseInt(friends[i].answers[x]);
                    console.log("Friends Answer: " + friendsAnswersLooped);
                    // Subtract the friends answers from the user answers to find the difference between each question answer
                    // Use Math.absolute to turn negative integers into positive integers to prevent negative solutions
                    answerDifference = Math.abs(userAnswersLooped - friendsAnswersLooped);
                    console.log("Answer Difference: " + answerDifference);                    
                    // As the loop continues, add each answer difference solution to the totalDifference variable to find the total difference 
                    totalDifference += answerDifference;
                    console.log("Total Difference: " + totalDifference); 
                    // For Debugging - Log current placeholder value
                    console.log("Placeholder Before replacement: " + placeHolderValue);
                };
        
                // If the final total difference from each friends' combined answers is less than the placeholder value, 
                if (totalDifference < placeHolderValue) {
                    // Replace placeHolder variable with the new lowest number before next loop
                    placeHolderValue = totalDifference;
                    console.log("Placeholder After replacement: " + placeHolderValue);
                    // Replace closestMatch info with that iteration of the friends' information
                    closestMatch.name = friends[i].name;
                    closestMatch.photo = friends[i].photo;                        
                };
       };
             
        // After logic has finished, Push users information into /api/friends object to be stored
        friends.push(userInput);
        // app.post response - respond with closest match
        res.json(closestMatch);
    });
};