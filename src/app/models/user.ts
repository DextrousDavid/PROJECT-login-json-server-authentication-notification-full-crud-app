export class User {
    constructor(
        public id: number | any,
        public customerName: string,
        public customerAcctNum: string,
        public customerEmailAddress: string,
        public customerAcctType: string,
        public customerAge: string | any,
        public reasonForComplaint: string,
    ) {}
}

export interface UserInterface {
    id: number | any,
    customerName: string,
    customerAcctNum: string,
    customerEmailAddress: string,
    customerAcctType: string,
    customerAge: string | any,
    reasonForComplaint: string,
}
