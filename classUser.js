export default class User{
    email;
    password;
    firstName;
    lastName;

    constructor(email, password, firstName, lastName){
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    signInRequest(email, password)
    {
        return (this.email === email && this.password === password);
    }
};