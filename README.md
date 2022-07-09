# cs152aCPA

### About
This website is designed to easily view and display information and data from [Pokemon Showdown!](https://play.pokemonshowdown.com), a competitive Pokemon 
battling simulator run by [Smogon](https://www.smogon.com) that uses Smogon rules and formats. This website contains several features that are useful utilities for competitive Pokemon battling on Pokemon Showdown!. The website assumes general knowledge of Pokemon from users. 

Currently, the website allows users to search for Pokemon sets in a given generation and tier by inputting a Pokemon name, generation, and tier. Users can also view all of a Pokemon's sets in all tiers of a given generation. Furthermore, users can easily view the usage statistics of Pokemon in a given format from four different skill levels (the ELO ratings of the players in the logged battles). A Pokemon's usage percentage is the percentage of total teams in the format that include the Pokemon. The website also displays more specific usage statistics of a Pokemon in a given format, such as its most common moves, abilities, and items, as well as its most common teammates.

The website also has a Teambuilder Helper, where the user selects a generation and tier and inputs Pokemon. Once a full team is made, a summary page is generated, where the user can view the details of the Pokemon on the team in a nicer format, specific stats of the team such as the team archetype, and offensive and defensive strengths and weaknesses of the team. A threatlist is generated for offensive and defensive weaknesses, showing what Pokemon in the user's selected format are dangerous for their team to go up against. The summary page also includes an importable version of the team that users can input to Pokemon Showdown! directly

### Implementation
JavaScript for the main app, custom dictionaries, and helper functions in app. Axios is used to get data from various APIs, with functions in the app to parse and reformat the data. HTML and EJS are used to create the view pages. HTML formats and styles the pages that house the different features of the app. Custom dictionaries and databases are used to help the website in generating various outputs, such as specific error messages, correct formatting of Pokemon and ability names, and most of the team summary page. Conditional statements and for loops in the EJS determine what HTML elements are shown (dictate what error messages are displayed). The for loops in the EJS also create the HTML for the sets and usage statistics tables. MongoDB models and collections are used to generate team members. Salted-encryption is used to securely implement username/password authentication with the mongoose User model. Bootstrap and some CSS is used for additional styling.

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
  
  
  
### Screenshots
<details>
  <summary>Screenshot Demos</summary>

  #### View Sets Features
  ![view sets example](https://user-images.githubusercontent.com/58448341/178093481-a5150dfb-c977-4046-afac-5cccb596791b.png)
  ![view sets output](https://user-images.githubusercontent.com/58448341/178093488-d3da2489-ae89-4248-b222-ff4cc9f8e226.png)
  ![view allsets output](https://user-images.githubusercontent.com/58448341/178093494-fa084354-16e6-4064-8790-6cb8424f3699.png)

  #### Usage Statistics Features
  ![usage stats example](https://user-images.githubusercontent.com/58448341/178093505-4d448304-e8fb-4151-8daa-3527e5bca39c.png)  
  ![usage stats tier output](https://user-images.githubusercontent.com/58448341/178093507-e2fbb1c6-2631-4f15-bdce-d1eb9fa2b31d.png)
  ![usage stats mon output](https://user-images.githubusercontent.com/58448341/178093512-6f1ac719-44e5-4161-b687-379806209f38.png)

  #### Teambuilder Helper
  ![teambuilder helper 1](https://user-images.githubusercontent.com/58448341/178093524-ac51e6e1-d379-446a-b251-9d9d6e764eb0.png)
  ![teambuilder helper 2](https://user-images.githubusercontent.com/58448341/178093523-5826720b-5d77-43b7-a7e5-6e288fb329e9.png)

  #### Team Summary Page
  ![team summary 1](https://user-images.githubusercontent.com/58448341/178093531-cb4ea4b4-c634-4b60-95ba-82d77a934483.png)
  ![team summary 2](https://user-images.githubusercontent.com/58448341/178093536-6bed2898-0e6a-4cd0-84fa-8d380fb97f11.png)
  ![team summary 3](https://user-images.githubusercontent.com/58448341/178093540-5da012dd-30d1-4a7f-960e-3c56932d59e2.png)
  ![threatlist example](https://user-images.githubusercontent.com/58448341/178093545-3f2a6d8b-fc75-4d2c-97db-646af3a8cd4d.png)
  
  #### Home Page
  ![home page](https://user-images.githubusercontent.com/58448341/178093629-0f933aee-aa1a-4aa5-949c-8efeb0189d0e.png)

</details>
