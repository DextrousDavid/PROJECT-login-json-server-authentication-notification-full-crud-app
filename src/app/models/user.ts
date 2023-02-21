export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public phoneNumber: string,
        public gender: string,
    ) {}
}

export interface UserInterface {
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    gender: string
}