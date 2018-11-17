import {observable} from 'mobx'

export default class LocalStore {
    @observable users = [];

    addUser(user){
        this.users.push(user);
    }

    editUser(user){
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userRef == user.userRef){
                this.users[i] = user;
                return;
            }
        }
    }

    deleteUser(userRef){
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userRef == userRef){
                this.users.splice(i, 1);
                return;
            }
        }
    }

}