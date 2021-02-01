# Blue Square

Blue Square is a full-stack react and rails application for browsing and reviewing ski resorts. It was inspired by my own love of skiing, and a need to showcase my full-stack capabilities. The application allows you to sort and filter through resorts by over 10 different queries, while viewing them on a dynamic map. You can visit each resort's page, where you can find in depth information and reviews. If you are logged in, you can add reviews and save resorts to your favorites.

## Heroku Hosting

For the full experience, the entire application is hosted with Heroku. It may take a minute for both the api and front-end to load, so please allow a minute for the page to render. On the resort page, there will be a scroll with many resorts when fully loaded.

https://blue-square-client.herokuapp.com/


## Front-End

The front-end was created with 'create-react-app'. From there, I included react-router to simplify the navigation through the site. 

### Redux

I refactored Blue-Square with redux to simplify passing user props through multiple children. Since I was using it for users, I also created actions for resorts and reviews. For users, I keep track of if there is a current user, and their information. I also have a loading state while I wait for information from the backend to return. 

In order to keep the requests down to the backend, the resort data is fetched and stored in the state, since the amount of resorts is relatively small. This also allows users to quickly look at each resort's page, since the data is already in the application.
 
### Node Modules

To display all of the resorts on a map, I use the google-maps-api and the corresponding react node module. I chose google maps because it had the most robust data, and I would be making a relatively small amount of calls since I would be loading in my own data for the resorts. I used google markers to display the location of each resort, with info boxes when clicked. I've also added in my own function to change the zoom and focal point based on which resorts are currently filtered. This allows the map to zoom into specific regions, or to a single resort. 

On each resort page, there is a pie chart that uses chart.js to render information about the ski runs at the resort. 

For development, I used redux-thunk to display the redux-devtools-extension.

## Back-end
 
The back-end was created with a boiler-plate rails application with a postgres database. The backend provides an API for the front end with information about users, resorts, and reviews. IT also handles user authorization, and serialized responses.
 
Back-end: https://github.com/dawncronin/Blue-Square-Backend
 
### User Authorization
 
Blue square utilizes the gems 'bcrypt' and 'jwt' for user authentication. When creating a user or logging in, the user information is encoded into a JWT token, which is sent back in the response to the frontend. This information is stored in the user's local storage. When a user returns, the front-end retrieves this information from the local storage, and sends a request to the backend to be decoded and validated. If the token is not expired and valid, the backend sends back an authorized status, otherwise unauthorized. The frontend uses this information to change what is displayed to the user.
 
### Postgres
 
Rails is configured to save database information in postgres for development and production use. 
 
### Google Cloud Storage
 
Resort photos are stored externally using GCP.
 
### Serializers
 
In order to save time with sending data to the frontend, I've implemented the gem fast-json-api, which allows you to easily build out the custom object to be sent back, and sends the data quicker than without.
 
## Screen Shots:

