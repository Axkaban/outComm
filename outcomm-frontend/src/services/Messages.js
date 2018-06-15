import Axios from 'axios';

const route = `${process.env.REACT_APP_DB_MESSAGES_SERVER}`;

const Messages = {

    async getMessages(userId){
        return await Axios.get(route)
        .then(messages => {

           return messages.data.map(message => message.userId === userId);
        })
    },

   async getFaveMessages(userId){
      
       let messages = await this.getMessages(userId);
        console.log(messages);
        return messages.map(message => message.favorite === true);
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