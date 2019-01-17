// To be used by the provider
export default class AuthService {

    constructor() {
        this.isAuthenticated = false;
        this.userId = '';
        this.userToken = '';
        this.userEmail = '';
    }

    login(userEmail, userPassword) {
        // call login service and get user token
        return userEmail + ' : ' + userPassword;
    }

    logout() {
        // delete sessions or whatever
    }

    register(name, lastname, birthdate, email, password, otherProps) {
        // call register service or whatever
    }
}