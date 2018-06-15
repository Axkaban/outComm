import Axios from 'axios';

const route = `${process.env.REACT_APP_DB_USER_SERVER}`;

const User = {


 saveUserInDb(incomingUser){

       return Axios.get(route)
        .then(res => res.data)
        .then(users => {
            if(users.length > 0){
                
                let theUser =users.find(user => user.nickname === incomingUser.nickname);
                if(theUser){
                    console.log(theUser);
                    return theUser.id;
                }else{
                    console.log('no user')
                    let data = {
                        name: incomingUser.name,
                        picture: incomingUser.picture,
                        nickname: incomingUser.nickname
                     }
                     return Axios.post(route, data)
                    .then( res => res.data.id );
                }
            }else{
                console.log('new')
                let data = {
                    name: incomingUser.name,
                    picture: incomingUser.picture,
                    nickname: incomingUser.nickname
                 }
                 return Axios.post(route, data)
                .then( res => console.log(res.data.id) );
            }

        });

        
    
    }

    // getUsers(){

    // }
}

export default User;