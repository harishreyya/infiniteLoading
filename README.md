# infiniteLoading

## Deployed link
[link](http://3.110.28.121:3000/)

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone the repository `[repo](https://github.com/harishreyya/infiniteLoading.git)`
- Open the code in your VS code, open Backend folder in the terminal by running `cd Backend`
-Now run `npm install` or `npm i` which will install all the required packages of node
- After installation, now run `npm run server` and  you will see `server is listening on 8000` 
- Simlutaniously, open a new terminal and run `cd frontend` by which you get into frontend folder
- Now here, run `npm install` or `npm i` which will install all the required packages of react aswell
- After installation, now run `npm start` and  you will see a new window will be opening in the default browser which is running on port `http://localhost:3000`
- Open MongoDb compass and url `mongodb://localhost:27017/loading` which will create database collection named contents
- Now you see app running scroll down for infinite loading

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- MongoDB
- Express JS
- React JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- `mongoose`<br/>
  connecting MongoDB to the Node js server
- `nodemon`<br/>
  It monitors your project and automatically restarts when detects any changes.
- `cors`<br/>
  allowing browser should permit loading resources

#### Frontend
- `axios`<br/>
  JavaScript library to make HTTP requests or fetching data
- `react-router-dom`<br/>
  implementation of dynamic routing 
-`react-infinite-scroll-component`<br/>
  for implementation of infinite loading
#### Cloud Deployment

- `AWS`
used EC2 for deploying the MongoDb (database), node js (Backend) and react js (frontend)
