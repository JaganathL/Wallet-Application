import { EmailValidator } from "@angular/forms";

export class Wallet {
    constructor(public id?:number,public name?:string,public balance?:number,public email?:EmailValidator,public pass?:string,public date?:Date){}
}
