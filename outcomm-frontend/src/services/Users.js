import Axios from 'axios';

const route = `${process.env.REACT_APP_DB_USER_SERVER}`;

const User = {

    saveUserInDb(incomingUser){

        console.log(incomingUser);

        Axios.get(route)
        .then(res => res.data)
        .then(user => {
            if(!user.length <= 0){
                if(user.find(user => user.email === incomingUser.email)){
                    return;
                }
            }

        });
        
        // let data = {
        //    name: incomingUser.name,
        //    picture: incomingUser.picture,
        //    email: incomingUser.email
        // }

        // return fetch(route, {
        //     method: "POST",
        //     body: data
        // })
        // .then(res => console.log(res));

    }
}

export default User;