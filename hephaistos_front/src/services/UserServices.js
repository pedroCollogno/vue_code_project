class CurrentUser {
    constructor(){
        this.isAuthenticated = false;
    }

    authenticate() {
        this.isAuthenticated = true;
    }

    logOut() {
        this.isAuthenticated = false;
    }

}

let currentUser = new CurrentUser();

export default currentUser;