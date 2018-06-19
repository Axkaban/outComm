# OutComm

### An App to ease communication between those with speech or hearing dissabilities and those that are not fluent in sign language


the situations when this problem arises might be small, but it is good to be prepared.

### The advantage


With speech to text capabilities powered by IBM Watson API, the user can get the devise to listen to the speaker and be able to read it in text in real time, as well, by utilizing Watson's text to speech, the user will not need to type a question or response and hand over their devise for the other peson to read, they can just click or tap for that text to be heard.

##### Account


the main app functionality is available to everyone, if you wish to save any messages, you can create an account and store questions, sentences, or common responses that you might find helpful, as well as setting up your favorites.




## Technologies

#### Front-end


- IBM's Watson API
- AuthO
- ReactJS
- Semantic UI
- Express & NodeJS

#### Back-end


- Java
- Spring Boot
- Docker
- PostgreSQL

## Steps



Remember to create your account with IBM Watson and Watson-cloud, As well as AuthO, store those keys in a `.env` file

Run `npm install` to acquire all the dependencies. 
and `npm start` will run both the Watson server and the React app.

For the Back end server, make sure you have docker running and have at least 4gb of memory, run `docker-compose up` to build the micro-service. the end-points for users should be `:8081` and for messages `:8082`


## Future commitments

- Migrate the watson server to the microservices.
- Improve the preview and use of stored messages.
- set up as a mobile application.
