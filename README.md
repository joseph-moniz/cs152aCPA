# cs152aCPA

### About
This website is designed to easily view and display information and data from [Pokemon Showdown!](https://play.pokemonshowdown.com), a competitive Pokemon 
battling simulator run by [Smogon](https://www.smogon.com) that uses Smogon rules and formats. This website contains several features that are useful utilities for competitive Pokemon battling on Pokemon Showdown!. The website assumes general knowledge of Pokemon from users. 

Currently, the website allows users to search for Pokemon sets in a given generation and tier by inputting a Pokemon name, generation, and tier. Users can also view all of a Pokemon's sets in all tiers of a given generation. Furthermore, users can easily view the usage statistics of Pokemon in a given format from four different skill levels (the ELO ratings of the players in the logged battles). A Pokemon's usage percentage is the percentage of total teams in the format that include the Pokemon. The website also displays more specific usage statistics of a Pokemon in a given format, such as its most common moves, abilities, and items, as well as its most common teammates.

The website also has a Teambuilder Helper, where the user selects a generation and tier and inputs Pokemon. Once a full team is made, a summary page is generated, where the user can view the details of the Pokemon on the team in a nicer format, specific stats of the team such as the team archetype, and offensive and defensive strengths and weaknesses of the team. A threatlist is generated for offensive and defensive weaknesses, showing what Pokemon in the user's selected format are dangerous for their team to go up against. The summary page also includes an importable version of the team that users can input to Pokemon Showdown! directly

### Implementation
Javascript for the main app and helper functions in app. Axios is used to get data from various APIs, with functions in the app to parse and reformat the data. HTML and EJS are used to create the view pages. HTML formats and styles the pages that house the different features of the app. Custom dictionaries and
databases are used to help the website in generating various outputs, such as specific error messages, correct formatting of Pokemon and ability names, and most of the
team summary page. Conditional statements and for loops in the EJS determine what HTML elements are shown (dictate what error messages are displayed). The for loops in the EJS also create the HTML for the sets and usage statistics tables. MongoDB models and collections are used to generate team members. Salted-encryption is used to securely implement username/password authentication with the mongoose User model. Bootstrap and some CSS is used for additional styling.

### Heroku
The app is publically available at this link:
[https://thawing-oasis-66234.herokuapp.com/](https://thawing-oasis-66234.herokuapp.com/)

### Packages needed
The following packages will be needed to use the app locally:

  `npm install -g nodemon`
  
  `npm install express-ejs-layouts`
  
  `npm install bcrypt`
 
 `npm install mongoose`
  
  `npm install express-session`
  
  `npm install connect-mongodb-session`

