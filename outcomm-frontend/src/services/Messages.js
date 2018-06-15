import Axios from 'axios';

const route = `${process.env.REACT_APP_DB_MESSAGES_SERVER}`;

const Messages = {

    getMessages(userId){
        console.log(userId);
        let userMessages = [];
        return Axios.get(route)
        .then(messages => {
           
           messages.data.map(message => {
              if (message.userId === userId){ 
                 userMessages.push(message);
                }else{
                    console.log('mo message')
                }
              
            });
            console.log(userMessages, "from get")
           return userMessages;

        })
    },

   async getFaveMessages(userId){
      let faves = [];
       let messages = await this.getMessages(userId);
        console.log(messages);
        messages.map(message => {
            console.log(message.favorite, "<--message user || user ---> ", userId);
           if (message.favorite === "true"){ 
              faves.push(message);
             }else{
                 console.log('mo message')
             }
           
         });
         return faves;
    },

    saveMessage(messageObj){

        Axios.post(route, messageObj);

    },

    toggleFave(id, message){
        Axios.patch(`${route}/${id}`, message);
    },


    deleteMessage(id){
        Axios.delete(`${route}/${id}`)
        .then(res => console.log(res));
    }
}
export default Messages;