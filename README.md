# cs152aCPA

This website is designed to easily view and display information and data from [Pokemon Showdown](https://play.pokemonshowdown.com), a competitive Pokemon 
battling simulator run by [Smogon](https://www.smogon.com) that uses Smogon rules and formats. Currently, the website allows users to search for Pokemon sets in a given
generation and tier by inputting a Pokemon name, generation, and tier. Users can also view all of a Pokemon's sets in all tiers of a given generation. Furthermore, users
can easily view the usage statistics of Pokemon in a given format from four different skill levels (the ELO ratings of the players in the logged battles). A Pokemon's
usage percentage is the percentage of total teams in the format that include the Pokemon. The website also displays more specific usage statistics of a Pokemon in a given format, such as its most common moves, abilities, and items, as well as its most common teammates.

Ideally, the website would also have a teambuilder helper, where the user selects a generation and tier and inputs Pokemon. The website would suggest new Pokemon to add on the team based on the Pokemon that were already selected.

Implementation: Javascript for the main app and helper functions in app. Axios is used to get data from various APIs, with functions in the app to parse and reformat the
data. HTML and EJS are used to create the view pages. HTML formats and styles the pages that house the different features of the app. A custom dictionary is used to help the website in "wrong generation" errors. Conditional statements and for loops in the EJS determine what HTML elements are shown (dictate what error messages are displayed). The for loops in the EJS also create the HTML for the sets and usage statistics tables. Bootstrap and some CSS is used for additional styling.

### Packages needed
The following packages will be needed to use the app:

  `npm install nodemon`
  
  `npm install express-ejs-layouts`
  
  `npm install bcrypt`
 
 `npm install mongoose`
  
  `npm install express-session`
  
  `npm install connect-mongodb-session`

