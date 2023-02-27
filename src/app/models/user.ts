export class User {
    constructor(
        public id: number | any,
        public firstName: string,
        public lastName: string,
        public address: string,
        public phoneNumber: string,
        public gender: string,
    ) {}
}

export interface UserInterface {
    id: number | any
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    gender: string
}
