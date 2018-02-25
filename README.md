# AWC-workshop-Spring2018-demo-restaurant-generator
### This is a work shop demo for AWC's workshop I host on Feburary 19th.
### ABOUT
* Create a random restaurant generator on a webpage that actually can help you to randomly get a restaurant for you.
* This demo is used for getting start of the project on your own
	* It contains a structured HTML, CSS, and JavaScript file that actually you can make use of. You can use them to create your own generator.
	* It contains two folders for level 1 and level 2. IF you had web development experience before, go for level 2; otherwise, try level 1 first and step into level 2 if you are willing to.
* LEVELs:
	1. For level 1, you are actually hard coding all the restaurants you like into the program, and then it randomly generates one for you.
	2. For level 2, you are calling Yelp's API, and by entering the zip-code you are currently at, Yelp's API returns a JSON file that contains all the information of the restuarants in this zip-code area. By processing the JSON file, you get all the restaurants and stores them into an array that can be selected randomly.
	* for more information about Yelp's API, check out this link: https://www.yelp.com/developers/documentation/v3/business_search


###Level 1
*TODOs:
1. work on the stylesheet
2. change the button from "generate restaurant" into "try again" for the second time click it
3. fix the append problem (hint: http://api.jquery.com/replacewith/)
4. add validation
5. expand your restaurant array (if you choose to do level2, dont worry about this)
6. DIY the things you want to put in

###Level 2 (optional)
*TODOs:
1. install nodejs and npm on your laptop. https://nodejs.org/en/download/
2. register for an API key on Yelp
3. go to level2 and do `npm install`
4. work on the stylesheet
5. add a redirect button back to the front page
6. generate more info, such as image, address, and phone number
7. DIY the contents that you want to put in, such as: make it one page only
8. if you want to work on it more, try to use an ExpressJS structure. Instead of using HTML, use ejs instead
